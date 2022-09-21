import styles from './Table.module.scss'

export const Table = ({ thead, tbody }) => {
    return (
        <table className={styles.table}>
            {thead}
            {tbody}
        </table>
    )
}