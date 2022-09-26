import { forwardRef } from 'react'

import styles from './InputField.module.scss'

export const InputField = forwardRef((props, ref) => {
    const { errorMessage, ...rest } = props
    return (
        <>
            <label>{props.label}:</label>
            <input {...rest} ref={ref} />
            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </>
    )
})