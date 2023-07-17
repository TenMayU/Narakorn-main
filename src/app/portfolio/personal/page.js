import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import Button from '@/component/button/button';
import Link from 'next/link';
function portfolio(){
  
  
    return(
        <div className={styles.container}>
        <h1 className={styles.selectTitle}>Personal Project</h1>
        <div className={styles.items}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                Basic Portfolio Website
              </h1>
              <p className={styles.des}>
              Basic website development. Use basic stack HTML CSS JAVASCRIPT. This is my first try to create portfolio website 
              when i started learning basic web development.
              </p>
              <div className={styles.btn}>
              <Button url="" text="Go to website" color="#98f3ff" textcolor="black"/>
              <Button url="" text="Github" color="#a2dda2" textcolor="black" />
              </div>   
           </div>
           <div className={styles.imgcontainer}>
             <Image src="/portbg1.png" fill className={styles.img}/>
           </div>
        </div>

        </div>
    )
}
export default portfolio