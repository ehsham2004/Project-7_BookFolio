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
      theme== 'darktheme' ? <button onClick={mode} >lighttheme</button>:<button onClick={mode} >Darktheme</button>

    }
    <div className='p-3'>
      <button className='bg-red-600 p-3 rounded-[20px]' onClick={mode}>Enable Dark Theme</button>
      <div className='items-center text-center p-11'>
      <h1>BOOKFOLIO</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div className='grid grid-cols-3 w-[80%] m-auto gap-5 mt-9 '>
        <img src="https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=" alt="" />
        <img src="https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=" alt="" />
        <img src="https://media.istockphoto.com/id/1386446426/photo/badshahi-mosque.jpg?s=612x612&w=0&k=20&c=vShhc9rb17q_5k-tx_HJnlDvlE4YjCNNlOCEWplI2_Y=" alt="" />
      </div>
      
    </div>
    </>
  )
}

export default App 