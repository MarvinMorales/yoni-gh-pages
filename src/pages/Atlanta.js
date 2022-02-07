import React from "react";
import { Footer } from "./Footer";

export const Atlanta = () => {
    return (
        <React.Fragment>
           <section id="section-reviews">
                <div className="ourClients">
                    <div className="ourClientsInner">Sell your house in <span className="span1">Atlanta, Georgia</span> 
                        </div>
                </div>
                <article className="reviews-container">
                    <div className="yoni-container"><img src={require("../images/atlanta.jpeg")}/></div>
                   <div className="about-container-2 pd-top-20">
                     <p>“I want to sell my house in Atlanta, Georgia. I can’t be actively involved in the selling process. And the agents are asking high commissions.”</p><br/>
                    <p>Does this happen to you? </p><br/>
                    <p>We will buy your house for cash. It’s the easiest way to get rid of your house that has been on the market for a long period.</p><br/>
                    <p>Here are a few questions sellers ask us. </p><br/>
                    <h4 className="pd-bottom-10">How do you help to sell my house for cash in Atlanta, Georgia? </h4>
                    <p className="pd-bottom-10">You can connect with us for houses that:</p>
                    <ul className="ul_listing pd-bottom-10">
                        <li>Require extensive repairs</li>
                        <li>Are involved with pre-foreclosure</li>
                        <li>Have bad tenants</li>
                        <li>Are inherited</li>
                        <li>Have tax liens</li>
                    </ul>
                    <p className="pd-bottom-10">Other reasons to get rid of property include divorce, probate, relocation, or other unforeseen events.</p>

                    <h4 className="pd-bottom-10">Can I sell my house fast in Roswell, Georgia? </h4>
                    <p className="pd-bottom-10">No, we don’t charge any fee or commission. You receive the full amount in cash and offer no fees. We cover all closing costs. </p>

                    <h4 className="pd-bottom-10">But my home requires a lot of repair work…</h4>
                     <p className="pd-bottom-10">You need not worry! We buy your house in as-is condition. <br/> Connect with us today to sell your home in the fastest way possible.  </p>
                   </div>
                </article>
            </section>
            <Footer/>
        </React.Fragment>
    );
}