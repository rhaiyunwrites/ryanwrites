import React from "react"
import Layout from "../components/layout"
import Content from "../components/content.module.css"
import { Link } from "gatsby"


const AboutPage = () => (
  <Layout>
  		<h3>
  		About Me 
  		</h3>
	    <p className={Content.text}>
	      	I spent the first part of my career working at quant trading firms. 
	      	Now that my wife and I are expecting a child, I'm taking a break from work and writing code for fun.
	    </p>
  </Layout>
)

export default AboutPage
