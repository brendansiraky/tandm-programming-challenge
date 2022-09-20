import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { fetcher } from '../utility/fetcher'

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigate()

    async function handleRegisterUser(payload) {
        try {
            setIsLoading(true)
            await fetcher('/users', {
                method: 'POST',
                body: payload
            })
            toast.success('Successfully Registered User.')
            navigation('/login')
        } catch (err) {
            toast.error('Failed To Register User.')
            throw err
        } finally {
            setIsLoading(false)
        }
    }

    return [handleRegisterUser, isLoading]
}