import React from "react"
import Header from "../components/Header"
import Navbar from "../components/navbar"
import Content from "../components/content.module.css"
import layoutStyles from "../components/layout.module.css"


export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Header></Header>
      <div className={[Content.content, layoutStyles.body].join(" ")} >
        <span className={layoutStyles.navbar}> <Navbar></Navbar> </span>
        <span className={layoutStyles.text}> {children} </span>
      </div>
    </div>
  )
}