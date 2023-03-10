import React from "react"
import Layout from "../components/layout"
import Content from "../components/content.module.css"


const IndexPage = () => (
  <Layout>
      <p className={Content.text}>
        Hello! This website was created to list my various thoughts related to math, cs, and learning in general.
        Please feel free to use the material on this site as a resource for your studies. I hope it can help you 
        overcome some of the many struggles I faced when I first encountered these subjects.
      </p>
      <p>
      	If you find any errors, mistakes, omissions, or blatant lies anywhere on this website, please reach out 
      	and let me know! I greatly appreciate the feedback and will be sure to give you the proper credit due!
      </p>
  </Layout>
)

export default IndexPage
