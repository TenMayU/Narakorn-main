import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import Button from '@/component/button/button';
import Link from 'next/link';
function portfolio(){
  
  
    return(
        <div className={styles.container}>
        <h1 className={styles.selectTitle}>Graduate Project </h1>
        <div className={styles.items}>
            <div className={styles.content}>
              <h1 className={styles.title}>
              Warehouse Management Application For Android Smartphone
              </h1>
              <p className={styles.des}>
              Udergraduate Business Computer PROJECT with the objective a system for receiving and picking into 
             the warehouse for small shops. Develop smartphone application and website with c# language java language and sql.
              </p>
              <div className={styles.btn}>
              <Button url="https://drive.google.com/file/d/1NYWBrX5kw-n7SoPZY74BcfOpxNwl2S24/view?usp=sharing" text="Go to doc" color="#98f3ff" textcolor="black"/>
              </div> 
              <p className={styles.des2}>
               Note. This is local project not deploy and hosting on github {/* because a problem with connecting to the database */}
              </p>
           </div>
           <div className={styles.imgcontainer}>
             <Image src="/smartphone.png" fill className={styles.img}/>
           </div>
        </div>
        <div className={styles.items}>
            <div className={styles.content}>
              <h1 className={styles.title}>
              Online leave system Kalasin provincial public health office
              </h1>
              <p className={styles.des}>
              Cooperative education project. Design  and develop with fullstack bootstrap  php language and sql on the development 
             of the online leave system prototype not release version. Develop with partner student in cooperative education 
              </p>
              <div className={styles.btn}>
              <Button url="https://drive.google.com/file/d/1WwatvmL3J8lpIFWkVLgIJ3r9iuIJULe9/view?usp=sharing" text="Go to doc" color="#98f3ff" textcolor="black"/>
              </div> 
              <p className={styles.des2}>
               Note. This is local prototype project  not deploy and hosting on github {/* because source code is copyrighted of government agencies */}
               
              </p>  
           </div>
           <div className={styles.imgcontainer}>
             <Image src="/heal1.png" fill className={styles.img}/>
           </div>
        </div>

        </div>
    )
}
export default portfolio