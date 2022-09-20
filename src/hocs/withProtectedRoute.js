import { ProtectedRoute } from '../context/ProtectedRoute'

export const withProtectedRoute = (Component) => {
    return (
        <ProtectedRoute>
            <Component />
        </ProtectedRoute>
    )
}