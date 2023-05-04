import styles from './Hero.module.css'
import React, { ReactNode } from 'react'

type HeroProps = {
    children?: ReactNode
}

export default function Hero({children}: HeroProps){
  return (
    <div className={styles.hero}>
        {children}
    </div>
  )
}
