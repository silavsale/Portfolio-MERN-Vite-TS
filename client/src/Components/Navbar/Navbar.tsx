import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import '../../App.css'
import ThemeButton from '../Buttons/ThemeButton'

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)

  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-600 dark:bg-gray-800 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:justify-start '>
            <ThemeButton />
            <Link
              to='/'
              className='text-sm font-bold leading-relaxed inline-block md:mx-6 py-2 whitespace-nowrap uppercase text-white '
            >
              Sergiy Rudenko
            </Link>

            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className={'lg:flex flex-grow items-center' + (navbarOpen ? ' flex' : ' hidden')}
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                >
                  {' '}
                  <span className='ml-2'>Projects</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/portfolio'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                >
                  {' '}
                  <span className='ml-2'>Portfolio</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
                >
                  {' '}
                  <span className='ml-2'>About</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
