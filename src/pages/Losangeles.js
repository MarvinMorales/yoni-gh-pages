import React from "react";
import { Footer } from "./Footer";

export const Losangeles = () => {
    return (
        <React.Fragment>
           <section id="section-reviews">
                <div className="ourClients">
                    <div className="ourClientsInner">Los Angeles,  <span className="span1">CA</span> </div>
                </div>
                <article className="reviews-container">
                    <div className="yoni-container"><img src={require("../images/Yoni.jfif")}/></div>
                   <div className="about-container-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                   </div>
                </article>
            </section>
            <Footer/>
        </React.Fragment>
    );
}