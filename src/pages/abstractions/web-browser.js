import React from "react"
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"
import Content from "../../components/content.module.css"
import { Link } from "gatsby"


const WebBrowserPage = () => (
  <Layout>
    <p>
      February 6, 2023
    </p>
    <div>
      <h3>
      The Web Browser
      </h3>
      <p>
      The web browser is an amazing abstraction; it acts as our window to the online world allowing us to
      download entertaining content, purchase products, and video chat our friends in real time. There's 
      shockingly little work we have to do to take advantage of our web browser to gain access to all these
      services. Quickly typing amazon.com into your address bar and hitting enter is all you need to do to gain
      access to the conveniennt services the company offers. Not surprisingly, there is A LOT of heavy lifting gettingn done behind
      the scenes for us. Today, we'll take a brief tour of what occurs (most) of the steps along the way.
      </p>
      <h3>
      Layers of the Internet
      </h3>
      <p>
      Before we start our tour, we should first take a bird's eye view of the area we'll be traversing today.
      The internet is implemented with several layers of abstractions all collaborating with each other. 
      These abstractions are numbered from 7 to 1, with 7 being the highest layer. It's 
      important to note that the numbering is set due to historical reasons, so layers 7 and 4 are, very confusingly, neighbors. 
      </p>
      <p>
      The layers are as follows: 
      <br>
      <br>
      Application Layer (layer 7) <br>
      Transport Layer (layer 4) <br>
      Network Layer (layer 3) <br>
      Link Layer (layer 2) <br>
      Physical Layer (layer 1) <br>
      <br>
      For our purposes, we'll couple the link and physical layers together.
      </p>

      <h3>
      DNS
      </h3>
      <p>
      </p>
      <h3>

      </h3>
      <p>
      </p>
    </div>
  </Layout>
)

export default WebBrowserPage