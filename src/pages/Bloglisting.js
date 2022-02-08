import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Bloglisting = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => setTimeout(() => setLoading(false), 2000))
    if (loading) {
        return (
            <div className="loadingScreen">
                <img className="loadingGif" src={require("../images/loading.gif")}/>
            </div>
        );
    } else {
        return (
            <React.Fragment>
                <section id="blog-details">
                    <div className="_banner-detail">
                        <img src={require('../images/detail.jpg')} alt=""/>
                        <div className="_overlay">
                            <h1 className="content-heading">Blog detail heading</h1>
                        </div>
                    </div>
                    <div className="_blog-detail-mid">
                        <h2>Blog detail</h2>
                        <p>We are local family owned investors who actively invest in Real Estate.</p>
                        <p>
                            We have done thousands of transactions and understand the process of selling a house, which might be the hardest transaction for a family.
                        </p>
                        <h3>We want to make this</h3>
                        <p>
                            We want to facilitate that process for you. We have bought houses traditionally, probate, divorce, inherited, extensive repairs, job relocation, tax liens, pre-foreclosure, bad tenants, and unforeseen reasons.
                        </p> 
                        <h4>We want to make this</h4>
                        <p>
                        We want to make this process as smooth as possible, working around your time frame and terms that work mutually for both parties. We have extended experience in real estate and will guide you throughout the process as we do what we believe is the best for you, putting your interest before ours. We look forward to talking to you and making this process a smooth one for you and your family.
                    </p>
                    <div className="grapgic">
                        <img src={require('../images/detail.jpg')} alt=""/>
                    </div>
                    <ul>
                        <li> We have done thousands of transactions and understand the process of selling</li>
                        <li> We have done thousands of understand the process of selling</li>
                        <li> We have done thousands of transactions andselling</li>
                    </ul>
                </div>
            </section>
                <Footer/>
            </React.Fragment>
        );
    }
}