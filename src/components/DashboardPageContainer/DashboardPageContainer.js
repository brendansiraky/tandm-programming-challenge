import { useState, useEffect } from 'react'
import { useGetProfile } from '../../hooks/useGetProfile'
import { getFirstName } from '../../utility/getFirstName'
import { MyDocuments } from '../MyDocuments/MyDocuments'
import { MySharedDocuments } from '../MySharedDocuments/MySharedDocuments'

import { ManagementSidebar } from '../shared/ManagementSidebar/ManagementSidebar'
import { ProfileBanner } from '../shared/ProfileBanner/ProfileBanner'
import styles from './DashboardPageContainer.module.scss'

const DEFAULT_FILTER_SELECTED = 'mine'

export const DashboardPageContainer = () => {
    const [filterSelected, setFilterSelected] = useState(DEFAULT_FILTER_SELECTED)
    const [
        handleGetProfile,
        profile,
        isLoading
    ] = useGetProfile()

    useEffect(() => {
        handleGetProfile()
    }, [])

    return (
        <div className={styles.wrapper}>
            <ManagementSidebar
                filterSelected={filterSelected}
                onSelect={setFilterSelected}
            />
            <div className={styles.contentWrapper}>
                {profile && <ProfileBanner 
                    name={getFirstName(profile.full_name)}
                />}
                
                {filterSelected === 'mine'
                    ? <MyDocuments />
                    : <MySharedDocuments />}

            </div>
        </div>
    )
}