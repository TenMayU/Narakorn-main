"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, { useRef } from "react";

function contact(){
    /* const ref = useRef('') */
    function copy(e){
       const value = document.querySelector(`#${e}`)
        navigator.clipboard.writeText(value.value)
    }
    return(
        <div className={styles.container}>
      <div className={styles.item}>
          <div className={styles.imgcontainer}>
          <Image src="/homepageimage.png" fill className={styles.img} alt='' />
         </div>
      </div>
      <div className={styles.item}>
      <div className={styles.box}>
         <Image src='/email.png' width={100} height={100} />
        <input className={styles.input} id="email" /* ref={ref} */ value="tennarakorn19@gmail.com" disabled/>
        <button className={styles.btn} onClick={()=>{copy("email")}}>Copy</button>
        </div>   
      <div className={styles.box}>
         <Image src='/tel.png' width={100} height={100} />
         <input className={styles.input} id="tel" /* ref={ref} */ type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
         <button className={styles.btn} onClick={()=>{copy("tel")}}>Copy</button>
        </div>   
      <div className={styles.box}>
         <Image src='/github.png' width={100} height={100} />
         <input className={styles.input} id="github" /* ref={ref} */ value="tennarakorn19@gmail.com" disabled/>
         <button className={styles.btn} onClick={()=>{copy("github")}} >Copy</button>
        </div>   
      </div>
     
        </div>
    )
}
export default contact