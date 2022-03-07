import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Helmet } from 'react-helmet-async';

export const Locations = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => setTimeout(() => setLoading(false), 2000))
    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Sell My House Quickly In South Central LA, Victorville, CA</title>
                    <meta name="description" content="Sell Old house for cash in Huntington Park, Barstow, CA. We buy houses and property in Riverside County, Huntington Park, Victorville, CA and South Central LA." />
                    <meta property="og:site_name" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                    <meta property="og:title" content="Sell My House Quickly In South Central LA, Victorville, CA" />
                    <meta property="og:description" content="Sell Old house for cash in Huntington Park, Barstow, CA. We buy houses and property in Riverside County, Huntington Park, Victorville, CA and South Central LA." />
                    <meta property="og:url" content="https://sellmyhousequickfast.com/locations" />
                    <meta property="og:type" content="article" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="article:publisher" content="https://sellmyhousequickfast.com/locations" />
                    <meta property="article:section" content="We buy houses, sell my house, looking for selling your house, we can buy it" />
                    <meta property="article:tag" content="We buy houses, sell my house" />
                </Helmet>
                <div className="loadingScreen">
                    <img className="loadingGif" src={require("../images/loading.gif")}/>
                </div>
            </>
        );
    } else {
        return (
            <React.Fragment>
            <Helmet>
                <title>Sell My House Quickly In South Central LA, Victorville, CA</title>
                <meta name="description" content="Sell Old house for cash in Huntington Park, Barstow, CA. We buy houses and property in Riverside County, Huntington Park, Victorville, CA and South Central LA." />
                <meta property="og:site_name" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                <meta property="og:title" content="Sell My House Quickly In South Central LA, Victorville, CA" />
                <meta property="og:description" content="Sell Old house for cash in Huntington Park, Barstow, CA. We buy houses and property in Riverside County, Huntington Park, Victorville, CA and South Central LA." />
                <meta property="og:url" content="https://sellmyhousequickfast.com/locations" />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:publisher" content="https://sellmyhousequickfast.com/locations" />
                <meta property="article:section" content="We buy houses, sell my house, looking for selling your house, we can buy it" />
                <meta property="article:tag" content="We buy houses, sell my house" />
            </Helmet>
                <section id="section-reviews">
                    <div className="ourClients">
                        <h1 className="ourClientsInner">Sell your houses for <br/><span className="span1">cheap and quickly</span></h1>
                    </div>
                    <article className="locations-container">
                   <div className="about-container-2 pd-top-20">
                    <p className="pd-bottom-10">“I want to sell my old house, but don’t know where to start.”</p>
                    <p className="pd-bottom-10">“The fees of real estate agents are so high.”</p>
                    <p className="pd-bottom-10">“And the repair and renovation is so frustrating.”</p>

                    <h4 className="pd-bottom-10">We Feel You!!</h4>
                    <p className="pd-bottom-10">Our team understands the pain of selling the house. Talking to the agents that promise BEST RESULTS, but Don't deliver. Dealing with contractors to renovate or stage the home, And waiting for the money to come, which usually happens after 2-3 years. All this is so costly and time-taking. </p>

                    <p className="pd-bottom-10">“So, can I <strong>sell my house quickly?</strong>” </p>
                    <p className="pd-bottom-10">Yes, you can!</p>

                     <p className="pd-bottom-10">We will buy your house in Los Angeles or Atlanta immediately after looking at the condition. Sell us your home in as-is condition. This means you need not fix the major (or minor issues). All this happens in less than a month. In many cases, we close a deal in 7 DAYS.</p>

                    <h4 className="pd-bottom-10">How can I sell my house for cash?</h4>
                    <p className="pd-bottom-10">Here’s how the process works:s</p>

                    <ul className="ul_listing pd-bottom-10"s>
                        <li><strong>First meeting:</strong> Provide us the basic information about your house. This you can do after talking to our buying specialist. </li>
                        <li><strong>Appointment setting:</strong> You can tell us when our qualified contractor can visit your property. After examining your house, they will share the feedback with us. </li>
                        <li><strong>Select the selling options:</strong> You get to decide the selling options that suit you. Consider us the most trusted partner. </li>
                        <li><strong>Receive your payment:</strong> After we both are on the same page, you’ll get the full payment. Plus, we will take care of the documentation.</li>
                    </ul>
                     <p className="pd-bottom-10">“But, what about the fees? I want to <strong>Sell My House for Cheap</strong>.”</p>

                    <p className="pd-bottom-10">You don’t pay any real estate commission or any other fee. Everything is transparent and documented. </p>

                    <p className="pd-bottom-10">So, what are you waiting for? </p>

                    <p className="pd-bottom-10">Connect with us today…and get the best price for your house in Barstow, Riverside County, Huntington Park, Victorville, CA and South Central, Los Angeles</p> 
                   </div>

                    <Link to={"/losangeles"} className="location">
                        <h3 className="location-name">Los Angeles, CA </h3>
                    </Link>

                    <Link to={"/atlanta"} className="location">
                        <h3 className="location-name">Atlanta, GA</h3>
                    </Link>
                    
                    </article>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}