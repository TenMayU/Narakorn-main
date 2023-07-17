import React from "react";
import styles from './page.module.css'
export default function Layout({children}){
    return(
      <div className={styles.containermain}>
       <h1 className={styles.mainTitle}> My Work</h1>
       {children}
      </div>
    )
}