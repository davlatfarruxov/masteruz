import Link from 'next/link'
import { useState } from "react";
import styles from "../styles/Layout.module.css";
import styles2 from '../styles/Home.module.css'
export default function Layout({children}){

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return <> 
            <header className={styles2.header}>
                <nav className={styles.navbar}>
                    <Link href='/'>
                     <a className={styles.navlogo}>Firdavs Faxriddinov</a>
                    </Link>
                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                       <Link href='/'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Bosh Sahifa</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/xizmatlar'>
                          <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Xizmatlar</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/portfolio'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Portfolio</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href="/ma'lumot">
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Ma'lumot</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/aloqa'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Aloqa</a>
                        </Link>
                    </li>
                </ul>
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
            </header>
        {children}
        {/* {footer} */}
     
         
               <footer id={styles.footer}>
                  <div className="container">
                    <h4 className={styles.footertext}>Copyright ©2021 All rights reserved | made by Davlat Farruxov</h4>
                  </div>
                </footer>
           
     
     </>
}