import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import Button from '@/component/button/button';
import Link from 'next/link';
function portfolio(){
    return(
        <div className={styles.container}>
         <h1 className={styles.selectTitle}>Gallery</h1>
        <div className={styles.items}>
                <Link href="/portfolio/graduate" className={styles.item}>
                <div className={styles.card}>
                    <Image src="/portbg3.png" fill className={styles.img} />
                 </div>
                   <span className={styles.title}>Graduate Project</span>
                </Link>
                <Link href="/portfolio/personal" className={styles.item}>    
                  <div className={styles.card}>
                    <Image src="/portbg1.png" fill className={styles.img} />
                 </div>
                 <span className={styles.title}>Personal Project</span>
                </Link>
           </div>
        </div>
    )
}
export default portfolio