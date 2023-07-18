"use client"
import styles from './page.module.css'
import { signIn } from "next-auth/react"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
function login(){
    const session = useSession()
    const router = useRouter()
    const [isload,setload] = useState("nonload")
    const [Errortoast,SetErrortoast] = useState("")
    async function handleSubmit(e){
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        setload("load")
        signIn("credentials", {
            email,
            password,
            redirect: false
          }).then((callback=>{
            if(callback?.error){
                SetErrortoast(callback.error)
                setload("nonload")
            }
            
          }))
       
     } 

     if(session.status === "authenticated"){
        router?.push("/dashboard")
      }
    return(

        <div className={styles.container}>  
              
            <form onSubmit={(e)=>{handleSubmit(e)}} className={styles.form+" "+styles[isload === "load" ? "load" : "nonload"]}>
            <div className={styles.inputcon}> 
            <input type="email"  className={styles.input} placeholder="email" required/>
            {Errortoast === "Error: User not found" ? <span className={styles.span}>User not found</span> : ""}
            </div>
            <div className={styles.inputcon}>     
            <input type="password" className={styles.input}  placeholder="password" required/>
            {Errortoast === "Error: Password wrong" ? <span className={styles.span}>Password wrong</span> : ""}
            </div>
            <button className={styles.btn}>Login</button>
                </form> 
           {/*      {err && "something worng"} */}

        </div>
    )
}
export default login