// Created by Riten Sunilbhai Patel(8938590)
import TryOn from './images/ar-try-on.mp4';
import viewDress from './images/ar-view-dress-on-mobile-phone.mp4';
import wPhone from './images/snapchat-w-phone.mp4';

import bgShoe from './images/bg-Shoe.png';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

function AR() {
  return (
    <>
      <div
        id='ar-slider'
        className='d-flex justify-content-start align-items-center'
      >
        <div className='container'>
          <div className='col-12 col-md-5'>
            <AnimatedOnScroll animationIn='fadeInDown'>
              <p className='subHeading pt-2'>
                AR · APPAREL · FOOTWEAR · ACCESSORIES
              </p>
              <p className='title'>Experience fashion in-situ</p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp'>
              <p className='desc'>
                AR Try-On for Footwear. Point your device and wear shoes in-situ
                with motion tracking – web-view solution, no app required
              </p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <button className='btn btn-primary' type='button'>
                Contact us
              </button>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>

      <div className='container'>
        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-8'>
            <AnimatedOnScroll animationIn='pulse'>
              <i>
                <h1>
                  “Video increases conversions by 60% versus static images.
                  Merchants who add 3D content to their stores see a 94%
                  conversion lift.”
                </h1>
              </i>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p className='desc'>As reported by Shopify</p>
            </AnimatedOnScroll>
          </div>
        </section>
        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-6'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>AR Try-On for Footwear</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p>Let your customers:</p>
              <ul>
                <li>Try-on shoes by pointing device</li>
                <li>Tracks motion in-situ</li>
                <li>Web view with no app required</li>
              </ul>
              <p>
                <strong>Ideal for new product launches and campaigns.</strong>
              </p>
              <p>
                <strong>Contact us</strong> to get started
              </p>
            </AnimatedOnScroll>
          </div>

          <div className='col-12 col-md-6 text-center mt-3 mt-md-0'>
            <video autoPlay muted loop className='rounded'>
              <source src={TryOn} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-4 text-center'>
            <img src={bgShoe} alt='Digital Fashion'></img>
          </div>
          <div className='col-12 col-md-6'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>AR Try-On for Footwear</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p>Transforming your designs into interactive assets</p>
              <ul>
                <li>AR in-situ · 3D Viewer · Snapchat/Instagram lenses</li>
                <li>Show off your collection in 3D</li>
                <li> Bring your unique collection to life</li>
              </ul>
              <p>
                <strong>Experience digital fashion in AR</strong>
              </p>
            </AnimatedOnScroll>
          </div>
        </section>

        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-6'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>Leverage the Power of 3D and AR</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p>Let your customers:</p>
              <ul>
                <li> Rotate and zoom your products in 360 degrees</li>
                <li>View in-situ on mobile devices</li>
                <li>Unique engagement with your collection</li>
              </ul>
              <p>
                <strong>
                  AR helps your customers make purchase decisions, increasing
                  conversions..
                </strong>
              </p>
              <button className='btn btn-primary' type='button'>
                Watch video
              </button>
            </AnimatedOnScroll>
          </div>
          <div className='col-12 col-md-6 text-center mt-3 mt-md-0'>
            <video autoPlay muted loop className='rounded'>
              <source src={viewDress} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-6 text-center'>
            <video autoPlay muted loop className='rounded'>
              <source src={wPhone} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='col-12 col-md-6'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>Social Interaction with Snapchat Lenses</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p>Wear and share across social channels:</p>
              <ul>
                <li> Try-on items with Snapchat</li>
                <li>View in-situ on mobile devices</li>
                <li>Take your collection into social platforms</li>
              </ul>
              <p>
                <strong>Unique ways to interact with your designs</strong>
              </p>
            </AnimatedOnScroll>
          </div>
        </section>
        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <center>
            <div className='col-12 col-md-12'>
              <AnimatedOnScroll animationIn='pulse'>
                <h1>Interested? </h1>
                <h1>Schedule a quick call with our team</h1>
                <button className='btn btn-primary' type='button'>
                  Let's Talk
                </button>
              </AnimatedOnScroll>
            </div>
          </center>
        </section>
      </div>
    </>
  );
}

export default AR;
