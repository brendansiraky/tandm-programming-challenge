import { useEffect } from 'react'

export function useOutsideAlerter(expanded, ref, fn) {

    function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            fn()
        }
    }

    useEffect(() => {
        if (expanded) document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        // eslint-disable-next-line
    }, [expanded])
}