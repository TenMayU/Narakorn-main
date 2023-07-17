"use client"
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from "react";
import Button from '@/component/button/button';

function phoneformat(value){
  if(!value) return value;
  const phonenumber = value.replace(/[^\d]/g,'');
  const phonenumberlength = phonenumber.length;
  if (phonenumberlength < 4) return phonenumber
  if(phonenumberlength < 7 ){
    return `${phonenumber.slice(0,3)}-${phonenumber.slice(3)}`
  }
  return `${phonenumber.slice(0,3)}-${phonenumber.slice(3,6,)}-${phonenumber.slice(6,10)}`;
 }

function about(){
  function copy(e){
     navigator.clipboard.writeText(e)
 }
const [test,settest] = useState('')
 const handleinput = e =>{
  const fomatted = phoneformat(e.target.value)
  settest(fomatted)
 }
/*  function getFormattedPhoneNum( input ) {
  let output = "(";
  input.replace( /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/, function( match, g1, g2, g3 )
      {
        if ( g1.length ) {
          output += g1;
          if ( g1.length == 3 ) {
              output += ")";
              if ( g2.length ) {
                  output += " " + g2; 
                  if ( g2.length == 3 ) {
                      output += " - ";
                      if ( g3.length ) {
                          output += g3;
                      }
                  }
              }
           }
        }
      }       
    );        
  return output;
 }        */

    return(
        <div className={styles.container}>

          <div className={styles.titles} >
            <div className={styles.imgcontainer}>
               <Image src='/profile1.png'  fill priority sizes='(max-width: 1200px)' className={styles.img} alt='narakorn'/>
             </div>
            <div className={styles.imgtext}> 
              <h1 className={styles.htext}>Narakorn Thitpong</h1>
             </div>
            </div>  

            <div className={styles.descripsion}>
              <div className={styles.about}>
                <h1 className={styles.abouttext}>About Me</h1>
                <p className={styles.aboutmetext}>Hi. My name is Narakorn Thitpong nickname Ten I graduated from business administration program in 
                business computer faculty of administrative science Kalasin university. I learn basic Web development in university when i was 3rd year 
                then I have studied more by self. Now i want to be Web developer i'll start from Fontend developer and  i continue to study more and more.
                </p>
              </div>
         
            </div>
            <div className={styles.descripsion}>
            <div className={styles.about}>
                <h1 className={styles.abouttext}>Career Objective</h1>
                <p className={styles.aboutmetext}>
                I determine to self improvement with web developer in the fontend position. And trying to have good cooperation and communication with the team.
                </p>
              </div>
              </div>
            <div className={styles.descripsion}>
            <div className={styles.about}>
                <h1 className={styles.abouttext}>Language</h1>
                <p className={styles.aboutmetext}>
               Thai(Native)
                </p>
                <p className={styles.aboutmetext}>
               English(Basic)
                </p>
              </div>
              </div>
              
            <div className={styles.descripsion}>
              <div className={styles.whatdo}>
                 <h1 className={styles.whatdotext}>Programing Skill</h1>
                <div className={styles.box}>
                  <div className={styles.skilliimage} >
                    <Image src='/html.png' fill priority sizes='(max-width: 1200px)' className={styles.simage} alt='html'/>
                  </div>
                  
                  <h3 className={styles.skillitem}>Html Css</h3>
                 </div>
                 <div className={styles.box}>
                 <div className={styles.skilliimage} >
                  <Image src='/javascript.png' fill priority sizes='(max-width: 1200px)' className={styles.simage} alt='js'/>
                  </div>   
                  <h3 className={styles.skillitem}>Javascript</h3>
                  </div>          
                 <div className={styles.box}>
                 <div className={styles.skilliimage} >
                  <Image src='/react.png' fill priority sizes='(max-width: 1200px)' className={styles.simage} alt='react' />
                  </div>
                  <h3 className={styles.skillitem}>NextJS framwork (ReactJS)</h3>
                  </div>
               {/*  <Button url="/portfolio" text="Portfolio"/> */}
              </div>
              <div className={styles.contact}>
              <h1 className={styles.contacttext}>Contact</h1>
                <div className={styles.whatdo}>
                      <div className={styles.boxcontact} onClick={()=>{copy("tennarakorn19@gmail.com")}}>
                       <div className={styles.skilliimage} >
                        <Image src='/email.png' className={styles.img2} fill priority sizes='(max-width: 1200px)' alt='email'/>
                        </div>
                        <input className={styles.input} id="github" /* ref={ref} */ value="tennarakorn19@gmail.com" disabled/>
                        </div>   
                      <div className={styles.boxcontact} onClick={()=>{copy("082-698-2843")}}>
                        <div className={styles.skilliimage} >
                          <Image src='/tel.png'  className={styles.img2} fill priority sizes='(max-width: 1200px)' alt='tel'/>
                         </div>   
                        <input className={styles.input} id="tel" /* ref={ref} */ type='tel' /* onChange={ e => handleinput(e)} */ disabled value="082-698-2843"/>
                        {/* <input className={styles.input} id="tel"  ref={ref} type='tel' onChange={ e => handleinput(e)} value={test}/>  */}
                        </div>   
                      <div className={styles.boxcontact} onClick={()=>{copy("tennarakorn19@gmail.com")}} >
                      <div className={styles.skilliimage} >
                        <Image src='/github.png' className={styles.img2} fill priority sizes='(max-width: 1200px)' alt='github'/>
                          </div>  
                          <a className={styles.input} href='https://github.com/TenMayU' >github.com/TenMayU</a>
                        </div>   
                </div>
              </div>
            
            </div>
         
        </div>
    )
}
export default about