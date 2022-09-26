import styles from './AuthenticationContainer.module.scss'

export const AuthenticationContainer = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}