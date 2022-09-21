import { useNavigate } from 'react-router-dom'

import styles from './Landing.module.scss'

export const Landing = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper}>
            <h1>Welcome to the Bike Store!</h1>
            <h4>What are you wanting to do?</h4>
            <button type="button" onClick={() => navigate('/register')}>
                Register
            </button>
            <button type="button" onClick={() => navigate('/login')}>
                Login
            </button>
        </div>
    )
}