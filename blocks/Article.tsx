import React from 'react'
import styles from './Article.module.css'
import Hero from '../components/Hero'
import { ReactNode } from 'react'

type ArticleProps = {
    children?: ReactNode,
    hero?: ReactNode
}
export default function Article({children, hero}: ArticleProps){
  return (
    <article className={styles.article}>
        <Hero>{hero}</Hero>
        <div>
            {children}
        </div>
    </article>
  )
}

