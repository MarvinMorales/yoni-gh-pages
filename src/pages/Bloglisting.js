import React, { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { Footer } from "./Footer";
import axios from 'axios';



export const Bloglisting = (props) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({});
    const image_url = 'https://admin.sellmyhousequickfast.com/media/';
    const {slug, id} = useParams();


    useEffect(() => setTimeout(() => setLoading(false), 2000))
    useEffect(() => {
        // const slug = props.params.id;
        console.log(slug, id);
        const fetchData = async () => {
            try {
                const res = await axios.get('https://admin.sellmyhousequickfast.com/api/posts/' + id)
                setBlog(res.data);
            }
            catch (err) {

            }
        };
        fetchData();
    }, [id]);
    if (loading) {
        return (
            <div className="loadingScreen">
                <img className="loadingGif" src={require("../images/loading.gif")}/>
            </div>
        );
    } else {
        return (
            <React.Fragment>
                <section id="blog-details">
                    <div className="_banner-detail">
                        <img src={image_url+blog.featured_image} alt=""/>
                        <div className="_overlay">
                            <h1 className="content-heading">{blog.title}</h1>
                        </div>
                    </div>
                    <div class="_blog-detail-mid" dangerouslySetInnerHTML={ {__html: blog.content} } />
                   
            </section>
                <Footer/>
            </React.Fragment>
        );
    }
}