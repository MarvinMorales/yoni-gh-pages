import React from "react";
import { Footer } from "./Footer";
export const Service = () => {
return (
<React.Fragment>
    <section id="blog-details">
        <div className="_banner-detail">
            <img src={require('../images/detail.jpg')} alt=""/>
            <div className="_overlay">
                <div className="content-heading">Are you thinking,<br/>How to sell my house instantly?</div>
            </div>
        </div>
        <div className="_blog-detail-mid">
            <p>We’re here to help!</p>
            <p>
                We will buy your house fast and pay you the total amount in cash. No Brokerage Fee! No Waiting! No home staging!
            </p>
            <p>It’s as simple as selling your used mobile phone</p>
            <p>We understand all the frustrations of selling a home the traditional way.</p>
            <ul className="_padding">
                <li>You fix all the issues that are turn-offs for the buyer.</li>
                <li>Connect with a real estate agent </li>
                <li>List your house on different portals</li>
                <li>Stage (decorate) your home as if it was Christmas</li>
                <li>And wait…till someone genuinely shows interest in your property</li>
            </ul>
            <p>Add to it the hassles of dealing with real estate agents, handymen, decorators, and potential buyers. And the money you have to spend. Sometimes you start to doubt your decision to sell your home. </p>
            <p>You keep on asking your agent, “Who’s going to BUY MY HOUSE FAST?” He assures you, “Soon.” In the back of your mind, this may not be true. </p>
            <p>Imagine you send a request, “I want to sell my house with tenants.” A few days later, you have a CHECK in your hands. </p>
            <div className="_service-panel">
                <div className="_box-service">
                    <div className="image-service">
                        <img src={require('../images/blog.jpg')} alt="" />
                    </div>
                    <div className="service-content">
                        <h3>This is possible (and EASY)</h3>
                        <p>Here’s we make it happen:</p>
                        <ul>
                            <li>Fill out the form on the homepage. </li>
                            <li>We will connect with you to know about your property.</li>
                            <li>You will get the best offer based on the house condition.</li>
                            <li>If you like the offer, you will get your check in a few days.</li>
                            <li>Plus, we will help you with the documentation.</li>
                        </ul>
                    </div>
                </div>
                <div className="_box-service _reverse">
                    <div className="image-service">
                        <img src={require('../images/blog.jpg')} alt="" />
                    </div>
                    <div className="service-content">
                        <h3>This is possible (and EASY)</h3>
                        <p>Here’s we make it happen:</p>
                        <ul>
                            <li>Fill out the form on the homepage. </li>
                            <li>We will connect with you to know about your property.</li>
                            <li>You will get the best offer based on the house condition.</li>
                            <li>If you like the offer, you will get your check in a few days.</li>
                            <li>Plus, we will help you with the documentation.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>You will get the TOP DOLLAR for your house. </p>
            <h3>Who chooses to sell the house for cash?</h3>
            <p>Anyone who wants to sell the house quickly in San Bernardino, Riverside, Orange, Palmdale, Moreno Valley, and Inglewood, CA, contacts us. Many homeowners have avoided foreclosures. Others facing divorce or looking to sell their ancestral property also trust us. If you’re moving or are upside down in your mortgage, we will help you out. </p>
            <p>And yeah, the answer to the question, “Can I Sell my house with tenants?” is a big YES.</p>
        </div>
    </section>
    <Footer />
</React.Fragment>
);
}