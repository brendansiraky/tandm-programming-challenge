import { UnprotectedRoute } from '../context/UnprotectedRoute'

export const withUnprotectedRoute = (Component) => {
    return (
        <UnprotectedRoute>
            <Component />
        </UnprotectedRoute>
    )
}