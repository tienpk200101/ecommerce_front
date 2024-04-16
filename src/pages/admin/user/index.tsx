import React from 'react';
import { WithChildren } from '../../../types/global';
import AdminLayout from '../../../layouts/admin';

type UserProps = {
    
} & WithChildren

const UserBase = ({children}: UserProps) => {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    );
};

export default UserBase;