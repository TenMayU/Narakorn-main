"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/component/button/button';
import useSWR, { mutate } from 'swr'

/* async function getData(){
  const res = await fetch("http://localhost:3000//api/posts",{
    cache:"no-store"
  });
  if(!res.ok){
    throw new Error("Fetch Faill")
  }

  return res.json()
} */

function Blog(){
  const fetcher = (...args) => fetch(...args).then((res)=>res.json())
  const {data, error, isLoading} = useSWR(
    `/api/posts`,
    fetcher
    )
    return(
        <div className={styles.container}>
        <h1 className={styles.selectTitle}>Blog</h1>
        {isLoading ?  "Loading..." :  
        data?.map((e)=>{
          return(
            <div className={styles.items}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                {e.title}
              </h1>
              <p className={styles.des}>
              {e.desc}
              </p>
              <div className={styles.btn}>
              <Button url={`/blog/${e._id}`} text="See More" color="#98f3ff" textcolor="black"/>
              </div>   
           </div>
           <div className={styles.imgcontainer}>
             <Image src={e.img} fill className={styles.img}/>
           </div>
         </div>
          )
        }) 
          }
   
     
 
        </div>
    )
}
export default Blog