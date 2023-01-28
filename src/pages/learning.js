import React from "react"
import Layout from "../components/layout"
import Content from "../components/content.module.css"
import { Link } from "gatsby"


const LearningPage = () => (
  <Layout>
    <div>
      <p>
          The links below are intended to benefit beginning coders that don't have a formal background in CS. 
          If you're starting from ground zero, it may be more beneficial to look <a className={Content.a} href="https://www.reddit.com/r/learnprogramming/comments/6fto5j/how_to_start_learning_to_code_when_you_dont_know/">here</a> instead.
      </p>

      <li>
        <Link to="/abstractions/" className={Content.a}>Digging into Computer Science Abstractions</Link>
      </li>

      <li>
        <Link to="/recreating-the-wheel/" className={Content.a}>Recreating The Wheel for Timeless Lessons</Link>
      </li>

    </div>
  </Layout>
)

export default LearningPage