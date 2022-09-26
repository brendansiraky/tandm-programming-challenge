import { useRef } from 'react'

import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter'
import styles from './Modal.module.scss'

export const Modal = ({ show, onHide, children }) => {
    const ref = useRef(null)

    useOutsideAlerter(show, ref, () => onHide())

    if (!show) return null

    return (
        <div className={styles.wrapper}>
            <div className={styles.modal} ref={ref}>
                {children}
            </div>
        </div>
    )
}