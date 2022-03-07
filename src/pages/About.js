import React from "react";
import { Footer } from "./Footer";
import { Helmet } from 'react-helmet-async';

export const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Sell House to Investor in Palmdale, Divorce Sell House in Perris, CA</title>
                <meta name="description" content="Sell house for fast and headache free in Apple Valley and Perris, CA. Get the best offer with no extra fees in Lancaster, Apple Valley, and Yucca Valley, CA." />
                <link rel="canonical" href="https://sellmyhousequickfast.com/about/"/>
                <meta property="og:site_name" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                <meta property="og:title" content="Sell House to Investor in Palmdale, Divorce Sell House in Perris, CA" />
                <meta property="og:description" content="Sell house for fast and headache free in Apple Valley and Perris, CA. Get the best offer with no extra fees in Lancaster, Apple Valley, and Yucca Valley, CA." />
                <meta property="og:url" content="https://sellmyhousequickfast.com/about/" />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:publisher" content="https://sellmyhousequickfast.com/about/" />
                <meta property="article:section" content="We buy houses, sell my house, looking for selling your house, we can buy it" />
                <meta property="article:tag" content="We buy houses, sell my house" />
            </Helmet>
            <section id="section-reviews">
                <div className="ourClients">
                    <h1 className="ourClientsInner">Who we are & <span className="span1">what</span> do we do?</h1>
                </div>
                <article className="reviews-container">
                    <div className="yoni-container"><img src={require("../images/Yoni.jfif")}/></div>
                   <div className="about-container-2">
                    We are local family owned investors who actively invest in Real Estate. <br/> <br/>
                    We have done thousands of transactions and understand the process of selling 
                    a house, which might be the hardest transaction for a family.  <br/> <br/>
                    We want to facilitate that process for you. We have bought houses traditionally, probate, divorce, inherited, extensive repairs, 
                    job relocation, tax liens, pre-foreclosure, bad tenants, and unforeseen reasons. <br/> <br/> 
                    We want to make this process as smooth as possible, working around your time frame and terms that work mutually for
                    both parties. We have extended experience in real estate and will guide you throughout the process as we do what
                    we believe is the best for you, putting your interest before ours. We look forward to talking to you 
                    and making this process a smooth one for you and your family.
                   </div>
                </article>
            </section>
            <Footer/>
        </React.Fragment>
    );
}