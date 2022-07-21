import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import { placeholderApi } from '../Api/placeholderApi'

export const SingleUser = () => {
    const [user, setUser] = useState({})
    const [loading, setloading] = useState(true)
    const {userId} = useParams()

    const getSingleUserData= async () => {
        try {
            setloading(true)
            const res = await placeholderApi.get(`/users/${userId}`)
            setUser(res.data)
            setloading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getSingleUserData()
    }, [])
    

  return (
    <div>
        {loading ? <div>Loading...</div> : (
            <>
                <h1>{user.name}</h1>
                <h2>{user.username}</h2>
                <h3>{user.email}</h3>
                <p>Address Details</p>
                <ul>
                    <li>{user.address.street}</li>
                    <li>{user.address.suite}</li>
                    <li>{user.address.city}</li>
                </ul>
            </>
        )}
      
    </div>
  )
}
