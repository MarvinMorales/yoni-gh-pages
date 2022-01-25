import React, { useState, useEffect } from "react";
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

                        <div className="location">
                             <h3 className="location-name">Los Angeles, CA </h3>
                        </div>

                         <div className="location">
                             <h3 className="location-name">Atlanta, GA</h3>
                        </div>
                    </article>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}