import React from "react";
import { Footer } from "./Footer";

export const About = () => {
    return (
        <React.Fragment>
            <section id="section-reviews">
                <div className="ourClients">
                    <div className="ourClientsInner">Who we are & <span className="span1">what</span> do we do?</div>
                </div>
                <article className="reviews-container">
                   <div className="about-container">
                    We are local family owned investors who actively invest in Real Estate. <br/> <br/>
                    We have done thousands of transactions and understand the process of selling 
                    a house, which might be the hardest transaction for a family.  <br/> <br/>
                    We want to facilitate that process for you. We have bought houses traditionally, probate, divorce, inherited, extensive repairs, 
                    job relocation, tax liens, pre-foreclosure, bad tenants, and unforeseen reasons. <br/> <br/> 
                    We want to make this process as smooth as possible, working around your time frame and terms that work mutually for
                    both parties. We have extended experience in real estate and will guide you throughout the process as we do what
                    we believe is the best for you, putting your interest before ours. We look forward to talking to you 
                    and making this process a smooth one for you and your family..
                   </div>
                </article>
            </section>
            <Footer/>
        </React.Fragment>
    );
}