import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Header } from "./Header";
import { Form } from "./Form";
import { Footer } from "./Footer";
import {Helmet} from "react-helmet";

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Sell My House Fast In Victorville, Claremont, Orange County, CA</title>
                <meta name="description" content="Want to sell family house fast, we can help! We buy property in Bernardino County, San Fernando Valley, Rialto, Ontario, Bell Gardens, high desert California." />
            </Helmet>
            
            <section className='slider' style={{height: window.screen.width < 600 ? window.screen.width/1.2777 : "100%"}}>
            <AutoplaySlider
                fillParent={window.screen.width < 600 ? false : true}
                bullets={false}
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={2000}
            >
                <div className='full-data-container'>
                    <div className='text-info'>
                    <h1>Step 1</h1>
                    <div className='line'></div>
                    <p>Talk to a buying specialist, give us a little information on the property and time frame. </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h1>Step 2</h1>
                    <div className='line'></div>
                    <p>Set an appointment so our qualified contractor can give us feedback.  </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h1>Step 3</h1>
                    <div className='line'></div>
                    <p>You choose the selling options that works best for you.  We will work as a team.  </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h1>Step 4</h1>
                    <div className='line'></div>
                    <p>We close transaction at a local reputable title company. </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h1>Step 5</h1>
                    <div className='line'></div>
                    <p>Get paid. </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>
            </AutoplaySlider>
            </section>

            <footer className='footer1'>
                <div className='footer-left'>
                <section className='section1'>
                <h2>Why sell to us?</h2>
                <div className='row'><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>We are seasoned buyers who have handled thousands of transactions. </div>
                <div className='row'><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>We understand selling your house fast is critical and we want to facilitate that.  </div>
                <div className='row'><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Once we agree on a time frame we work with that time frame.   </div>
                <div className='row'><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Our offers are cash and you will not pay any fees.    </div>
                <div className='row'><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>We only work with credited attorneys , title and escrow officers so you're in great hands.  </div>
                <div className='row'><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>We have hundreds of licensed contractors so once we see your house we understand the process to renovated this property. </div>
                <div className='row'><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>We have purchased every type of real estate, single family home, Multi family, apartments buildings, grocery stores and even Laundromats. We are the most qualified buyers in the area.</div>
                </section>
                </div>
                <div className='footer-rigth'>
                <Form/>
            </div>
            </footer>
            <Footer/>
        </React.Fragment>
    );
}