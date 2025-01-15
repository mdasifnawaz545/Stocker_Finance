import React from 'react'
import { useSelector } from 'react-redux'

const Signup = () => {

    const user = useSelector((state) => state.user)

    return (
        <div>Signup : {`${user.name}`}</div>
    )
}

export default Signup