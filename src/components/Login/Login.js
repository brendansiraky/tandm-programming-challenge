import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useLogin } from '../../hooks/useLogin'
import styles from './Login.module.scss'

const loginSchema = yup.object({
    username: yup.string().required().min(2).max(28),
    password: yup.string().required().min(6).max(28),
}).required();

export const Login = () => {
    const navigate = useNavigate()
    const [handleLogin, isLoading] = useLogin()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    function onSubmit(loginPayload) {
        handleLogin(loginPayload)
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username")} placeholder="username" />
                <p>{errors.username?.message}</p>

                <input {...register("password")} placeholder="password" />
                <p>{errors.password?.message}</p>

                <input type="submit" disabled={isLoading} />
            </form>
            <span>Don't have an account yet? <span onClick={() => navigate('/register')} className='link'>Register</span></span>
        </div>
    )
}