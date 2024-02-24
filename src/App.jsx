import React, { useEffect, useState } from 'react'

const App = () => {

const [theme,setTheme]=useState('');
const mode= () => {
  theme=="darktheme"? setTheme('lighttheme'):setTheme('darktheme');
}

useEffect(()=>{
  document.body.className=theme
},[theme])
  return (
    <>
    {
      theme== 'darktheme' ? <button className='bg-red-600 p-3 rounded-[20px] mt-6 ml-5 ' onClick={mode} >Lighttheme</button>:<button className='bg-red-600 p-3 rounded-[20px] mt-6 ml-5 text-white' onClick={mode} >Darktheme</button>

    }
    <div className='p-3'>
      {/* <button className='bg-red-600 p-3 rounded-[20px]' onClick={mode}>Enable Dark Theme</button> */}
      <div className='items-center text-center p-11'>
      <h1 className='text-3xl'>BOOKFOLIO</h1>
      <p className='mt-9'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div className='grid grid-cols-3 w-[80%] m-auto gap-5 mt-9 '>
        <img src="https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=" alt="" />
        <img src="https://images.hdqwalls.com/download/mountains-covered-snow-4k-gc-3840x2400.jpg" alt="" />
        <img src="https://images.hdqwalls.com/download/little-cute-girl-with-book-ab-3840x2400.jpg" alt="" />
      </div>
      
    </div>
    </>
  )
}

export default App 