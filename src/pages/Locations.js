import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Locations = () => {
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
                <section id="section-reviews">
                    <div className="ourClients">
                        <div className="ourClientsInner">Our <br/><span className="span1">Locations</span></div>
                    </div>
                    <article className="locations-container">

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