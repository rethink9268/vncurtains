import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Logo from './Logo.js'
import CallMeBack from './CallMeBack.js'

export default function Navbar() {
  const [sticky, setSticky] = useState(false)
  const navRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > navRef.current.offsetHeight) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <NavContainer ref={navRef} className={sticky && 'sticky'}>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button className='nav-toggle'><FaBars /></button>
        </div>
        <ul className='nav-links'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products'>Products</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <CallMeBack />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
    width:100%;
    height: 6rem;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    background: var(--text-clr);
    align-items: center;
    justify-content: center;
    transition: ease 0.3s;
    z-index: 1000;
    &.sticky{
      height: 5rem;
      box-shadow: 0 0 10px rgba(0,0,0,0.3);
      background-color: rgba(255,255,255, 0.9);
      backdrop-filter: blur(8px);
    }
    .nav-center {
        width: 95vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
        width: 215px;
        }
    }
    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg {
        font-size: 2rem;
        }
    }
    .nav-links {
        display: none;
    }
    .cart-btn-wrapper {
        display: none;
    }
  @media (min-width: 990px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--nav-clr);
        font-size: 0.8rem;
        font-weight: 500 ;
        text-transform: uppercase;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        transition: ease 0.3s;
        &:hover {
          color: var(--primary-clr);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`