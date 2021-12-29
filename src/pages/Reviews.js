import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";

export const Reviews = () => {
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
                    <article className="reviews-container">
                        <div className="review-box">
                            <div className="review-header">
                                <h3 className="review-name">Kyle, Los Angeles, CA</h3>
                                <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                            </div>
                            <div className="review-body">
                            Wow! Made buying a house such a breeze! I was new to home buying, 
                            and have heard horror stories from friends and family about terrible agents. 
                            Yoni was professional and personal! He never made me feel 
                            uncomfortable and helped me every step of the way! 
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <h3 className="review-name">Rafael, Riverside, CA</h3>
                                <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                            </div>
                            <div className="review-body">
                            Yoni and their team were extremely helpful, open, transparent, and reliable through the whole process, they really cared about us, understood our needs from the very first open house even giving us ideas on how better utilize the space.
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <h3 className="review-name">Keith, Moreno Valley</h3>
                                <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                            </div>
                            <div className="review-body">
                            Yoni is absolutely wonderful to work with. It’s like having a friend on the “inside” that is working for you. He really care about his/hers clients as well as the community and neighborhood we live in.
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <h3 className="review-name">Gabriel, Marrieta , Ga</h3>
                                <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                            </div>
                            <div className="review-body">
                            Yoni was more than helpful in finding us a buyer for our apartment he was extremely honest, upfront, and was able to find us a good way to get rid of the tenant! He was extremely communicative and easy to reach to answer any of our questions at all times. Yoni made he nightmare turn into heaven!
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <h3 className="review-name">Steve, Los Angeles, CA</h3>
                                <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                            </div>
                            <div className="review-body">
                            Yoni was very helpful for us in finding a new home and selling or distressed one in short, he was always on our side working to make our house purchase as simple and successful as possible. The best part about working with Joe was that he was always more focused on answering our questions, giving us good advice, and finding homes that met our needs than he was on closing a deal. We would recommend him to anyone.
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <h3 className="review-name">Jose, Huntington Park, CA</h3>
                                <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                            </div>
                            <div className="review-body">
                            Throughout my adult years, I have had the experience of purchasing a few different houses. As my family began to grow, I recently found the need and desire to purchase a larger home. I spoke to a variety of different realtors that showed me a variety of homes until I found Yoni Rios, When making such a large decision, I wanted to work with someone that I could trust. 
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <h3 className="review-name">John, Los Angeles, CA</h3>
                                <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                            </div>
                            <div className="review-body">
                            Yoni and his team worked with us from mid-August identifying the right buyer for our property He was always accessible and willing to make a variety of suggestions and options as we tried to. Are the right decision. We feel we have a trustworthy investor as well as a friend! Thank you Yoni!  
                            </div>
                        </div>
                    </article>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}