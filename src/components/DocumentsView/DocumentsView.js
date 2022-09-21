import { useEffect, useState } from 'react'

import { useGetViewableDocuments } from '../../hooks/useGetViewableDocuments'
import { UpdateCommentModal } from '../UpdateCommentModal/UpdateCommentModal'
import { Table } from '../shared/Table/Table'
import { Modal } from '../shared/Modal/Modal'
import styles from './DocumentsView.module.scss'

export const DocumentsView = () => {
    const [documentSelected, setDocumentSelected] = useState(null)

    const [
        handleGetDocuments,
        documents,
        fetchIsLoading
    ] = useGetViewableDocuments()

    useEffect(() => {
        handleGetDocuments()
        // eslint-disable-next-line
    }, [])

    function handleSubmitComment() {
        setDocumentSelected(null)
        handleGetDocuments()
    }

    return (
        <>
            <div className={styles.wrapper}>
                <h1>Document View</h1>
                <Table
                    thead={
                        <thead>
                            <tr>
                                <th>Shared By</th>
                                <th>Name</th>
                                <th>Comment</th>
                                <th>Manage</th>
                            </tr>
                        </thead>
                    }
                    tbody={
                        <tbody>
                            {fetchIsLoading ? <tr><td>Loading...</td></tr> : documents.map((document => (
                                <tr key={document.id}>
                                    <td>{document.sharedBy}</td>
                                    <td>{document.name}</td>
                                    <td>{document.comment || 'No Comment'}</td>
                                    <td>
                                        <a className="link" rel="noreferrer" href={`${process.env.REACT_APP_API_ENDPOINT}/${document.path}`} target="_blank">
                                            View Document
                                        </a>
                                        <span onClick={() => setDocumentSelected(document)} className="link">
                                            Update Comment
                                        </span>
                                    </td>
                                </tr>
                            )))}
                        </tbody>
                    }
                />
            </div>
            {!!documentSelected &&
                <Modal
                    show={documentSelected}
                    onHide={() => setDocumentSelected(null)}
                >
                    <UpdateCommentModal
                        documentId={documentSelected.id}
                        initialComment={documentSelected.comment}
                        onUpdateComment={handleSubmitComment}
                    />
                </Modal>}
        </>
    )
}