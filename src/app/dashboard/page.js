"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from "react";
import home from 'public/homepageimage.png'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR, { mutate } from 'swr'
import Link from 'next/link';
import { storage } from '@/firebase/firebaseconfig';
import { getStorage, ref, uploadBytes, uploadBytesResumable,getDownloadURL } from "firebase/storage";

export default function Dashboard() {
  const session = useSession()
  const router = useRouter()
  const [Display,setDisplay] = useState("Posts")
  const [File, setFile] = useState()
  const [Load, setLoad] = useState(false)
  const [Process,setProcess] = useState()
  if(session.status === "loading"){
    return <p>loading</p>
  }
  if(session.status === "unauthenticated"){
    return router?.push('/auth/login')
  }
  const fetcher = (...args) => fetch(...args).then((res)=>res.json())
  const {data, error, isLoading} = useSWR(
  `/api/posts?username=${session?.data?.user.name}`,
  fetcher
  )
  const tabHandle =(e)=>{
    setDisplay(e)
}

const file = async (e)=>{
  setFile("")
  setLoad(true)
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const file = e.target.files[0]
  const name = e.target.files[0].name
  const storageRef = ref(storage, `${day}${month}${year}${name}`);
  const metadata = {
    contentType: 'image/jpeg',
    name: date
  };
  const uploadTask = uploadBytesResumable(storageRef,file);
  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      setProcess(progress)
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFile(downloadURL)
        setProcess(0)
        setLoad(false)
      });
    }
  );
}

const handleSubmit = async (e)=>{
  console.log(e)
  const title = e.target[0].value
  const desc = e.target[1].value
  const img = File
  const content = e.target[3].value
  
 try  {
     await fetch("/api/posts",{
      method:"POST",
      body: JSON.stringify({
        title,desc,img,content,
        username: session.data.user.name
      }
      )
     } 
     )
  } catch (error) {
     console.log(error)
  }
}

const handleDelete = async (e)=>{
try {
  await fetch(`/api/posts/${e}`,{
    method: "DELETE",
  })
  mutate();
} catch (error) {
  console.log(error)
}
alert("Deleted")
}

   return (
      <div className={styles.container} >
        <div className={styles.select}>
          <div className={styles.menu+" "+styles[Display == "Posts" ? "menuactive":""]} onClick={()=>{tabHandle("Posts")}}>Posts</div>
          <div className={styles.menu+" "+styles[Display == "Write" ? "menuactive":""]} onClick={()=>{tabHandle("Write")}}>Write</div>
        </div>
         <div className={styles.posts+" "+styles[Display == "Posts" ? "Active":""]}>
          {data?.map((post)=>{
            return(
              <div className={styles.post} key={post._id}>
              <div className={styles.imgcontainer}>
                <Image src={post.img} fill alt={post.title}/>
              </div>
              <h2 className={styles.posttitle}>{post.title}</h2>
              <div className={styles.custom}>
                <button className={styles.btndelete} onClick={()=>{handleDelete(post._id)}}>Delete</button>
                <Link href={`/blog/${post._id}`}>
                  <button className={styles.btngo} >See More</button>
                </Link>
                
             </div>        
            </div>
            )       
          })}
         </div> 
         <form className={styles.form+" "+styles[Display == "Write" ? "Active":""]} onSubmit={handleSubmit}>
          <h1 className={styles.addnew}>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input}/>
          <input type='text' placeholder='Desc' className={styles.input}/>
          <input type='file' id="fileupload" placeholder='Image Title' className={styles.input} onChange={(e)=>{file(e)}}/>
          <label for="fileupload">
           {Load  ? "":"Choose"}
           {Process > 1 ? <h1>Uplaod{Process}</h1>:""}
           {/* {File ? "" :<p onC>X</p>} */}
            
          </label>
          <div className={styles.imgcontainerfile}>
          {File ? <Image src={File} fill/>:""}
          </div>
           <textarea 
           placeholder='content'
           className={styles.areacontent}
           cols="30"
           rows="10"
           ></textarea>
           <button className={styles.btn}>Send</button>
         </form>
      </div>
     )
    
  }
