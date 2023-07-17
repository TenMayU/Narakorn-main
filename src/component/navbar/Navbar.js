"use client"

import { signOut } from "next-auth/react";
import Darkmodetoggle from "../darkmode/darkmodetoggle";
import { useSession } from 'next-auth/react';
import { useState, useContext } from "react";
import { ThemContext } from "@/context/ThemContext";
const { default: Link } = require("next/link");

export default function Navbar(){
   const {toggle,mode} = useContext(ThemContext)
   const [navtoggle,setnavtoggle] = useState('navoff')
   const navfuc =()=>{
      if(navtoggle == "navoff"){
         setnavtoggle('navon')
      }else{
         setnavtoggle('navoff')
      }
   }
   const session = useSession()
    return(
        <>
        <nav>
            <Link href="/"><h1>Narakorn</h1></Link>
            <ul className="nav-menu">
              <Darkmodetoggle/>
             <Link href="/about">
                <h4>About</h4>
             </Link>
             <Link href="/portfolio">
                <h4>Portfolio</h4>
             </Link>
             <Link href="/blog">
                <h4>Blog</h4>
             </Link>
     {/*         <a  href='https://github.com/TenMayU' >Github</a> */}
            {/*  <Link href="/dashboard">
                <h4>Dashboard</h4>
             </Link> */}
            {session.status === "authenticated" &&(
                <div onClick={signOut} className="singOut">Logout</div>
            )}         
            </ul>
            <div className={[navtoggle == "navoff"? "btnon" : "btnon btnoff"]+" "+[mode == "dark"? "btnondark" : " "]} onClick={()=>{navfuc()}}>
            {/* <div className={[navtoggle == "navoff"? "" : "btnoff"]} onClick={()=>{navfuc()}}></div> */}
               </div>     
            <ul className={`nav-menu-res`+" "+navtoggle+" "+[mode == "dark"? "darknav" : " "]}>
              <Darkmodetoggle/>
             <Link href="/about">
                <h4>About</h4>
             </Link>
             <Link href="/portfolio">
                <h4>Portfolio</h4>
             </Link>
             <Link href="/blog">
                <h4>Blog</h4>
             </Link>
            {/*  <a  href='https://github.com/TenMayU' >github.com/TenMayU</a> */}
             {/* <Link href="/dashboard">
                <h4>Dashboard</h4>
             </Link> */}
            {session.status === "authenticated" &&(
                <div onClick={signOut} className="singOut">Logout</div>
            )}   
            
            </ul>
    
        </nav>
        </>
    )
}