import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const Feeds = () => {
    const user=useSelector(store=>store.user.userData)
    console.log(user)
  return (
    <div>
        {user && <Card user={user.data}/>}
    </div>
  )
}

export default Feeds