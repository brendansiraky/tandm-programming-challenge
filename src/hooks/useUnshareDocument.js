import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useUnshareDocument = () => {
    const [isLoading, setIsLoading] = useState(false)

    async function handleShareDocument(documentId, userId) {
        try {
            setIsLoading(true)
            await fetcher(`/shared-documents/${documentId}/${userId}`, {
                method: 'DELETE',
                hasAuthentication: true,
            })
            toast.success('Successfully Unshared Document')
        } catch (err) {
            toast.error('Failed To Get Documents.')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [
        handleShareDocument,
        isLoading
    ]
}