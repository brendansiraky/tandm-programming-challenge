import { useEffect, useState, useRef } from 'react'

import { DashboardContentHeading } from '../shared/DashboardContentHeading/DashboardContentHeading'
import { useGetManageableDocuments } from '../../hooks/useGetManageableDocuments'
import { ShareDocumentModal } from '../ShareDocumentModal/ShareDocumentModal'
import { DocumentTile } from '../shared/DocumentTile/DocumentTile'
import { useUploadDocument } from '../../hooks/useUploadDocument'
import { Loading } from '../shared/Loading/Loading'
import { Modal } from '../shared/Modal/Modal'
import styles from './MyDocuments.module.scss'

export const MyDocuments = () => {
    const [manageDocument, setManageDocument] = useState(null)

    const [
        handleGetDocuments,
        documents,
        documentsLoading
    ] = useGetManageableDocuments()

    const [onUploadDocument, uploadIsLoading] = useUploadDocument()

    const inputRef = useRef(null)

    const handleClick = () => inputRef.current.click()

    function handleUploadDocument(e) {
        const file = e.target.files[0]
        if (file) {
            onUploadDocument(file)
                .then(() => handleGetDocuments())
        }
    }

    useEffect(() => {
        handleGetDocuments()
    }, [])

    return (
        <div className={styles.wrapper}>
            <DashboardContentHeading
                title="My Documents"
                action={
                    <>
                        <button disabled={uploadIsLoading} onClick={handleClick}>Add Document</button>
                        <input type="file" ref={inputRef} onChange={handleUploadDocument} style={{ display: 'none' }} />
                    </>
                }
            />
            <Loading isLoading={documentsLoading}>
                <ul className={styles.wrapper}>
                    {documents.map(document => (
                        <DocumentTile 
                            key={document.id}
                            {...document}
                            action={<button onClick={() => setManageDocument(document)}>Manage</button>}
                        />
                    ))}
                </ul>
            </Loading>
            <Modal show={manageDocument} onHide={() => setManageDocument(null)}>
                <ShareDocumentModal documentId={manageDocument?.id} />
            </Modal>
        </div>
    )
}