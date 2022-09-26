import React from 'react'

import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { useRegister } from '../hooks/useRegister'
import { AuthenticationContainer } from '../components/shared/AuthenticationContainer/AuthenticationContainer'
import { AuthenticationSidebar } from '../components/shared/AuthenticationSidebar/AuthenticationSidebar'
import { FormRow } from '../components/shared/Form/FormRow/FormRow'
import { InputField } from '../components/shared/InputField/InputField'

const registerSchema = yup.object({
    full_name: yup.string().required().min(4).max(48),
    username: yup.string().required().min(2).max(28)
        .matches(/^[A-Za-z]+$/, 'Username must only contain alphabetic letters'),
    password: yup.string().required().min(6).max(28),
}).required();

export const RegisterPage = () => {
    const [handleRegisterUser, isLoading] = useRegister()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })

    function onSubmit(registerPayload) {
        handleRegisterUser(registerPayload)
    }

    return (
        <AuthenticationContainer>
            <AuthenticationSidebar
                heading="Create Account"
                summary="In order to participate in the platform, you will need an account. Please create one below."
                accountAction={<span>Already have an account? <Link to="/login">Sign In</Link></span>}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormRow>
                        <InputField
                            label="Full Name"
                            {...register("full_name")}
                            errorMessage={errors.full_name?.message}
                        />
                    </FormRow>

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