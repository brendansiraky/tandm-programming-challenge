import { toast } from 'react-toastify'

import { getItemFromLocalStorage } from './localStorage'

export const fetcher = async (endpoint, config) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }

    const params = {
        method: config?.method ? config.method : 'GET',
        headers,
    }

    if (config && config.hasAuthentication) {
        const authContext = getItemFromLocalStorage('authContext')
        headers.Authorization = `Bearer ${authContext.accessToken}`
    }

    if (config && config.body) {
        params.body = JSON.stringify(config.body)
    }

    try {

        const response = await fetch(`http://127.0.0.1:3001${endpoint}`, params)

        if (response.status > 299 || response.status < 200) {
            throw response
        }

        const contentType = response.headers.get('content-type')
        if (contentType && contentType.indexOf('application/json') !== -1) {
            return response.json().then((data) => {
                return data
            })
        } else {
            return response.text().then((text) => {
                return text
            })
        }
    } catch (error) {
        const parsedError = await error.json()
        if (parsedError.message) {
            toast.error(parsedError.message)
        }
        throw error
    }
}