import { useState } from 'react'
import Logo from '../../assets/Logo/banner-min.svg'
import './header.css'
import getTimeRemaining from '../../Services/countdown'

export default function Header() {
  return (
    <header>
      <img
        id="logo"
        className="animate__animated animate__fadeInUp"
        src={Logo}
        alt="Logo do Broxada Sinistra"
        width={200}
        height={200}
      />
      <p
        id='date'
        className="animate__animated animate__fadeIn animate__delay-1s"
      >
        DIA 01/09/2023 AS 19 HORAS 
      </p>
    </header>
  )
}
