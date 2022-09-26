import styles from './DocumentTile.module.scss'

export const DocumentTile = ({ name, path, sharedBy, action, comment }) => {
    return (
        <>
            <li className={styles.wrapper}>
                {sharedBy && <div className={styles.topWrapper}>
                    <div className={styles.author}>{sharedBy}</div>
                </div>}
                <div className={styles.imageWrapper}>
                    <div className={styles.image} style={{ backgroundImage: `url('${process.env.REACT_APP_API_ENDPOINT}/${path}')` }} />
                </div>
                <div className={styles.bottomWrapper}>
                    <div className={styles.projectName}>{name}</div>
                    <div className={styles.manageWrapper}>
                        {action}
                    </div>
                    {comment && <p className={styles.comment}>{comment}</p>}
                </div>
            </li>
        </>
    )
}