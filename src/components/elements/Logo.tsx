"use client"
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import React from 'react'

const Logo = () => {
  const { isDarkMode } = useTheme();

  return (
    <Link
      className="wow animate__animated animate__fadeInUp"
      href="/">
      <img
        src={`${!isDarkMode
          ? '/assets/imgs/template/logo.svg'
          : '/assets/imgs/template/logo-day.svg'
          } `}
        alt="Phineas"
      />
    </Link>
  )
}

export default Logo