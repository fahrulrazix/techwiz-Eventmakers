import React from 'react'
import AddEvent from './AddEvent'
import ListEvents from './ListEvents'

export default function Dashboard() {
  return (
    <div className='bg-black-main h-screen flex p-[5%] m-auto'>

      <div className='w-[35%]'>
        <AddEvent />
      </div>

      <div className='w-[65%]'>
        <ListEvents/>
      </div>
      
      
    </div>
  )
}
