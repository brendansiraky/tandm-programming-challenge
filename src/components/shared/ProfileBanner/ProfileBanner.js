import styles from './ProfileBanner.module.scss'

export const ProfileBanner = ({ name }) => {
    return (
        <div className={styles.wrapper}>
            <span>Welcome {name}</span>
        </div>
    )
}