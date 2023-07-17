"use client"
import { useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

function register(){
    const [errorToJSON,setErr] = useState(false)
    const router =useRouter()
 async function handleSubmit(e){
       e.preventDefault()
       const name = e.target[0].value
       const email = e.target[1].value
       const password = e.target[2].value
       console.log(name,email,password)
       try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
          res.status === 201 && router.push("/dashboard/login?success=Account has been created");
       } catch (err) {
        setErr(true)
       }
    } 

/*     const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
    
        try {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          });
          res.status === 201 && router.push("/dashboard/login?success=Account has been created");
        } catch (err) {
          setError(err);
          console.log(err);
        }
      }; 
 */
    return(
        <div className={styles.container}>
                <form className={styles.form} onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="text" placeholder="username" className={styles.input} required/>
            <input type="email" placeholder="email" className={styles.input} required/>
            <input type="password" placeholder="password" className={styles.input} required/>
            <button className={styles.btn}>Register</button>
                </form> 
           {/*      {err && "something worng"} */}
        </div>
    )
}
export default register