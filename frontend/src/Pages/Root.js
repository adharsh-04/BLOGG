import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Root() {
  return (
    <div>
        <div >
<Header/>
        </div>
        <div style={{minHeight:"77vh"}}>
        <Outlet/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Root