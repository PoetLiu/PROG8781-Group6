// Created by Peng Liu(8903532)
import MixRealiaty from './images/mixed-reality-styleme.mp4';
import MetaverseEvent from './images/metaverse-event-2022-low-res.mp4';
import MetaverseShowRoom from './images/metaverse-showroom.mp4';
import DigitalFashionJacket from './images/styleme-digital-fashion-jacket.gif';
import { AnimatedOnScroll } from 'react-animated-css-onscroll';

function DigitalFashion() {
  return (
    <>
      <div
        id='df-intro'
        className='d-flex justify-content-start align-items-center'
      >
        <div className='container'>
          <div className='col-12 col-md-5'>
            <AnimatedOnScroll animationIn='fadeInDownBig'>
              <p className='title'>A New Way to Experience Digital Fashion</p>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp'>
              <p className='desc'>
                We are a technology and content provider for digital fashion
                with end-to-end solutions for designers, brands and metaverses
              </p>
            </AnimatedOnScroll>
          </div>
        </div>
      </div>
      <div className='container'>
        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-6'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>Mixed Reality</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p className='desc'>
                Drive engagement with unique interactivity Create dynamic
                fashion experiences in any setting of your choice. Allow
                consumers, sales partners or internal teams to view and engage
                with pop-up fashion shows, launches or events via their devices.
                Perfect for city backdrops, shopping malls, events and
                campaigns.
              </p>
              <button className='btn btn-primary' type='button'>
                LEARN MORE
              </button>
            </AnimatedOnScroll>
          </div>
          <div className='col-12 col-md-6 text-center mt-3 mt-md-0'>
            <video autoPlay muted loop className='rounded'>
              <source src={MixRealiaty} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-6 text-center'>
            <img src={DigitalFashionJacket} alt='Digital Fashion'></img>
          </div>
          <div className='col-12 col-md-6 mt-3 mt-md-0'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>Metaverse Utility</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p className='desc'>
                End-to-end solution from design to digital curation. Our
                technology can digitize any fashion item and port it into
                multiple metaverse environments, as well as mixed reality and
                AR/VR. Transform your digital assets, make them interactive and
                wearable.
              </p>
              <button className='btn btn-primary' type='button'>
                CONTACT US
              </button>
            </AnimatedOnScroll>
          </div>
        </section>

        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-6'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>Metaverse Fashion Events</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p className='desc'>
                We provide end-to-end solutions for brands looking to run
                fashion events and experiences in the metaverse. We digitize
                fashion and port into the metaverse. Take your collections
                digital! Provide unique ways to visualize, engage and interact
                with your collections.
              </p>
              <button className='btn btn-primary' type='button'>
                LEARN MORE
              </button>
            </AnimatedOnScroll>
          </div>
          <div className='col-12 col-md-6 text-center mt-3 mt-md-0'>
            <video autoPlay muted loop className='rounded'>
              <source src={MetaverseEvent} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className='mt-5 mb-5 pt-5 pb-5 row align-items-center'>
          <div className='col-12 col-md-6 text-center'>
            <video autoPlay muted loop className='rounded'>
              <source src={MetaverseShowRoom} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='col-12 col-md-6 mt-3 mt-md-0'>
            <AnimatedOnScroll animationIn='pulse'>
              <h1>Metaverse Showrooms</h1>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn='fadeInUp' delay='500'>
              <p className='desc'>
                Transform your collection into digital experiences Delivering
                bespoke spaces, visual merchandising with interactive content,
                clothing and hyper-realistic models. Ideal for product launches,
                communication to your sales network or internal training.
              </p>
              <button className='btn btn-primary' type='button'>
                CONTACT US
              </button>
            </AnimatedOnScroll>
          </div>
        </section>
      </div>
    </>
  );
}

export default DigitalFashion;
