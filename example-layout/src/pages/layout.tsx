// @ts-ignore
import React from 'react'
import '../styles.css'

export function wrapPagesDeep({ element }) {
  return (
    <>
      <header>
        <a
          href="https://github.com/tujoworker/gatsby-plugin-wrap-pages"
          target="_blank"
          rel="noreferrer"
        >
          Repo
        </a>
      </header>
      <main>{element}</main>
    </>
  )
}
