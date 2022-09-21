import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useUpdateComment = () => {
    const [isLoading, setIsLoading] = useState(false)

    async function handleUpdateComment(documentId, payload) {
        try {
            setIsLoading(true)
            await fetcher(`/shared-documents/comment/${documentId}`, {
                method: 'PATCH',
                hasAuthentication: true,
                body: payload
            })
            toast.success('Successfully Updated Comment')
        } catch (err) {
            toast.error('Failed To Update Comment')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [
        handleUpdateComment,
        isLoading
    ]
}