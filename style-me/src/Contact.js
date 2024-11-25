import React from 'react';
import bgImg from './images/city-view-new-york.jpg';

function Contact() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '100px 20px',
        }}
      >
        <h6
          style={{
            color: '#FF6F61',
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}
        >
          Get In Touch
        </h6>
        <h1
          style={{
            fontWeight: '700',
            fontSize: '2.5rem',
            marginBottom: '10px',
          }}
        >
          Ask us anything! <br />
          We'd love to hear from you
        </h1>
        <p style={{ fontSize: '1rem', fontWeight: '400' }}>
          We're confident you'll find Style.me to be the perfect fit.
        </p>
      </div>

      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div
            className='col-12 col-md-8 col-lg-6 p-4'
            style={{
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <form>
              <div className='row g-3'>
                <div className='col-md-6'>
                  <label htmlFor='firstName' className='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstName'
                    className='form-control'
                    placeholder='First Name'
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='lastName' className='form-label'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastName'
                    className='form-control'
                    placeholder='Last Name'
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='country' className='form-label'>
                    Country
                  </label>
                  <select id='country' className='form-control' required>
                    <option value=''>Select Country*</option>
                    <option value='US'>United States</option>
                    <option value='UK'>United Kingdom</option>
                    <option value='CA'>Canada</option>
                  </select>
                </div>
                <div className='col-md-6'>
                  <label htmlFor='company' className='form-label'>
                    Company Name
                  </label>
                  <input
                    type='text'
                    id='company'
                    className='form-control'
                    placeholder='Company Name*'
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='form-control'
                    placeholder='Email*'
                    required
                  />
                </div>
                <div className='col-md-6'>
                  <label htmlFor='phone' className='form-label'>
                    Work Phone
                  </label>
                  <input
                    type='text'
                    id='phone'
                    className='form-control'
                    placeholder='Work Phone'
                  />
                </div>
                <div className='col-12'>
                  <label htmlFor='message' className='form-label'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Enter your message here*'
                    required
                  ></textarea>
                </div>
                <div className='col-12 text-center'>
                  <button
                    type='submit'
                    className='btn btn-danger px-5'
                    style={{ borderRadius: '50px' }}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className='col-12 col-md-4 mt-5 mt-md-0'>
            <h5>Contact Info</h5>
            <ul className='list-unstyled'>
              <li className='mb-3'>
                <i className='bi bi-envelope'></i> contact@style.me
              </li>
              <li className='mb-3'>
                <strong>North America:</strong>
                <p>
                  124 9th Street, Unit 3-286
                  <br />
                  Brooklyn, NY 11215
                </p>
              </li>
              <li>
                <strong>Asia:</strong>
                <p>
                  7F, No. 105, Songren Road
                  <br />
                  Xinyi District, Taipei, Taiwan
                </p>
              </li>
            </ul>
            <div>
              <i className='bi bi-linkedin me-3'></i>
              <i className='bi bi-twitter me-3'></i>
              <i className='bi bi-youtube'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
