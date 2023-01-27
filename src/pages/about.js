import React from "react"
import Layout from "../components/layout"
import Content from "../components/content.module.css"
import { Link } from "gatsby"


const AboutPage = () => (
  <Layout>
      <p className={Content.text}>
      	I spent the first part of my career working at quant trading firms. 
      	Now, with a kid on the way, I'm taking a break from work and writing code for fun.
      </p>
  </Layout>
)

export default AboutPage
