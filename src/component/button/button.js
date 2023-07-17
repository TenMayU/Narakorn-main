import Image from 'next/image'
import styles from './button.module.css'
import React from "react";
import Link from 'next/link';

export default function Button({text,url,color,textcolor}){
   const style={
      background: `${color}`,
      color: `${textcolor}`
   }
return(
   <Link href={url}>
    <button className={styles.btn} style={style}>{text}</button>
   </Link>
)
}