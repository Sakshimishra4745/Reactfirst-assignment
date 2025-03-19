import React from 'react'
import data from './Data'
import Craft from './Components/Craft'

const App = () => {
  return (
    <div className='flex justify-center items-center '>
   <Craft data={data}/>
    </div>
  )
}

export default App
