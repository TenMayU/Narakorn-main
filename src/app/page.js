"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import home from 'public/homepageimage.png'
import Button from '@/component/button/button'
export default function Home() {
  const [test,setTest] = useState("")
  function testfun(e){
      setTest(e)
   

  }
  return (
   <div className={styles.container}>
      <div className={styles.item+" "+styles.titles}>
        <h1 className={styles.title}> 
    NarakornThitpong
    
        </h1>
        <Button url={`/portfolio`} text="Portfolio" color="#98f3ff" textcolor="black"/>
      </div>
      <div className={styles.item+" "+styles.image}>
        <div className={styles.imgcontainer}  /* onClick={()=>{testfun(1)}} */>        
        <Image src="/homepageimage.png" className={styles.img} fill alt='' priority/>
        </div>
      </div>
      {/* <div className={styles.item}>
        <div className={styles.imgcontainer+" "+styles[test == 1 ? "imgcontainerfull": ""]}  onClick={()=>{testfun(1)}}>   
        <div className={styles.imgactive}>
          <Image src="/homepageimage.png" width={300} height={500} className={styles.imgpv} alt='' />
          </div>
        <div className={styles.imgpv}>
        <Image src="/homepageimage.png" width={500} height={500} className={styles.imgfull} alt='' />
          </div>   
        </div>
        <div className={styles.imgcontainer+" "+styles[test == 2 ? "imgcontainerfull": ""]}  onClick={()=>{testfun(2)}}>   
        <div className={styles.imgactive}>
          <Image src="/homepageimage.png" width={300} height={500} className={styles.imgpv} alt='' />
          </div>
        <div className={styles.imgpv}>
        <Image src="/homepageimage.png" width={500} height={500} className={styles.imgfull} alt='' />
          </div>   
        </div>
        <div className={styles.imgcontainer+" "+styles[test == 3 ? "imgcontainerfull": ""]}  onClick={()=>{testfun(3)}}>   
        <div className={styles.imgactive}>
          <Image src="/homepageimage.png" width={300} height={500} className={styles.imgpv} alt='' />
          </div>
        <div className={styles.imgpv}>
        <Image src="/homepageimage.png" width={500} height={500} className={styles.imgfull} alt='' />
          </div>   
        </div>
        <div className={styles.imgcontainer+" "+styles[test == 4 ? "imgcontainerfull": ""]}  onClick={()=>{testfun(4)}}>   
        <div className={styles.imgactive}>
          <Image src="/homepageimage.png" width={300} height={500} className={styles.imgpv} alt='' />
          </div>
        <div className={styles.imgpv}>
        <Image src="/homepageimage.png" width={500} height={500} className={styles.imgfull} alt='' />
          </div>   
        </div>
      </div> */}
   </div>
  )
}
