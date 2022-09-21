import { useEffect } from 'react'

import { useDeleteDocument } from '../../hooks/useDeleteDocument'
import { useGetManageableDocuments } from '../../hooks/useGetManageableDocuments'
import { useUploadDocument } from '../../hooks/useUploadDocument'
import { Table } from '../shared/Table/Table'
import { copyToClipboard } from '../../utility/copyToClipboard'
import styles from './DocumentManagement.module.scss'

export const DocumentManagement = () => {
    const [onUploadDocument, uploadIsLoading] = useUploadDocument()
    const [
        handleGetDocuments, 
        documents, 
        fetchIsLoading
    ] = useGetManageableDocuments()
    const [onDeleteDocument, deleteIsLoading] = useDeleteDocument()

    useEffect(() => {
        handleGetDocuments()
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

    function handleCopyLink(path) {
        copyToClipboard(`${process.env.REACT_APP_API_ENDPOINT}/${path}`)
    }

    return (
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
                                <td>
                                    <button type="button" onClick={() => handleDeleteDocument(document.id)} disabled={deleteIsLoading}>DELETE</button>
                                    <button type="button" onClick={() => handleCopyLink(document.path)}>COPY LINK</button>
                                    <button type="button">VEIW DOCUMENT</button>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                }
            />
            <input type='file' onChange={handleUploadDocument} disabled={uploadIsLoading} />
        </div>
    )
}