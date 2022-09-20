import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetcher } from '../utility/fetcher'
import { setItemInLocalStorage } from '../utility/localStorage'

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigate()

    async function handleLogin(payload) {
        try {
            setIsLoading(true)
            const authContext = await fetcher('/auth/login', {
                method: 'POST',
                body: payload
            })
            setItemInLocalStorage('authContext', { accessToken: authContext.access_token })
            navigation('/dashboard')
        } finally {
            setIsLoading(false)
        }
    }

    return [handleLogin, isLoading]
}