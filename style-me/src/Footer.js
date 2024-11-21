import React from 'react';
import Twitter from './images/twitter.svg';
import Youtube from './images/youtube.svg';
import Instagram from './images/instagram.svg';
import Linkedin from './images/linked-in.svg';
import Logo from './images/logo.png';

function Footer() {
  return (
    <footer class="py-5" bg="light" data-bs-theme="light">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>Digital Fashion</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Mixed Reality</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Metaversy Utility</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Metaverse Fashion Events</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>AR</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">AR Try-On for Footwear</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">AR for Fashion</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Snapchart Lenses</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Getting Started</a></li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>About</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Blog</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Contact</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2024 Company, Inc. All rights reserved.</p>
          <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 link-body-emphasis text-decoration-none">
            <img class="bi me-2 logo" src={Logo}></img>
          </a>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-body-emphasis" title="LinkedIn" href="https://www.linkedin.com/company/styleme/" target="_blank" >
                <img className='icon' src={Linkedin}></img></a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" title="Twitter" href="https://twitter.com/styleme_3D" target="_blank" >
                <img className='icon' src={Twitter}></img>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" title="Instagram" href="https://www.instagram.com/style.me.digitalfashion/" >
                <img className='icon' src={Instagram}></img>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" title="YouTube" href="https://www.youtube.com/channel/UCoYMvQF4CfB8_Cy0lDIXhuA" >
                <img className='icon' src={Youtube}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
