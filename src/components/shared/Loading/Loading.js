import { Loader } from '../Loader/Loader'

export const Loading = ({ isLoading, children }) => {
    if (isLoading) {
        return <Loader />
    }

    return children
}