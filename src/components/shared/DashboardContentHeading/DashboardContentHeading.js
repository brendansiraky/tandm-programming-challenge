import styles from './DashboardContentHeading.module.scss'

export const DashboardContentHeading = ({ title, action }) => {
    return (
        <div className={styles.wrapper}>
            <h2>{title}</h2>
            {action}
        </div>
    )
}