import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useGetViewableDocuments = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [documents, setDocuments] = useState([])

    async function handleGetDocuments() {
        try {
            setIsLoading(true)
            const response = await fetcher('/shared-documents', {
                hasAuthentication: true,
            })
            setDocuments(response)
        } catch (err) {
            toast.error('Failed To Get Documents.')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [
        handleGetDocuments,
        documents,
        isLoading
    ]
}