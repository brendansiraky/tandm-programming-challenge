import { useNavigate } from 'react-router-dom'

import styles from './ManagementSidebar.module.scss'

export const ManagementSidebar = ({ filterSelected, onSelect }) => {
    const navigate = useNavigate()

    function handleLogout() {
        localStorage.clear()
        navigate('/login')
    }

    const getActiveStyle = (filter) => filter === filterSelected ? styles.active : undefined

    return (
        <div className={styles.wrapper}>
            <div className={styles.managementActionsWrapper}>
                <div onClick={() => onSelect('mine')} className={`${styles.managementAction} ${getActiveStyle('mine')}`}>My Documents</div>
                <div onClick={() => onSelect('shared')}className={`${styles.managementAction} ${getActiveStyle('shared')}`}>My Shared Documents</div>
            </div>

            <div className={styles.logoutWrapper}>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}