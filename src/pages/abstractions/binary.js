import React from "react"
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"
import Content from "../../components/content.module.css"
import { Link } from "gatsby"


const BinaryPage = () => (
  <Layout>
    <div>
      <h3>
          Binary
      </h3>
      <p>
          Binary is used to represent <i>everything</i> in a computer. If that's not enough to convince you, hopefully the material below can.
      </p>
      <p>
          In case you're unfamiliar with binary, you can check <a className={Content.a} href="https://brilliant.org/wiki/binary-numbers/">here</a> for a quick introduction to what binary is.
      </p>
      <h3>
          Integer Representation
      </h3>
      <p>
          First, let's play with this <a className={Content.a} href="https://replit.com/languages/java10">java repl</a>. Define an integer and assign
          it the value  2,147,483,647. Add 1 to this integer and print out the result. The outcome is a negative number! If you're <i>still</i> not convinced
          that understanding how integers are represented is important, then 
          consider that the failure of <a className={Content.a} href="https://en.wikipedia.org/wiki/Ariane_flight_V88">this rocket launch</a> was from the same bug!
      </p> 
      <p>
          For insight into what causes the bugs above, check out <a className={Content.a} href="https://www.youtube.com/watch?v=4qH4unVtJkE&ab_channel=BenEater">this video made by Ben Eater</a>.
      </p>

      <h3> 
          Floating Point Representation
      </h3>

      <h3> 
          ASCII, Unicode, and UTF-8
      </h3>
      <p>
          It is important to realize that computers have no notion of language or characters. In order for the computer to generate
          the blog you're reading right now, there must be an encoding that the computer uses to map binary numbers to english 
          characters. <a className={Content.a} href="https://en.wikipedia.org/wiki/ASCII">ASCII</a>, <a className={Content.a} href="https://en.wikipedia.org/wiki/Unicode">unicode</a>,  and <a className={Content.a} href="https://en.wikipedia.org/wiki/UTF-8">UTF-8</a> are 
          encoding schemes to represent language. Understanding these encoding schemes can lead to deciphering the cryptic diamonds with question marks we sometimes get when opening emails, texts, or documents
          with encoding schemes our programs or protocols are not familiar with.
      </p>
      

    </div>
  </Layout>
)

export default BinaryPage