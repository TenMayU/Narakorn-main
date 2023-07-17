"use client"
import React, { useContext, useState } from "react";
import styles from './darkmode.module.css'
import { ThemContext } from "@/context/ThemContext";
export default function Darkmodetoggle(){
  const {toggle,mode} = useContext(ThemContext)
    return(
        <div className={styles.container+" "+styles[mode]}  onClick={toggle} >
          <div id={styles.dark} className={styles.icon+" "+styles[mode === "light"? " ": "activeicon"]}>Dark</div>
          <div id={styles.light} className={styles.icon+" "+styles[mode === "light"? " ": "aactiveicon"]}>Light</div>
          <div className={styles.ball+" "+styles[mode === "light"? " ": "active"]}/>
        </div>
    )
}