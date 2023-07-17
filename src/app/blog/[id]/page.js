
import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import Button from '@/component/button/button';
import { notFound } from 'next/navigation'
 async function getData(id) {
    const res = await fetch(`https://narakorn.vercel.app/api/posts/${id}`,{cache:"no-cache"})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      return notFound()
    }
   
    return res.json()
  } 

  export async function generateMetadata({ params, searchParams }, parent) {
    const data = await getData(params.id)
    return {
      title: data.title,
      description: data.desc,
    }
  }


 async function blogpost({params, searchParams}){
  const data = await getData(params.id)
  
  const date = new Date(data.createdAt)
  const thaidate = date.toLocaleDateString('th-TH',{
    year:'numeric',
    month:'long',
    day:'numeric' 
  })

    return(
        <div className={styles.container}>
              <div className={styles.head}>
                 <h1 className={styles.title}>{data.title}</h1>
                 <p className={styles.date}>โพสต์วันที่ {thaidate}</p>
                 <p className={styles.user}>ผู้เขียน {data.username}</p>
              </div>
              <div className={styles.contentcontainer}>
                   <div className={styles.mainimg}>
                     <Image src={data.img} className={styles.img} fill/>
                   </div>
                   <div className={styles.content}>
                      <p className={styles.contentparagraph}>{data.content} </p>
                   </div>
              </div> 
        </div>
    )
}
export default blogpost