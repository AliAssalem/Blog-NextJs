import Image from 'next/image'
import React from 'react'
import { TiTick } from 'react-icons/ti'
import blogImg from "../../../public/blogImg.png"
import styles from "./hero.module.css"


const Hero = () => {
  return (
    <div className={styles.hero} >
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>
              Blog Platform
          </h1>
          <p className={styles.desc}>
              Welcome to our blog — your go-to space for insightful articles, practical tips, and fresh perspectives on a wide range of topics.
          </p>

        <div className={styles.services}>
        <div className={styles.serviceItem}>
            <TiTick/> Easy To Use Control Panel
        </div>
        <div className={styles.serviceItem}>
            <TiTick/> Secure Hosting
        </div>
        <div className={styles.serviceItem}>
            <TiTick/> Website Maintenance
        </div>
        </div>
        
        </div>

        <div>
          <Image src={blogImg} className="m-5" alt="Blog Image" width={500} height={300} priority={true}/>
        </div>

    </div>
  )
}

export default Hero
