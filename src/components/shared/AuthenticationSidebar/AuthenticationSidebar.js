import styles from './AuthenticationSidebar.module.scss'

export const AuthenticationSidebar = ({ children, heading, summary, accountAction }) => {
    return (
        <div className={styles.wrapper}>
            <h1>{heading}</h1>
            <div className={styles.summaryWrapper}>
                <p>{summary}</p>
            </div>
            {children}
            <div className={styles.accountActionsWrapper}>
                {accountAction}
            </div>
        </div>
    )
}