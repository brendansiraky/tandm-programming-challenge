import { useEffect } from 'react'

import { useUnshareDocument } from '../../hooks/useUnshareDocument'
import { useShareDocument } from '../../hooks/useShareDocument'
import { useGetDocument } from '../../hooks/useGetDocument'

import styles from './ShareDocumentModal.module.scss'

export const ShareDocumentModal = ({ documentId }) => {    
    const [
        handleGetDocument,
        document,
        documentIsLoading
    ] = useGetDocument()

    const [
        onShareDocument,
        shareIsLoading
    ] = useShareDocument()

    const [
        onUnshareDocument,
        unshareIsLoading
    ] = useUnshareDocument()

    useEffect(() => {
        handleGetDocument(documentId)
        // eslint-disable-next-line
    }, [])

    function handleShareDocument(userId) {
        onShareDocument(documentId, userId)
            .then(() => {
                handleGetDocument(documentId)
            })
    }

    function handleUnshareDocument(userId) {
        onUnshareDocument(documentId, userId)
            .then(() => {
                handleGetDocument(documentId)
            })
    }

    return (
        <>
            {documentIsLoading && 'Loading...'}
            {!documentIsLoading &&
                <div className={shareIsLoading || unshareIsLoading ? styles.disabled : undefined}>
                    <div className={styles.section}>
                        <h2>Shared With:</h2>
                        <ul>
                            {document.shared && document.shared.map(user => (
                                <li onClick={() => handleUnshareDocument(user.id)} key={user.id}>{user.username}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2>Not Shared With:</h2>
                        <ul>
                            {document.shareable && document.shareable.map(user => (
                                <li onClick={() => handleShareDocument(user.id)} key={user.id}>{user.username}</li>
                            ))}
                        </ul>
                    </div>
                </div>}
        </>
    )
}