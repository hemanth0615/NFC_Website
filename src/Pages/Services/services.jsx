import React from "react";
import { Link } from "react-router-dom";
import "../Services/services.css";
import logo from "../../Images/image 4.png";
import image1 from "../../Images/Rectangle 14.png";
import service1 from "../../Images/Rectangle 294.png";
import service2 from "../../Images/Rectangle 295.png";
import service3 from "../../Images/Rectangle 296.png";
import service4 from "../../Images/Rectangle 297.png";
import service5 from "../../Images/Rectangle 298.png";
import image2 from "../../Images/Development.png";
import bigdataimg from "../../Images/bigdata.png";
import cloudcomputingimg from "../../Images/cloudcomputing.png";
import enterprizesimg from "../../Images/enterprizes.png";
import mobiledevelopment from "../../Images/Mobile_development.png";
import npic_services from "../../Images/1 2.png";
import oracleimg from "../../Images/oracle.png";
import sapimg from "../../Images/sap.png";
import trainingimg from "../../Images/training.png";
import callimg from "../../Images/call.png";

function Services(){
    return(
        <div>
            <div class="navbar">
                <div>
                    <img className="navbar-logo" src={logo} />
                </div>
                <div className="nav-menu">
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> About Us</Link> </p>
                    <p className='nav-item'><Link to="/services" className='nav-links'> Services</Link> </p>
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> Work</Link> </p>
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> Careers</Link> </p>
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> Contact Us</Link> </p>
                </div>
            </div>
            <div className="section-1">
                <span>Our</span><span className="blue">Services</span>
                <h1>Always there for our customers</h1>
                <img src={image1} />
            </div>
            <div className="section-2">
                <div className="card1">
                    <img src={service1} />
                    <ul><b>BACKEND SERVICES</b>
                        <li>Cloud computing</li>
                        <li>Oracle application</li>
                    </ul>
                </div>
                <div className="card2">
                    <img src={service2} />
                    <ul><b>WEB & APP DEVELOPMENT</b>
                        <li>Mobile app development</li>
                        <li>Enterprizes applications using Java,.net & PHP</li>
                    </ul>
                </div>
                <div className="card3">
                    <img src={service3} />
                    <ul><b>DATA ENGINERRING</b>
                        <li>Big Data</li>
                        <li>SAP</li>
                    </ul>
                </div>
                <div className="card4">
                    <img src={service4} />
                    <ul><b>TRAINING</b>
                        <li>Placement and training</li>
                    </ul>
                </div>
                <div className="card5">
                    <img src={service5} />
                    <ul><b>COMMUNICATIONS</b>
                        <li>NFC & RFID services</li>
                    </ul>
                </div>
            </div>
            <div className="section2">
                <img src={image2} />
                <div className="section2-1">
                    <span>Loren ipsum dolor sit amet,consectetur  </span>
                </div>
            </div>
            <div className="section3">
                <div>
                    <img src={bigdataimg} />
                </div>
                <div className="bigdata">
                    <h1>1.Big Data</h1>
                    <span>Big data is a broad term for data sets so large or complex that traditional 
                    data processing applications are inadequate. Challenges include analysis, capture, 
                    data curation, search, sharing, storage, transfer, visualization, querying and 
                    information privacy. The term often refers simply to the use of predictive analytics 
                    or certain other advanced methods to extract value from data, and seldom to a particular 
                    size of data set. Accuracy in big data may lead to more confident decision making, 
                    and better decisions can result in greater operational efficiency, cost reduction and reduced risk.

                    Analysis of data sets can find new correlations to “spot business trends, prevent diseases, 
                    combat crime and so on.” Scientists, business executives, practitioners of medicine, advertising 
                    and governments alike regularly meet difficulties with large data sets in areas including Internet 
                    search, finance and business informatics. Scientists encounter limitations in e-Science work, 
                    including meteorology, genomics, connectomics, complex physics simulations, biology and environmental research.

                    Data sets are growing rapidly in part because they are increasingly gathered by cheap and numerous 
                    information-sensing mobile devices, aerial (remote sensing), software logs, cameras, microphones, 
                    radio-frequency identification (RFID) readers and wireless sensor networks. The world’s technological 
                    per-capita capacity to store information has roughly doubled every 40 months since the 1980s; as of 2012, 
                    every day 2.5 exabytes (2.5×1018) of data are created. One question for large enterprises is determining 
                    who should own big data initiatives that affect the entire organization.</span>
                </div>
                <div>
                    <img src={cloudcomputingimg} />
                </div>
                <div>
                <h1>Cloud Computing</h1>
                    <span>Cloud computing is a general term for the delivery of hosted services over the Internet. 
                    Cloud computing enables companies to consume compute resources as a utility - just like 
                    electricity - rather than having to build and maintain computing infrastructures in-house. 
                    Cloud computing promises several attractive benefits for businesses and end users. Three of 
                    the main benefits of cloud computing include: Self-service provisioning: End users can spin 
                    up computing resources for almost any type of workload on-demand. Elasticity: Companies can 
                    scale up as computing needs increase and then scale down again as demands decrease. Pay per 
                    use: Computing resources are measured at a granular level, allowing users to pay only for the 
                    resources and workloads they use. Cloud computing services can be private, public or hybrid.</span>
                </div>
                <div>
                    <img src={enterprizesimg} />
                </div>
                <div>
                    <h1>Enterprizes applications using Java,.net & PHP</h1>
                    <span>First and foremost, Java and PHP are languages while .NET is a framework. User Friendliness 
                    is generally for an application - it is called UX. Frameworks are generally rated as developer 
                    friendly and not as user friendly. So, here is my comparison between the following technology 
                    frameworks: Java + J2EE (Spring, Hibernate) - highly developer friendly. Mostly open source and 
                    easy to find a great deal of experienced developers on this technology stack. Is truly vendor 
                    independent. Scalability is very high and perfomance tuning can be very granular. PHP + 
                    (Laravel/CI/Cake PHP | WordPress/Drupal/Magento) - Mostly deployed as a LAMP Stack and thus 
                    is most cost effective. Security depends on the developer as the technology stack needs to be 
                    configured to suit your needs - yet is considered secure based on the community support. Highly 
                    scalable and performance tuning can be done up-to some extent. ASP/C# + .NET - Vendor locked to 
                    Microsoft systems only on both server as well as DB. Highly scalable. Performance tuning is 
                    miserable because most of the developers do not know the intricacies of the stack. Hence, general 
                    performance solution post DB query tuning is to scale up. Security is a double edged sword in this
                    stack. You are vendor locked with Microsoft to provide updates even when they have selectively 
                    started sharing the source code of their recent platforms. So if there is a security update from 
                    Microsoft, apply it - if not assume that your app is most secure as no one knows where to start 
                    hacking in from (Pun intended) All 3 can be used to deliver high value enterprise apps.</span>
                </div>
                <div>
                    <img src={mobiledevelopment} />
                </div>
                <div>
                    <h1>4. Mobile App Development</h1>
                    <span>Mobile application development is a term used to denote the act or process by which application 
                    software is developed for handheld devices, such as personal digital assistants, enterprise digital 
                    assistants or mobile phones. These applications can be pre-installed on phones during manufacturing 
                    platforms, or delivered as web applications using server-side or client-side processing (e.g. JavaScript) 
                    to provide an “application-like” experience within a Web browser. Application software developers 
                    also have to consider a lengthy array of screen sizes, hardware specifications and configurations 
                    because of intense competition in mobile software and changes within each of the platforms. Mobile 
                    app development has been steadily growing, both in terms of revenues and jobs created. A 2013 analyst 
                    report estimates there are 529,000 direct App Economy jobs within the EU 28 members, 60% of which 
                    are mobile app developers. As part of the development process, Mobile User Interface (UI) Design 
                    is also an essential in the creation of mobile apps. Mobile UI considers constraints & contexts, 
                    screen, input and mobility as outlines for design. The user is often the focus of interaction with 
                    their device, and the interface entails components of both hardware and software. Mobile UIs, or 
                    front-ends, rely on mobile back-ends to support access to enterprise systems. The mobile back-end 
                    facilitates data routing, security, authentication, authorization, working off-line, and service 
                    orchestration. This functionality is supported by a mix of middleware components including mobile 
                    app servers, Mobile Backend as a service (MBaaS), and SOA infrastructure.</span>
                </div>
                <div>
                    <img src={npic_services} />
                </div>
                <div>
                    <h1>5. NFIC & RFID services</h1>
                    <span>NFC (Near Field Communication) is a technology used in contactless IC cards. It allows 
                    mutual communications, authentication, payment, and various types of settings to be performed 
                    by simply hold an electronic device over the reader. This technology is based on the NFC standard 
                    of the 13.56 MHz band developed by NXP Semiconductors and Sony. FeliCa, the smart card used for 
                    payment of transportation services and as an e-money card, and MIFARE, the most commonly used chip 
                    in the world, are both compatible with the NFC standard. Not only is information read and written, 
                    but data can also be transmitted. Approved by the International Organization for Standardization 
                    (ISO), NFC is the next-generation standard of RFID technology, expected to be applied to various 
                    electronic devices in the future.</span>
                </div>
                <div>
                    <img src={oracleimg} />
                </div>
                <div>
                    <h1>6. Oracle Applications</h1>
                    <span>Oracle Applications means software that helps you runs your enterprise businesses such as
                    Accounting, Humans Resource, or Financials. But the Oracle Applications Server is the technology 
                    that, mostly installs on the server, integrates others software to work together. It can be called 
                    Middleware. Oracle’s E-Business Suite (also known as Applications/Apps or EB-Suite/EBS) consists 
                    of a collection of enterprise resource planning (ERP), customer relationship management (CRM), and 
                    supply-chain management (SCM) computer applications either developed or acquired by Oracle. Lets 
                    take an example. Suppose you are running a small grocery shop named â€œJanata Groceryâ€?, so the 
                    typical operation as a shop owner is you basically buy groceries from some big seller and stock it 
                    in your shop. Now people come to your shop for day-to-day needs and buy stuff from your shop at a 
                    slightly higher price than what you originally bought and stocked it in your shop. Ocassionally you 
                    may not be carrying items or run out of stock that people ask for so you make a note of it and 
                    promise the person to come back tomorrow and they will get their item. So far so good, now lets 
                    name some entities before we proceed and things get complicated. The big seller from whom you buy 
                    stock is called as Vendor, the people who come to your shop to buy things are known as customers, 
                    the stock in your shop is known as inventory.</span>
                </div>
                <div>
                    <img src={sapimg} />
                </div>
                <div>
                    <h1>7. SAP</h1>
                    <sapn>SAP is the best-in-class ERP system. That’s why you chose it. That’s why your organization 
                    made a significant investment of time and resources to implement it as your system of record. 
                    Despite this, many organizations look to implement solutions that use other workflow engines when 
                    they want to improve their business processes. Dolphin takes an SAP-centric approach to business 
                    process optimization. Our solutions incorporate pre-built workflows that are based on line of 
                    business (i.e., Accounts Payable, Accounts Receivable, Order Management and Human Resources) 
                    and SAP system best practices. By leveraging the power of the SAP Business Workflow engine, we 
                    can provide our customers with solutions that are fast, flexible and cost-effective.</sapn>
                </div>
                <div>
                    <img src={trainingimg} />
                </div>
                <div>
                    <h1>8. Training & Placement</h1>
                    <span>Technology has become a part of our daily life and who knows what the future will bring? 
                    One thing is for sure that it will bring plenty of job opportunities for those who are highly 
                    skilled and trained. At NFC Solutions we provide Role based training on an individual basis. We 
                    understand your need and design a program around you. We provide a Career Counseling program with 
                    individual attention which helps you decide a career in IT you can choose. NFC Solutions unique 
                    Competency Development Program provides a concrete, structured framework for systematic measurement 
                    and planning of talent development. We focus on providing world class service to organizations 
                    that remain competitive. We have been successful in providing world class service to clients. We 
                    have immense experience & expertise in the field of corporate training. We build skill and 
                    productive workforce to meet the challenges of global business competitions by corporate. We 
                    provide a comprehensive set of training solutions to achieve a sustained growth in your business. 
                    Our internationally qualified training teams can deliver the best skill set to the companies across 
                    the world.</span>
                </div>
            </div>
            <div className="section4">
                <span>Loren ipsum dolor sit amet, consectetur  </span>
                <button>Contact us</button>
                <img src={callimg} />
            </div>
            <div className="section5">
                <img src={logo} />
                <span>We specialise in providing solutions in both software and staffing that require a thorough 
                understanding of business, technology, and the balance between the two. </span>
            </div>
            <div className="footer">
                <div className="social">
                <h1>social</h1>
                    <p>LINKEDIN</p>
                    <p>FACEBOOK</p>
                    <p>INSTAGRAM</p>
                </div>
                <div className="sitemap">
                <h1>sitemap</h1>
                    <p>About us</p>
                    <p>Services</p>
                    <p>Work</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
                <div className="office">
                    <h1>office</h1>
                    <h2>US</h2>
                    <p>4320 Winfield Road
                    Suite 200, Warrenville
                    Illinois, 60555</p>
                    <h2>India</h2>
                    <p>2nd Floor MR Prime,
                    Survey No.6, BP Raju Marg,
                    (Behind Ratnadeep Super Market) White Fields, Kondapur, Hyderabad, Telangana, 500084</p>
                </div>
                <span>© Copyright nfcsolutionsusa. All Rights Reserved</span>
                <span>Terms & Conditons</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    )
}
export default Services;
