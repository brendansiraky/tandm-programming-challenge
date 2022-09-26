import styles from './Logo.module.scss'

export const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <img src={require("../../../assets/images/logo.png")} alt="logo" className={styles.logo} />
        </div>
    )
}