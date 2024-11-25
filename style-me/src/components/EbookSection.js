// Ceaated By : Harsh Patel

import React from 'react';
import { FaDownload } from 'react-icons/fa';


const EbookSection = () => {
  return (
    <div className="ebook-section">
      <div className="container">
        <div className="row align-items-center py-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="ebook-image-container">
              <img 
                id = "ebook-image"
                src="/images/blog/the-virtual-fitting-guide-ebook.png" 
                alt="The Virtual Fitting Guide eBook" 
                className="ebook-image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ebook-content">
              <span className="badge bg-danger mb-3">FREE EBOOK</span>
              <h1 className="display-5 fw-bold mb-4">The Virtual Fitting Guide</h1>
              <p className="lead mb-4">
                We are excited to share with you a free copy of our recently launched eBook on virtual fitting. 
                A brief overview of the main drivers of change and how you can capitalize on evolving trends 
                to ensure that your business flourishes in the new era
              </p>
              <button 
                className="btn btn-danger btn-lg download-btn"
                onClick={() => window.open('#', '_blank')}
              >
                <FaDownload className="me-2" />
                DOWNLOAD FREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookSection;
