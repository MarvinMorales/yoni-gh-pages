import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Header } from "./Header";
import { Form } from "./Form";
import { Footer } from "./Footer";
import { Helmet } from 'react-helmet-async';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Sell My House Fast In Victorville, Claremont, Orange County, CA</title>
                <meta name="description" content="Want to sell family house fast, we can help! We buy property in Bernardino County, San Fernando Valley, Rialto, Ontario, Bell Gardens, high desert California." />
                <link rel="canonical" href="https://sellmyhousequickfast.com/"/>
                <meta property="og:site_name" content="Sell My House Fast In Victorville, Claremont, Orange County, CA" />
                <meta property="og:title" content="We are local family owned investors who actively invest in Real Estate" />
                <meta property="og:description" content="Want to sell family house fast, we can help! We buy property in Bernardino County, San Fernando Valley, Rialto, Ontario, Bell Gardens, high desert California." />
                <meta property="og:url" content="https://sellmyhousequickfast.com/" />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="article:publisher" content="https://sellmyhousequickfast.com/" />
                <meta property="article:section" content="We buy houses, sell my house, looking for selling your house, we can buy it" />
                <meta property="article:tag" content="We buy houses, sell my house" />
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
                    <h3>Step 1</h3>
                    <div className='line'></div>
                    <p>Talk to a buying specialist, give us a little information on the property and time frame. </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h3>Step 2</h3>
                    <div className='line'></div>
                    <p>Set an appointment so our qualified contractor can give us feedback.  </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h3>Step 3</h3>
                    <div className='line'></div>
                    <p>You choose the selling options that works best for you.  We will work as a team.  </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h3>Step 4</h3>
                    <div className='line'></div>
                    <p>We close transaction at a local reputable title company. </p>
                    </div>
                    <div className='blackFilm'></div>
                    <img className='images' src={require("../images/p1.png")}/>
                </div>

                <div className='full-data-container'>
                    <div className='text-info'>
                    <h3>Step 5</h3>
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
                <h1>How to sell my house instantly?</h1>
                <p className="row">We will buy your house fast and pay you the total amount in cash. No Brokerage Fee! No Waiting! No home staging!</p>
                <h2>Who chooses to sell the house for cash?</h2>
                <p className="row mb-2">Anyone who wants to sell the house quickly in San Bernardino, Riverside, Orange, Palmdale, Moreno Valley, and Inglewood, CA, contacts us. Many homeowners have avoided foreclosures. Others facing divorce or looking to sell their ancestral property also trust us. If you’re moving or are upside down in your mortgage, we will help you out.</p>
                <h2>Sell your houses for cheap and quickly</h2>
                <p className="row">“I want to sell my old house, but don’t know where to start.”</p>
                <p className="row">“The fees of real estate agents are so high.”</p>
                <p className="row">“And the repair and renovation is so frustrating.”</p>
                <h2>“So, can I sell my house quickly?”</h2>
                <p className="row">We will buy your house in Los Angeles or Atlanta immediately after looking at the condition. Sell us your home in as-is condition. This means you need not fix the major (or minor issues). All this happens in less than a month. In many cases, we close a deal in 7 DAYS.</p>
                <h2>How can I sell my house for cash?</h2>
                <p className="row mb-2">Here’s how the process works:s</p>
                <ul>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i><strong>First meeting:</strong> Provide us the basic information about your house. This you can do after talking to our buying specialist.</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i><strong>Appointment setting:</strong> You can tell us when our qualified contractor can visit your property. After examining your house, they will share the feedback with us.</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i><strong>Select the selling options:</strong> You get to decide the selling options that suit you. Consider us the most trusted partner.</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i><strong>Receive your payment:</strong> After we both are on the same page, you’ll get the full payment. Plus, we will take care of the documentation. “But, what about the fees? I want to Sell My House for Cheap.” You don’t pay any real estate commission or any other fee. Everything is transparent and documented.</li>
                </ul>
                <p className="row">So, what are you waiting for?</p>
                <p className="row">Connect with us today…and get the best price for your house in Barstow, Riverside County, Huntington Park, Victorville, CA and South Central, Los Angeles</p>
                <h2>Sell your house fast in Los Angeles</h2>
                <h6>Do you have these questions:</h6>
                <p className="row">How to sell my house with tenants?</p>
                <p className="row">Can I sell my inherited house fast?</p>
                <p className="row">Is there a shortcut to sell my house when moving to another state?</p>
                <p className="row">How can I sell my parents’ house?</p>
                <h2>We’re here with all the ANSWERS!</h2>
                <p className="row">Connect with us to sell your house in Los Angeles. We invest in multiple properties in Los Angeles. We do all the heavy listing and bring properties back to current standards.</p>
                <h2>Why should I sell my house to investors?</h2>
                <p className="row">You might be wondering. We will buy it for cash in the shortest time possible. You don’t have to worry about:</p>
                <ul>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Repairs and renovation</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Paying commission to the agents</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Waiting indefinitely for the right seller</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Listing your home online</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Staging your home</li>
                </ul>
                <h2>Can I also sell my house for millennials?</h2>
                <p className="row">Yes, we buy all types of homes – be it modern properties or the ones made decades ago.</p>
                <h2>I want to sell my house, as I am a tired landlord. Can you help?</h2>
                <p className="row">Yes, we’ll help you sell your home even if you have bad tenants.</p>
                <h2>How to get an offer for my home?</h2>
                <p className="row">Fill in the online form on the homepage and we’ll get back to you.</p>
                <h2>Sell your house in Atlanta, Georgia</h2>
                <p className="row mb-1">“I want to sell my house in Atlanta, Georgia. I can’t be actively involved in the selling process. And the agents are asking high commissions.”</p>
                <p className="row">We will buy your house for cash. It’s the easiest way to get rid of your house that has been on the market for a long period.</p>
                <h2>How do you help to sell my house for cash in Atlanta, Georgia?</h2>
                <p className="row mb-1">You can connect with us for houses that:</p>
                <ul>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Require extensive repairs</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Are involved with pre-foreclosure</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Have bad tenants</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Are inherited</li>
                    <li><i class="fas fa-circle-notch" style={{marginRight: 10, color:'#29A8DF'}}></i>Have tax liens</li>
                </ul>
                <h2>Can I sell my house fast in Roswell, Georgia?</h2>
                <p className="row">Yes, we purchase houses in Roswell, Georgia. And we buy all types of properties: multi-family homes, single-family homes, grocery stores, apartment buildings, and laundromats.</p>
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