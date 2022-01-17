import { useState } from "react";
import styles from "../styles/Layout.module.css";
import Link from "next/link";

export default function Layout({children}){

    const [isOpen, setIsOpen] = useState(false);
    const openmenu =  ()=>setIsOpen(!isOpen);
    return <>

        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/">
                    <a className={styles.navlogo}>studywithnova</a>
                </Link>
                
            <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
                <li className={styles.navitem}>
                    <Link href="/">
                        <a className={styles.navlink}>Home</a>
                    </Link>
                    
                </li>
                <li className={styles.navitem}>
                    <Link href="/about">
                        <a className={styles.navlink}>About</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href="/contact">
                        <a className={styles.navlink}>Contact</a>
                    </Link>   
                </li>
            </ul>
            <button className={isOpen === false ? 
                styles.hamburger : styles.hamburger + ' ' + styles.active}
                onClick={openmenu}
                >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            </nav>
        </header>
         
        {children}
        {/*footer*/}
    </>
}