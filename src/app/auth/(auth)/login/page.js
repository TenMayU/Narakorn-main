"use client"
import styles from './page.module.css'
import { signIn } from "next-auth/react"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
function login(){
    const session = useSession()
    const router = useRouter()
    async function handleSubmit(e){
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        signIn("credentials", {
            email,
            password,
            redirect: false
          }).then((callback=>{
            if(callback?.error){
                alert(callback.error)
            }
          }))
       
     } 

     if(session.status === "authenticated"){
        router?.push("/dashboard")
      }
    return(
        <div className={styles.container}>  
            <form onSubmit={(e)=>{handleSubmit(e)}} className={styles.form}>
            <input type="email"  className={styles.input} placeholder="email" required/>
            <input type="password" className={styles.input}  placeholder="password" required/>
            <button className={styles.btn}>Login</button>
                </form> 
           {/*      {err && "something worng"} */}

        </div>
    )
}
export default login