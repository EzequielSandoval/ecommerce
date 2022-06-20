import React from 'react'
import { ItemAdminList } from './ItemAdminList'
import { AdminSidebar } from './AdminSidebar'


export const Admin = () => {
    return (
        <div>
            <div className='adminContainer'>
                <AdminSidebar />
                <div className='m-auto'>
                    <ItemAdminList />
                </div>
            </div>
        </div >
    )
}
