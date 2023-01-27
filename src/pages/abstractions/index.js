import React from "react"
import Layout from "../../components/layout"
import Content from "../../components/content.module.css"
import { Link } from "gatsby"


const IndexPage = () => (
  <Layout>
    <div>
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
          The only way forward to overcome these hurdles is to dig deeper and understand what is happening under the hood.
      </p>
      <p>
          Of course, it's impossible to dig into every abstraction you come across, 
          there just simply isn't enough time in the world. 
          Knowing which abstractions to dig into is a challenging skill to gain, especially for a beginner.
          Below are links to some arguments and resources for studying abstractions that I personally find helpful having a deeper understanding of.
      </p>

      <li>
      <Link to="/abstractions/binary/" className={Content.a}>Binary</Link>
      </li>

    </div>
  </Layout>
)

export default IndexPage
