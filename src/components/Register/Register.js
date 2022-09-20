import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import styles from './Register.module.scss'
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useRegister';

export const registerSchema = yup.object({
    username: yup.string().required().min(2).max(28),
    password: yup.string().required().min(6).max(28),
}).required();

export const Register = () => {
    const navigate = useNavigate()
    const [handleRegisterUser, isLoading] = useRegister()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })

    function onSubmit(registerPayload) {
        handleRegisterUser(registerPayload)
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
            <span>Already have an account? <span onClick={() => navigate('/login')} className='link'>Log In</span></span>
        </div>
    )
}