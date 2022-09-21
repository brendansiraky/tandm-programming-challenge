import { useEffect, useState } from 'react'

import { useGetManageableDocuments } from '../../hooks/useGetManageableDocuments'
import { ShareDocumentModal } from '../ShareDocumentModal/ShareDocumentModal'
import { useUploadDocument } from '../../hooks/useUploadDocument'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'
import { Modal } from '../shared/Modal/Modal'
import { Table } from '../shared/Table/Table'
import styles from './DocumentsManagement.module.scss'

export const DocumentsManagement = () => {
    const [sharedDocumentSelected, setSharedDocumentSelected] = useState(null)

    const [onUploadDocument, uploadIsLoading] = useUploadDocument()
    const [
        handleGetDocuments,
        documents,
        fetchIsLoading
    ] = useGetManageableDocuments()
    const [onDeleteDocument, deleteIsLoading] = useDeleteDocument()

    useEffect(() => {
        handleGetDocuments()
        // eslint-disable-next-line
    }, [])

    function handleUploadDocument(e) {
        const file = e.target.files[0]
        if (file) {
            onUploadDocument(file)
                .then(() => handleGetDocuments())
        }
    }

    function handleDeleteDocument(id) {
        onDeleteDocument(id)
            .then(() => handleGetDocuments())
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h1>Document Management</h1>
                <Table
                    thead={
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                    }
                    tbody={
                        <tbody>
                            {fetchIsLoading ? <tr><td>Loading...</td></tr> : documents.map((document => (
                                <tr key={document.id}>
                                    <td>{document.name}</td>
                                    <td className={deleteIsLoading ? styles.disabled : undefined}>
                                        <span onClick={() => handleDeleteDocument(document.id)} className="link">Delete Document</span>
                                        <a className="link" rel="noreferrer" href={`${process.env.REACT_APP_API_ENDPOINT}/${document.path}`} target="_blank">
                                            View Document
                                        </a>
                                        <span onClick={() => setSharedDocumentSelected(document.id)} className="link">Share Document</span>
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    }
                />
                <input type='file' onChange={handleUploadDocument} disabled={uploadIsLoading} />
            </div>
            {sharedDocumentSelected && 
                <Modal
                    show={sharedDocumentSelected}
                    onHide={() => setSharedDocumentSelected(null)}
                >
                    <ShareDocumentModal documentId={sharedDocumentSelected} />
                </Modal>}
        </>
    )
}