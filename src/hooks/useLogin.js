import { useState } from 'react'

import { fetcher } from '../utility/fetcher'
import { setItemInLocalStorage } from '../utility/localStorage'

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(payload, onSuccess) {
        try {
            setIsLoading(true)
            const authContext = await fetcher('/auth/login', {
                method: 'POST',
                body: payload
            })
            setItemInLocalStorage('authContext', { accessToken: authContext.access_token })
            onSuccess()
        } finally {
            setIsLoading(false)
        }
    }

    return [handleLogin, isLoading]
}