import React from "react";
import { Footer } from "./Footer";

export const Losangeles = () => {
    return (
        <React.Fragment>
           <section id="section-reviews">
                <div className="ourClients">
                    <div className="ourClientsInner">Sell your house fast in <span className="span1">Los Angeles</span> 
                        </div>
                </div>
                <article className="reviews-container">
                    <div className="yoni-container"><img src={require("../images/los-angel.jpg")}/></div>
                   <div className="about-container-2 pd-top-20">
                    <h4>Do you have these questions:</h4>
                    <p className="pd-bottom-10">How to sell my house with tenants?</p>
                    <p className="pd-bottom-10">Can I sell my inherited house fast?</p>
                     <p className="pd-bottom-10">Is there a shortcut to sell my house when moving to another state?</p>
                     <p className="pd-bottom-10">How can I sell my parents’ house?</p>

                    <h4 className="pd-bottom-10">We’re here with all the ANSWERS!</h4>
                    <p className="pd-bottom-10">Connect with us to sell your house in Los Angeles. We invest in multiple properties in Los Angeles. We do all the heavy listing and bring properties back to current standards. </p>
                    <h4 className="pd-bottom-10">Why should I sell my house to investors?</h4>
                    <p className="pd-bottom-10">You might be wondering. We will buy it for cash in the shortest time possible. You don’t have to worry about:</p>
                    <ul className="ul_listing pd-bottom-10">
                        <li>Repairs and renovation</li>
                        <li>Paying commission to the agents</li>
                        <li>Waiting indefinitely for the right seller</li>
                        <li>Listing your home online</li>
                        <li>Staging your home</li>
                    </ul>

                    <h4 className="pd-bottom-10">Can I also sell my house for millennials?</h4>
                     <p className="pd-bottom-10">Yes, we buy all types of homes – be it modern properties or the ones made decades ago.</p>

                      <h4 className="pd-bottom-10">I want to sell my house, as I am a tired landlord. Can you help?</h4>
                     <p className="pd-bottom-10">Yes, we’ll help you sell your home even if you have bad tenants. </p>

                      <h4 className="pd-bottom-10">How to get an offer for my home?</h4>
                     <p className="pd-bottom-10">Fill in the online form on the homepage and we’ll get back to you. </p>
                   </div>
                </article>
            </section>
            <Footer/>
        </React.Fragment>
    );
}