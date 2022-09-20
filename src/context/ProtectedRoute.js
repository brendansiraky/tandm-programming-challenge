import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { getItemFromLocalStorage } from '../utility/localStorage'

export const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const authContext = getItemFromLocalStorage('authContext')
        if (!authContext) {
            localStorage.clear()
            navigate('/')
        }
        // eslint-disable-next-line
    }, [])

    return children
}