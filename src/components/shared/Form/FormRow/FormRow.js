import styles from './FormRow.module.scss'

export const FormRow = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}