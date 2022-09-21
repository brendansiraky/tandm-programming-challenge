import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useDeleteDocument = () => {
    const [isLoading, setIsLoading] = useState(false)

    async function handleDeleteDocument(id) {
        try {
            setIsLoading(true)
            await fetcher(`/documents/${id}`, {
                method: 'DELETE',
                hasAuthentication: true,
            })
            toast.success('Document Deleted Successfully')
        } catch (err) {
            toast.error('Failed To Delete Documents.')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [handleDeleteDocument, isLoading]
}