import { useEffect } from 'react'

import { useGetViewableDocuments } from '../../hooks/useGetViewableDocuments'
import { Table } from '../shared/Table/Table'
import styles from './DocumentsView.module.scss'

export const DocumentsView = () => {
    const [
        handleGetDocuments,
        documents,
        fetchIsLoading
    ] = useGetViewableDocuments()

    useEffect(() => {
        handleGetDocuments()
    }, [])

    return (
        <div className={styles.wrapper}>
            <h1>Document Management</h1>
            <Table
                thead={
                    <thead>
                        <tr>
                            <th>Uploaded By</th>
                            <th>Name</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                }
                tbody={
                    <tbody>
                        {fetchIsLoading ? <tr><td>Loading...</td></tr> : documents.map((document => (
                            <tr key={document.id}>
                                <td>{document.uploadedBy}</td>
                                <td>{document.name}</td>
                                <td><button type="button">VEIW DOCUMENT</button></td>
                            </tr>
                        )))}
                    </tbody>
                }
            />
        </div>
    )
}