import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useUploadDocument = () => {
    const [isLoading, setIsLoading] = useState(false)

    async function handleUploadDocument(payload) {
        const data = new FormData()
        data.append('file', payload)
        try {
            setIsLoading(true)
            await fetcher('/documents', {
                method: 'POST',
                hasAuthentication: true,
                file: true,
                body: data,
            })
            toast.success('Successfully Uploaded Document.')
        } catch (err) {
            toast.error('Failed To Upload Document.')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [handleUploadDocument, isLoading]
}