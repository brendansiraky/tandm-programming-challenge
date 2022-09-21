import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useGetDocument = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [document, setDocument] = useState([])

    async function handleGetDocument(id) {
        try {
            setIsLoading(true)
            const response = await fetcher(`/documents/${id}`, {
                hasAuthentication: true,
            })
            setDocument(response)
        } catch (err) {
            toast.error('Failed To Get Document.')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [
        handleGetDocument,
        document,
        isLoading
    ]
}