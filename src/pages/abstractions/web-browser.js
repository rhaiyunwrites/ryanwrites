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
      The web browser is an amazing abstraction! It acts as our window to the online world allowing us to
      download entertaining content, purchase products, and video chat our friends in real time. There's 
      shockingly little work we have to do to take advantage of our web browser to gain access to all these
      services. Quickly typing amazon.com into your address bar and hitting enter is all you need to do to gain
      access to the convenient services the company offers. Not surprisingly, there is A LOT of heavy lifting getting done behind
      the scenes for us. Today, we'll attempt to make a mental model of what exactly happens when we visit a web page.
      </p>
      <h3>
      Layers of the Internet
      </h3>
      <p>
      We should first take a bird's eye view of the abstractions we'll be traversing today.
      The internet is implemented using several layers of abstractions all collaborating with each other. 
      These abstractions are numbered from 7 to 1, with 7 being the "highest" level from a programmer's perspective. It's 
      important to note that the numbering is set due to historical reasons, so layers 7 and 4 are, very confusingly, neighbors. 
      The layers are as follows:
      </p>
      <p>
      
      Application Layer (layer 7)<br />  
      Transport Layer (layer 4)<br />
      Network Layer (layer 3)<br />
      Link Layer (layer 2)<br />
      Physical Layer (layer 1)<br /><br />

      The application layer encapsulates all the protocols a desktop application uses to communicate via the network. 
      When your application layer protocol wants to send 
      information over the internet, it passes that information over to the transport layer. Traditionally, the transport 
      layer often boils down to what kind of data transfer guarantees your application wants. The two most famous protocols 
      in the network layer are UDP and TCP. While the transport layer will define certain properties about the transfer of your 
      data (for example reliability of the data reaching its destination), it doesn't define the path of routers your data will 
      take to reach its destination. That path is the responsibility of the network layer. As we travel along our path in 
      the network layer, the link/physical layers are responsible for travel between routers. For our purposes, we'll idealize the 
      link and physical layers together as one abstraction.
      </p>
      <p>
      On a technical note, as our data packet traverses down the networking layers, the data from the 
      previous layer will be wrapped by information pertaining to the current layer. Conversely, as 
      the data goes up back up towards the application layer, the wrapped information is removed 
      before being transfered. 
      </p>

      <h3>Application Layer Protocols</h3>
      <p>
      HTTP is the application layer protocol our browser will use to request a webpage from amazon.com. 
      However, in order to even make an HTTP request, our browser needs to know 
      where amazon's servers resides. In computer networking, the location of a web server is described by its 
      IP address, and the method for discovering IP addresses is another application layer protocol called DNS. 
      So, our browser will first make a DNS request to obtain amazon.com's IP address, then our browser will make an HTTP 
      GET request to Amazon's web servers.
      </p>

      <h3>
      Transport Layer Protocols
      </h3>
      <p>
      Once our application layer protocols (HTTP and DNS) have created their requests, they merely pass their 
      request to the transport layer protocol of their choice. HTTP uses TCP to transport its data, 
      while DNS uses UDP. 
      </p>
      <p>
      TCP is a connection oriented protocol. It guarantees that the information packets that travel through it are 
      guaranteed to arrive at the destination in its proper order. UDP, on the other hand, is very lightweight 
      and doesn't even guarantee that your message will arrive at the destination. 
      </p>
      <p>
      The work of our transport layer protocols is handled by the operating system. When an application sends out a packet, 
      the operating system creates a socket and binds it to a port (the application developer can choose to specify the port); it then uses the socket as a communication endpoint. When 
      sending out a message, the operating system appends all the transport layer header information needed onto your data before 
      sending it out to the network layer.
      When a packet arrives at our computer, the operating system ensures that the transport layer headers are read and 
      properly route the arriving data to the correct socket. You can think of sockets as mailboxes and ports as addresses 
      used by the operating system for our applications.
      </p>
      <h3>
      Network Layer Protocols
      </h3>
      <p>
      Once a packet is sent by the operating system to the network layer, it is now the job of the routers to pass along 
      our data to reach its destination. This is where protocols such as IPv4, IPv6, BGP, ICMP, and DHCP come in.
      </p>
      <p>
      The network layer is organized as a network of networks. Routers are grouped together to form networks known as an 
      autonomous system (AS), and protocols exist for both inter-AS communication (communication between networks) and 
      intra-AS communication (communication within routers in the same network). A couple example of intra-AS routing protocols 
      are RIP and OSPF, while an example of an inter-AS routing protocol is BGP. These protocols are used to generate IP address based forwarding tables 
      within the router. 
      </p>
      <p>
      Both IPv4 and IPv6 are protocols used for forwarding packets between individual routers in the network layer. 
      When a packet arrives at a router, the router inspects the IPv4 or IPv6 header on the packet and decide which of its neighboring 
      routers to forward the packet to. Once the receiving router is identified, the packet is sent over to the link layer. 
      </p>
      <p>
      As a side note, IPv4 and IPv6 are equipped with ways to remove unneeded stress on the network. 
      For example, the protocol sets a counter known as "time-to-live" for each packet. Every time a packet arrivces at 
      a router, the "time-to-live" counter is decremented. If the counter ever reaches 0, then the packet is discarded. This is the 
      mechanism implemented to deal with potential infinite loops in the network.
      </p>
      <p>
      IPv4 even has a mechanism to deal with data corruption. Routers will drop packets if the 
      data integrity of the packet has been compromised. This is accomplished via a one's complement checksum. IPv6 
      chose to opt out of this feature to speed up packet forwarding. It's also worth noting that the designers of 
      IPv6 made this decision considering that there are checksums within both layers 2 and 4 already.
      </p>
      <h3>
      Link/Physical Layer Protocols
      </h3>
      <p>
      Finally, we've reached the lowest level protocols for the scope of this article. Examples of these protocols are WiFi, 
      Bluetooth, and Ethernet. The only thing we'll note about the link/physical layer is that it acts as the glue that links 
      all our routers together allowing us to have what we know as the internet. 
      </p>

      <h3>
      Getting to Our Destination
      </h3>
      <p>
      After our packet travels through a number of links and routers, it will eventually reach 
      our desination's end system. In the case of a DNS request it will reach a DNS server, and in the case of HTTP it will 
      reach a web server. (I've actually thrown A LOT of details under the rug, specifically in the case of DNS. There's a whole 
      hierarchical process of ascertaining an IP address.) Once at these servers, a response will be generated catered for our 
      request. The response then sets out on a journey to go through all the layers of the internet again to arrive back to our browser!
      </p>
    </div>
  </Layout>
)

export default WebBrowserPage