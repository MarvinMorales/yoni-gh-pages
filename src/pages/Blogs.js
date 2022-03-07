import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Helmet } from 'react-helmet-async';

export const Blogs = () => {
    const [loading, setLoading ] = useState(true);
    const [data, setData ] = useState(true);
    const image_url = 'https://admin.sellmyhousequickfast.com/media/';


    const apiGet = () => {
        fetch("https://admin.sellmyhousequickfast.com/api/posts")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    }
    
    useEffect(() => setTimeout(() => setLoading(false), 2000))
    useEffect(() => {
        apiGet();
    }, []);

    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Sell My House Fast In Victorville, Claremont, Orange County, CA</title>
                    <meta name="description" content="Want to sell family house fast, we can help! We buy property in Bernardino County, San Fernando Valley, Rialto, Ontario, Bell Gardens, high desert California." />
                    <link rel="canonical" href="https://sellmyhousequickfast.com/blogs/"/>
                    <meta property="og:site_name" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                    <meta property="og:title" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                    <meta property="og:description" content="Want to sell family house fast, we can help! We buy property in Bernardino County, San Fernando Valley, Rialto, Ontario, Bell Gardens, high desert California." />
                    <meta property="og:url" content="https://sellmyhousequickfast.com/blogs/" />
                    <meta property="og:type" content="article" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="article:publisher" content="https://sellmyhousequickfast.com/blogs/" />
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
            <title>Sell My House Fast In Victorville, Claremont, Orange County, CA</title>
                <meta name="description" content="Want to sell family house fast, we can help! We buy property in Bernardino County, San Fernando Valley, Rialto, Ontario, Bell Gardens, high desert California." />
                <meta property="og:site_name" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                <meta property="og:title" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                <meta property="og:description" content="Want to sell family house fast, we can help! We buy property in Bernardino County, San Fernando Valley, Rialto, Ontario, Bell Gardens, high desert California." />
                <meta property="og:url" content="https://sellmyhousequickfast.com/blogs" />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:publisher" content="https://sellmyhousequickfast.com/blogs" />
                <meta property="article:section" content="We buy houses, sell my house, looking for selling your house, we can buy it" />
                <meta property="article:tag" content="We buy houses, sell my house" />
            </Helmet>
                <section id="section-blogs">
                    <div className="_blog-listing">
                        <h1 className="_heading">Blog Listing</h1> 
                        <p>Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p> 
                        <div className="_lising-list">

                        {data.results.map((item) => (
                            <div className="_grid">
                                 <div className="_grid-image">
                                    <Link to={item.short_url+item.id}>
                                        <img src={image_url+item.featured_image} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>{item.title.substring(0, 25)}...</h3>
                                     <p>{item.short_description.substring(0, 95)}...</p>
                                     <Link to={item.short_url+item.id} className="readmore">Read More...</Link>
                                 </div>
                            </div>
                            ))}

                        </div> 
                   </div>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}