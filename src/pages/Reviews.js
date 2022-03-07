import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import {Helmet} from "react-helmet";

export const Reviews = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => setTimeout(() => setLoading(false), 2000))
    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Sell My Grandparents House Fast in Montebello, Riverside, CA</title>
                    <meta name="description" content="Sell your house to investors in 7 days in Riverside and Palmdale, CA. Close the deal in as little as 3 -7 days. For more information contact us today." />
                    <meta property="og:site_name" content="Sell My Grandparents House Fast in Montebello, Riverside, CA" />
                    <meta property="og:title" content="Sale My Inherited Parents House With Tenants in Los Angeles, CA" />
                    <meta property="og:description" content="Sell your house to investors in 7 days in Riverside and Palmdale, CA. Close the deal in as little as 3 -7 days. For more information contact us today." />
                    <meta property="og:url" content="https://sellmyhousequickfast.com/reviews" />
                    <meta property="og:type" content="article" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="article:publisher" content="https://sellmyhousequickfast.com/reviews" />
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
                <title>Sell My Grandparents House Fast in Montebello, Riverside, CA</title>
                <meta name="description" content="Sell your house to investors in 7 days in Riverside and Palmdale, CA. Close the deal in as little as 3 -7 days. For more information contact us today." />
                <meta property="og:site_name" content="Sell My Grandparents House Fast in Montebello, Riverside, CA" />
                <meta property="og:title" content="Sale My Inherited Parents House With Tenants in Los Angeles, CA" />
                <meta property="og:description" content="Sell your house to investors in 7 days in Riverside and Palmdale, CA. Close the deal in as little as 3 -7 days. For more information contact us today." />
                <meta property="og:url" content="https://sellmyhousequickfast.com/reviews" />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:publisher" content="https://sellmyhousequickfast.com/reviews" />
                <meta property="article:section" content="We buy houses, sell my house, looking for selling your house, we can buy it" />
                <meta property="article:tag" content="We buy houses, sell my house" />
            </Helmet>
                <section id="section-reviews">
                    <div className="ourClients">
                        <div className="ourClientsInner">What our <span className="span1">clients</span> say about us</div>
                    </div>
                    <article className="reviews-container">
                        <div className="review-box">
                            <div className="review-header">
                                <div>
                                    <h3 className="review-name">Kyle C.</h3>
                                    <h4 className="city">Los Angeles, CA</h4>
                                    <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                                </div>
                                <div className="imagesHome"><img alt="Kyle C." className="h-images" src={require("../images/home1.jpg")}/></div>
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
                                <div>
                                    <h3 className="review-name">Jonathan M.</h3>
                                    <h4 className="city">Riverside, CA</h4>
                                    <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                                </div>
                                <div className="imagesHome"><img alt="Jonathan M." className="h-images" src={require("../images/home2.jpg")}/></div>
                            </div>
                            <div className="review-body">
                            Yoni and their team were extremely helpful, open, transparent, and reliable through the whole process, they really cared about us, understood our needs from the very first open house even giving us ideas on how better utilize the space.
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <div>
                                    <h3 className="review-name">Keith B.</h3>
                                    <h4 className="city">Moreno Valley, CA</h4>
                                    <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                                </div>
                                <div className="imagesHome"><img alt="Keith B." className="h-images" src={require("../images/home3.jpg")}/></div>
                            </div>
                            <div className="review-body">
                            Yoni is absolutely wonderful to work with. It’s like having a friend on the “inside” that is working for you. He really care about his/hers clients as well as the community and neighborhood we live in.
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <div>
                                    <h3 className="review-name">Gabriel N.</h3>
                                    <h4 className="city">Marrieta, GA</h4>
                                    <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                                </div>
                                <div className="imagesHome"><img alt="Gabriel N." className="h-images" src={require("../images/home4.jpg")}/></div>
                            </div>
                            <div className="review-body">
                            Yoni was more than helpful in finding us a buyer for our apartment he was extremely honest, upfront, and was able to find us a good way to get rid of the tenant! He was extremely communicative and easy to reach to answer any of our questions at all times. Yoni made he nightmare turn into heaven!
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <div>
                                    <h3 className="review-name">Steve C.</h3>
                                    <h4 className="city">Los Angeles, CA</h4>
                                    <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                                </div>
                                <div className="imagesHome"><img alt="Steve C." className="h-images" src={require("../images/home5.jpg")}/></div>
                            </div>
                            <div className="review-body">
                            Yoni was very helpful for us in finding a new home and selling or distressed one in short, he was always on our side working to make our house purchase as simple and successful as possible. The best part about working with Joe was that he was always more focused on answering our questions, giving us good advice, and finding homes that met our needs than he was on closing a deal. We would recommend him to anyone.
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <div>
                                    <h3 className="review-name">Jose A.</h3>
                                    <h4 className="city">Huntington Park, CA</h4>
                                    <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                                </div>
                                <div className="imagesHome"><img alt="Jose A." className="h-images" src={require("../images/home6.jpeg")}/></div>
                            </div>
                            <div className="review-body">
                            Throughout my adult years, I have had the experience of purchasing a few different houses. As my family began to grow, I recently found the need and desire to purchase a larger home. I spoke to a variety of different realtors that showed me a variety of homes until I found Yoni Rios, When making such a large decision, I wanted to work with someone that I could trust. 
                            </div>
                        </div>

                        <div className="review-box">
                            <div className="review-header">
                                <div>
                                    <h3 className="review-name">John B.</h3>
                                    <h4 className="city">Los Angeles, CA</h4>
                                    <div className="review-stars">{ Array(5).fill(<i className="fas fa-star"></i>) }</div>
                                </div>
                                <div className="imagesHome"><img alt="John B." className="h-images" src={require("../images/home7.jpg")}/></div>
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