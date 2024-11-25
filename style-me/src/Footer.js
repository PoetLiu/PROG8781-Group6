// Created by Peng Liu(8903532)
import React from 'react';
import Twitter from './images/twitter.svg';
import Youtube from './images/youtube.svg';
import Instagram from './images/instagram.svg';
import Linkedin from './images/linked-in.svg';
import Logo from './images/logo.png';

function Footer() {
  return (
    <footer className='py-5' bg='light' data-bs-theme='light'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Digital Fashion</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Mixed Reality
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Metaversy Utility
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Metaverse Fashion Events
                </a>
              </li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>AR</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  AR Try-On for Footwear
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  AR for Fashion
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Snapchart Lenses
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Getting Started
                </a>
              </li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>About</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Blog
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Contact
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className='col-md-5 offset-md-1 mb-3'>
            <form>
              <h5>GET IN TOUCH</h5>
              <p>Ask us anything! We’d love to hear from you.</p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <button className='btn btn-primary' type='button'>
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
          <p>&copy; 2024 Company, Inc. All rights reserved.</p>
          <a
            href='/'
            className='col-md-4 d-flex align-items-center justify-content-center mb-3 link-body-emphasis text-decoration-none'
          >
            <img className='bi me-2 logo' src={Logo}></img>
          </a>
          <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
              <a
                className='link-body-emphasis'
                title='LinkedIn'
                href='https://www.linkedin.com/company/styleme/'
                target='_blank'
              >
                <img className='icon' src={Linkedin}></img>
              </a>
            </li>
            <li className='ms-3'>
              <a
                className='link-body-emphasis'
                title='Twitter'
                href='https://twitter.com/styleme_3D'
                target='_blank'
              >
                <img className='icon' src={Twitter}></img>
              </a>
            </li>
            <li className='ms-3'>
              <a
                className='link-body-emphasis'
                title='Instagram'
                href='https://www.instagram.com/style.me.digitalfashion/'
              >
                <img className='icon' src={Instagram}></img>
              </a>
            </li>
            <li className='ms-3'>
              <a
                className='link-body-emphasis'
                title='YouTube'
                href='https://www.youtube.com/channel/UCoYMvQF4CfB8_Cy0lDIXhuA'
              >
                <img className='icon' src={Youtube}></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
