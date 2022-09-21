import { useNavigate, useLocation } from 'react-router-dom'

import styles from './Navigation.module.scss'

export const Navigation = () => {
    const navigate = useNavigate()
    const location = useLocation()

    function renderNav() {
        const { pathname } = location
        if (pathname.includes('manage') || pathname.includes('view')) {
            return [
                { label: 'Manage Documents', action: () => handleNavigate('manage'), name: 'manage' },
                { label: 'View Documents', action: () => handleNavigate('view'), name: 'view' },
                { label: 'Logout', action: () => handleLogout() },
            ]
        }
        return [
            { label: 'Login', action: () => handleNavigate('login'), name: 'login' },
            { label: 'Register', action: () => handleNavigate('register'), name: 'register' },
        ]
    }

    function handleNavigate(path) {
        navigate(path)
    }

    function handleLogout() {
        localStorage.clear()
        navigate('/')
    }

    return (
        <nav className={styles.wrapper}>
            <ul>
                {renderNav().map(item => (
                    <li key={item.label} className={`link ${location.pathname.includes(item.name) ? 'active' : ''}`} onClick={item.action}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </nav>
    )
}