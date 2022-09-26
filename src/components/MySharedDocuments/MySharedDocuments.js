import { useEffect, useState } from 'react'

import { DashboardContentHeading } from '../shared/DashboardContentHeading/DashboardContentHeading'
import { useGetViewableDocuments } from '../../hooks/useGetViewableDocuments'
import { UpdateCommentModal } from '../UpdateCommentModal/UpdateCommentModal'
import { DocumentTile } from '../shared/DocumentTile/DocumentTile'
import { Modal } from '../shared/Modal/Modal'
import styles from './MySharedDocuments.module.scss'

export const MySharedDocuments = () => {
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
        <div className={styles.wrapper}>
            <DashboardContentHeading title="My Shared Documents" />
            <ul className={styles.wrapper}>
                {documents.map(document => (
                    <DocumentTile 
                        key={document.id} 
                        {...document}
                        action={<button onClick={() => setDocumentSelected(document)}>Comment</button>}
                    />
                ))}
            </ul>
            <Modal
                show={documentSelected}
                onHide={() => setDocumentSelected(null)}
            >
                <UpdateCommentModal
                    documentId={documentSelected?.id}
                    initialComment={documentSelected?.comment}
                    onUpdateComment={handleSubmitComment}
                />
            </Modal>
        </div>
    )
}