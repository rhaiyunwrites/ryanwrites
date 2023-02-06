import React from "react"
import Layout from "../../components/layout"
import Content from "../../components/content.module.css"
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <div>
      <h3> Abstractions </h3>

      <p className={Content.text}>
          Abstractions are an extremely powerful, almost magical way of managing complexity.
          Thanks to abstractions, a beginning coder can "stand on the shoulders of giants." 
          These beginners can make a chatroom without any knowledge of how packets traverse the internet,
          or even apply machine learning models without a foundation in probability and statistics.
      </p>
      <p>
          Unfortunately abstractions aren't magic. 
          Sometimes they fail us, leading us to bugs we don't expect or understand. 
          Now, most of the time we can get past these bugs with the help of google,
          but what happens when Stack Overflow can't come to our rescue?
          The only way forward to overcome these hurdles is to dig deeper and understand what is happening underneath.
      </p>
      <p>
          It is of course impossible to dig into every abstraction you come across. 
          There just simply isn't enough time in the world. 
          Knowing which abstractions to dig into is a challenging skill to gain, especially for a beginner.
          Below are links to some articles that argue why you should dig deeper into abstractions.
      </p>
      
      <li>
        <Link to="/abstractions/compiler/" className={Content.a}>Can't the compiler do that for me?</Link>
      </li>
      <li>
        garbage collection
      </li>
      <li>
        <Link to="/abstractions/binary/" className={Content.a}>Integers, Floating Points, and Character Encodings</Link>
      </li>
      <li>
        Kernel or OS
      </li>
      <li>
        <Link to="/abstractions/memory-hierarchy/" className={Content.a}>The Memory Hierarchy</Link>
      </li>
      <li>
        <Link to="/abstractions/web-browser/" className={Content.a}>The Web Browser</Link>
      </li>

    </div>
  </Layout>
)

export default IndexPage
