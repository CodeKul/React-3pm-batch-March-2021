import React from 'react'
import {useSelector} from "react-redux"

export default function AccountType() {
    const current = useSelector(state => state.banking.isCurrent);
    console.log(current);
    return (
        <div>
            
        </div>
    )
}
