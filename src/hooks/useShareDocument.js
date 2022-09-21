import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useShareDocument = () => {
    const [isLoading, setIsLoading] = useState(false)

    async function handleShareDocument(documentId, userId) {
        try {
            setIsLoading(true)
            await fetcher(`/shared-documents/${documentId}`, {
                method: 'POST',
                hasAuthentication: true,
                body: { userId }
            })
            toast.success('Successfully Shared Document')
        } catch (err) {
            toast.error('Failed To Share Documents')
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