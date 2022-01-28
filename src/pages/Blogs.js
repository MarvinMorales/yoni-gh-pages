import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export const Blogs = () => {
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
                <section id="section-blogs">
                    <div className="_blog-listing">
                        <div className="_heading">Blog Listing</div> 
                        <p>Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p> 
                        <div className="_lising-list">

                            <div className="_grid">
                                 <div className="_grid-image">
                                    <Link to={"/bloglisting"}>
                                        <img src={require('../images/blog.jpg')} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>Buying, and have heard horror</h3>
                                     <p>Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p>
                                     <Link to={"/bloglisting"} className="readmore">Read More...</Link>
                                 </div>
                            </div>

                            <div className="_grid">
                                 <div className="_grid-image">
                                    <Link to={"/bloglisting"}>
                                        <img src={require('../images/blog.jpg')} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>Buying, and have heard horror</h3>
                                     <p>Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p>
                                     <Link to={"/bloglisting"} className="readmore">Read More...</Link>
                                 </div>
                            </div>
                            
                            <div className="_grid">
                                 <div className="_grid-image">
                                     <Link to={"/bloglisting"}>
                                        <img src={require('../images/blog.jpg')} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>Buying, and have heard horror</h3>
                                     <p>Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p>
                                     <Link to={"/bloglisting"} className="readmore">Read More...</Link>
                                 </div>
                            </div>
                         
                            <div className="_grid">
                                 <div className="_grid-image">
                                    <Link to={"/bloglisting"}>
                                        <img src={require('../images/blog.jpg')} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>Buying, and have heard horror</h3>
                                     <p>Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p>
                                     <Link to={"/bloglisting"} className="readmore">Read More...</Link>
                                 </div>
                            </div>
                           
                            <div className="_grid">
                                 <div className="_grid-image">
                                     <Link to={"/bloglisting"}>
                                        <img src={require('../images/blog.jpg')} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>Buying, and have heard horror</h3>
                                     <p>Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p>
                                     <Link to={"/bloglisting"} className="readmore">Read More...</Link>
                                 </div>
                            </div>
                            
                            <div className="_grid">
                                 <div className="_grid-image">
                                     <Link to={"/bloglisting"}>
                                        <img src={require('../images/blog.jpg')} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>Buying, and have heard horror</h3>
                                     <p>Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p>
                                     <Link to={"/bloglisting"} className="readmore">Read More...</Link>
                                 </div>
                            </div>
                            
                            <div className="_grid">
                                 <div className="_grid-image">
                                    <Link to={"/bloglisting"}>
                                        <img src={require('../images/blog.jpg')} alt=""/>
                                    </Link>
                                 </div>
                                 <div className="description">
                                     <h3>Buying, and have heard horror</h3>
                                     <p>Yoni was professional and personal! He never made me feel uncomfortable and helped me every step of the way!</p>
                                     <Link to={"/bloglisting"} className="readmore">Read More...</Link>
                                 </div>
                            </div>

                        </div> 
                   </div>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}