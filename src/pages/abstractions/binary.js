import React from "react"
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"
import Content from "../../components/content.module.css"
import { Link } from "gatsby"


const BinaryPage = () => (
  <Layout>
    <div>
      <h3>
          Integers, Floating Points, and Character Encodings 
      </h3>
      <p>
          Since most people find these topics pretty dry, I often find that the hardest part about digging into them is convincing people it's worth the effort;
          so, for this particular article I'll mainly bring up examples that can hopefully motivate your exploration, followed with a resource to dig deeper in yourself.
      </p>

      <h3>
          Binary
      </h3>
      <p>
          However, before we can dig into integers, floating points, and character encodings to see how they "break," 
          we'll first need to have an understanding of how the binary number system works. 
          In case you're unfamiliar with binary, please familiarize yourself <a className={Content.a} href="https://brilliant.org/wiki/binary-numbers/">here</a> for a quick introduction.
      </p>

      <h3>
          Integer Representation
      </h3>
      <p>
          Diving right in, let's consider what happens when we increment the integer 2,147,483,647 by 1.
          When I first came across this, I was shocked! Not only is the output not 2,147,483,648, it was negative!
          Take a look at <a className={Content.a} href="https://replit.com/@ryanwrites/Integer-Overflow#Main.java">this java repl</a> if 
          you want to witness it with your own eyes. 
      </p>

      <p>
          At this point you might be thinking, "Alright, I'll have an arithmetic error or two. What's the big deal?"
          Well, it turns out these bugs can lead to pretty much anything. For instance, <a className={Content.a} href="https://en.wikipedia.org/wiki/Ariane_flight_V88">this rocket launch failing</a> was 
          due to the exact same bug!
      </p> 
      <p>
          For insight into what causes the bugs above, check out <a className={Content.a} href="https://www.youtube.com/watch?v=4qH4unVtJkE&ab_channel=BenEater">this video made by Ben Eater</a>.
      </p>

      <h3> 
          Floating Point Representation
      </h3>
      <p>
          We've already seen how a lack of understanding of integer representation can lead to a large amount of confusion and floating points are no exception!
          Check <a className={Content.a} href="https://replit.com/@ryanwrites/Floating-Point-Imprecision#index.js">this javascript repl</a> to see what happens if you sum .1 and .2 together. 
          As we can see, the output isn't .3; the laws of integer arithmetic don't apply to floating points! Can you imagine what would happen if a bank represented your funds with floating points?
      </p>
      <p>
          Our example of summing .1 with .2 is just one example of several wonky things that could happen when using floating points.
          For those interested in digging deeper into floating points, there's a fantastic paper titled <a className={Content.a} href="https://www.itu.dk/~sestoft/bachelor/IEEE754_article.pdf">What Every Computer Scientist Should Know About Floating-Point Arithmetic</a>.
      </p>

      <h3> 
          ASCII, Unicode, and UTF-8
      </h3>
      <p>
          Now we'll leave the realm of numbers and start considering characters! So, note that in order for the computer to generate
          the blog you're reading right now, there must be an encoding that the computer uses to map binary numbers to english 
          characters. <a className={Content.a} href="https://en.wikipedia.org/wiki/ASCII">ASCII</a>, <a className={Content.a} href="https://en.wikipedia.org/wiki/Unicode">unicode</a>,  and <a className={Content.a} href="https://en.wikipedia.org/wiki/UTF-8">UTF-8</a> are 
          encoding schemes to represent language. Understanding these encoding schemes can help us deal with the cryptic diamonds with question marks (�) we sometimes get when opening emails, texts, or documents
          with encoding schemes our programs or protocols are not familiar with.
      </p>
      <p>
          If you don't want to introduce yourself to these encodings by sifting through wikipedia pages, 
          Joel Spolsky has a <a className={Content.a} href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/">great introduction</a> that 
          is more than up to the task.
      </p>
    </div>
  </Layout>
)

export default BinaryPage