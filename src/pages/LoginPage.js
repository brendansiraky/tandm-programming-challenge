import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useLogin } from '../hooks/useLogin'
import { AuthenticationContainer } from '../components/shared/AuthenticationContainer/AuthenticationContainer'
import { AuthenticationSidebar } from '../components/shared/AuthenticationSidebar/AuthenticationSidebar'
import { FormRow } from '../components/shared/Form/FormRow/FormRow'
import { InputField } from '../components/shared/InputField/InputField'

const loginSchema = yup.object({
    username: yup.string().required().min(2).max(28)
        .matches(/^[A-Za-z]+$/, 'Username must only contain alphabetic letters'),
    password: yup.string().required().min(6).max(28),
}).required();

export const LoginPage = () => {
    const navigate = useNavigate()
    const [handleLogin, isLoading] = useLogin()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })

    function onSubmit(loginPayload) {
        handleLogin(loginPayload, () => navigate('/dashboard'))
    }

    return (
        <AuthenticationContainer>
            <AuthenticationSidebar
                heading="Sign In"
                summary="Please enter your details below in order to access the platform."
                accountAction={<span>Need an account? <Link to="/register">Register</Link></span>}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormRow>
                        <InputField
                            label="Username"
                            {...register("username")}
                            errorMessage={errors.username?.message}
                        />
                    </FormRow>

                    <FormRow>
                        <InputField
                            label="Password"
                            {...register("password")}
                            type="password"
                            errorMessage={errors.password?.message}
                        />
                    </FormRow>

                    <input type="submit" disabled={isLoading} />
                </form>
            </AuthenticationSidebar>
        </AuthenticationContainer>
    )
}