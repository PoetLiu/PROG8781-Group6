// Redesigned VR.js

import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import VirtualFittingImage from "./images/Virtual_Fitting_Room.jpeg";
import TryNowVideo from "./images/ar-try-on.mp4";
import laptopImage from "./images/vr.png";
import "./css/vr.css";
import "animate.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import vrHeader from "./images/vr_header.mp4";
import vrInteractive from "./images/interactive_vr.mp4";


function VR() {
  return (
    <>
      {/* Header Section */}
      <header className="header-section">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Text Section */}
      <div className="col-12 col-md-6 text-content">
        <p className="tagline text-danger animate__animated animate__fadeInDown">
          3D VIRTUAL FITTING AND STYLING
        </p>
        <h1 className="main-heading animate__animated animate__fadeInLeft">
          Bringing the real-world shopping experience online
        </h1>
        <p className="subtext animate__animated animate__fadeInLeft">
          The leading virtual fitting and styling solution for businesses of all sizes. 
          Try on items, get accurate size recommendations, and style outfits – all from your 
          elevated online store. Benefit from increased conversions, enhanced engagement, and 
          significantly lower product returns.
        </p>
        <div className="action-buttons mt-4">
          <button className="btn btn-primary me-3 px-4 py-2 animate__animated animate__zoomIn">
            View Demo
          </button>
          <button className="btn btn-outline-light px-4 py-2 animate__animated animate__zoomIn">
            <i className="bi bi-play-circle-fill"></i> Play Video
          </button>
        </div>
      </div>
      {/* Right Video Section */}
      <div className="col-12 col-md-6 text-center animate__animated animate__fadeInRight">
      <video
  autoPlay
  muted
  loop
  className="header-video"
  style={{ borderRadius: "10px", width: "100%", height: "auto" }}
>
  <source src={vrHeader} type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>
    </div>
    {/* Feature Section with Animations */}
    <div className="row features mt-5">
      <div
        className="col text-center feature-item animate__animated animate__bounceIn"
        style={{ animationDelay: "0.2s" }}
      >
        <i className="bi bi-cpu text-danger fs-3"></i>
        <p className="feature-text mt-2">AI Algorithms</p>
      </div>
      <div
        className="col text-center feature-item animate__animated animate__bounceIn"
        style={{ animationDelay: "0.4s" }}
      >
        <i className="bi bi-display text-danger fs-3"></i>
        <p className="feature-text mt-2">4K Rendering</p>
      </div>
      <div
        className="col text-center feature-item animate__animated animate__bounceIn"
        style={{ animationDelay: "0.6s" }}
      >
        <i className="bi bi-compass text-danger fs-3"></i>
        <p className="feature-text mt-2">360° Visualization</p>
      </div>
      <div
        className="col text-center feature-item animate__animated animate__bounceIn"
        style={{ animationDelay: "0.8s" }}
      >
        <i className="bi bi-box text-danger fs-3"></i>
        <p className="feature-text mt-2">3D Simulation</p>
      </div>
    </div>
  </div>
</header>


      {/* Virtual Fitting Experience Section */}
      <section className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <AnimatedOnScroll animationIn="fadeInLeft">
              <h2>Virtual Fitting Room</h2>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationIn="fadeInUp" delay="300">
              <p>
                Try on outfits in real-time using our cutting-edge virtual
                fitting room technology. Mix and match clothing styles and
                preview how they look before making a purchase.
              </p>
              <button className="btn btn-primary mt-3">Try Now</button>
            </AnimatedOnScroll>
          </div>
          <div className="col-12 col-md-6 text-center">
          <img
  src={VirtualFittingImage}
  alt="Virtual Fitting Room"
  className="img-fluid rounded image-fade-in"
/>
          </div>
        </div>
      </section>

      {/* 3D Model Viewer Section */}
<section
  className="container mt-5 mb-5"
  style={{ backgroundColor: "#f8f9fa", padding: "40px", borderRadius: "10px" }}
>
  <div className="row align-items-center">
    {/* Left: Video */}
    <div className="col-12 col-md-6 text-center">
      <AnimatedOnScroll animationIn="zoomIn">
        <video
          autoPlay
          muted
          loop
          className="interactive-vr-video rounded"
          style={{
            width: "80%", // Restrict width to 80% of its container
            maxWidth: "400px", // Limit maximum width
            height: "auto", // Maintain aspect ratio
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <source src={vrInteractive} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AnimatedOnScroll>
    </div>
    {/* Right: Description */}
    <div className="col-12 col-md-6">
      <AnimatedOnScroll animationIn="fadeInRight">
        <h2>Interactive VR Experience</h2>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeInUp" delay="300">
        <p>
          Immerse yourself in our interactive VR experience to explore fashion like never before.
          Rotate, zoom, and interact with 3D designs in a fully virtual environment.
        </p>
        <button className="btn btn-secondary mt-3">Explore More</button>
      </AnimatedOnScroll>
    </div>
  </div>
</section>


      <section className="benefits-section">
      <div className="container">
        <h2 className="section-title text-center animate__animated animate__fadeInUp">
          BENEFITS
        </h2>
        <p className="section-subtitle text-center animate__animated animate__fadeInUp">
          We’ve helped our partners
        </p>

        <div className="row text-center mt-5">
          {/* Benefit 1 */}
          <div
            className="col-12 col-md-4 benefit-item animate__animated animate__zoomIn"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="icon-container">
              <i className="bi bi-graph-up-arrow text-danger fs-2"></i>
            </div>
            <h3 className="benefit-title mt-3">Increase Conversion</h3>
            <p className="benefit-highlight text-danger">+30%*</p>
            <p className="benefit-description">
              *Excluding bounce. Improve customer conversion rates with an
              engaging shopping experience.
            </p>
          </div>

          {/* Benefit 2 */}
          <div
            className="col-12 col-md-4 benefit-item animate__animated animate__zoomIn"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="icon-container">
              <i className="bi bi-people text-danger fs-2"></i>
            </div>
            <h3 className="benefit-title mt-3">Boost Engagement</h3>
            <p className="benefit-highlight text-danger">+280%</p>
            <p className="benefit-description">
              Virtual fitting and styling increases page views as customers
              discover new items.
            </p>
          </div>

          {/* Benefit 3 */}
          <div
            className="col-12 col-md-4 benefit-item animate__animated animate__zoomIn"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="icon-container">
              <i className="bi bi-arrow-down-circle text-danger fs-2"></i>
            </div>
            <h3 className="benefit-title mt-3">Lower Returns</h3>
            <p className="benefit-highlight text-danger">-50%</p>
            <p className="benefit-description">
              Our partners realize up to 50% reductions in returns driven by
              accurate fit and visualization.
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <a href="/partners" className="view-partners-link">
            View Partners →
          </a>
        </div>
      </div>
    </section>

      {/* Try Now Video Section */}
      <section className="container mt-5 mb-5">
  <div className="row align-items-center">
    <div className="col-12 col-md-6">
      <AnimatedOnScroll animationIn="fadeInLeft">
        <h2>How It Works</h2>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="fadeInUp" delay="300">
        <p>
          Watch our quick tutorial to learn how to use the virtual fitting room
          and make the most of your experience.
        </p>
      </AnimatedOnScroll>
    </div>
    <div className="col-12 col-md-6 text-center">
      <AnimatedOnScroll animationIn="fadeIn">
        <video
          autoPlay
          muted
          loop
          className="how-it-works-video rounded"
        >
          <source src={TryNowVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </AnimatedOnScroll>
    </div>
  </div>
</section>


      
    </>
  );
}

export default VR;
