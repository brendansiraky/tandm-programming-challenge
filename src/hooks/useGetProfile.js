import { useState } from 'react'

import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useGetProfile = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [profile, setProfile] = useState(null)

    async function handleGetProfile(id) {
        try {
            setIsLoading(true)
            const response = await fetcher(`/users`, {
                hasAuthentication: true,
            })
            setProfile(response)
        } catch (err) {
            toast.error('Failed To Get Profile.')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [
        handleGetProfile,
        profile,
        isLoading
    ]
}