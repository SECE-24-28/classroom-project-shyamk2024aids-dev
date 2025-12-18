import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Navbar />
      <div style={{display:'flex'}}>
        <Sidebar />
        <main style={{padding:'20px'}}>
          <h1>Day 6 – React Component Architecture</h1>
          <p>This project demonstrates JSX, components, props, state and folder structure.</p>
        </main>
      </div>
      <Footer />
    </div>
  )
}
