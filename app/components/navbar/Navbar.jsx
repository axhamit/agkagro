
'use client'

import React, { useEffect, useState } from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Modal from '../modal/Modal';
import agk_logo from '../../public/assets/agk-logo.png'
import Image from 'next/image';



const data = [
    { id:1, link:'/', caption:'Home'},
    { id:2, link:'/service', caption:'Products'},
    { id:3, link:'/about', caption:'About'},
    { id:4, link:'/contact', caption:'Contact'},
]

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const closeNavHandler = () =>{
      if (window.innerWidth <= 600){
        setNavOpen(false);
      }
    }
    useEffect(()=>{
      if(window.innerWidth > 600){
        setNavOpen(true);
      }
    }, [navOpen])
  return (
    <div>
      <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href='/' className={styles.navLogo} onClick={closeNavHandler}>
        <Image src={agk_logo} alt='logo' className={styles.agkLogo}/>
        AGK AGRO
        </Link>
        { navOpen && <ul className={styles.navItems}>
            {
                data.map(({id,link,caption})=> <li key={id}>
                  <Link href={link} onClick={closeNavHandler} >{caption}</Link>
                </li>

                )
            }
        </ul>}
        <div className={styles.navBtns}>
        <button className={styles.applyBtn} onClick={() => setOpenModal(true)} openModal={openModal}>Enquire Now</button>
        <button className={styles.navBtn} onClick={()=> setNavOpen(!navOpen)}>{navOpen? <AiOutlineClose/>: <FaBars />}</button>
        </div>
        
      </div>
    </nav>
    {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
       
    
    
  )
}

export default Navbar
