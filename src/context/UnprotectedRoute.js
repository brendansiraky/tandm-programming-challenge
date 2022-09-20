import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { getItemFromLocalStorage } from '../utility/localStorage'

export const UnprotectedRoute = ({ children }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const authContext = getItemFromLocalStorage('authContext')
        if (authContext) {
            navigate('/manage')
        }
        // eslint-disable-next-line
    }, [])

    return children
}