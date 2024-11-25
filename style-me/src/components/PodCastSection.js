// Ceaated By : Harsh Patel

import React from 'react';
import { FaSpotify, FaYoutube, FaPodcast } from 'react-icons/fa';

const guests = [
  { name: "Paul Rosengard", title: "Insights from a Retail Aficionado" },
  { name: "Martin Newman", title: "Consumer Champion" },
  { name: "Taylor Ivey", title: "Fashion Designer & CEO" },
  { name: "Tom Ott", title: "President, Retail Czar" },
  { name: "Sherri McMullen", title: "CEO of McMullen" },
  { name: "Simon Bentley", title: "Business Leader" },
  { name: "Iris Skrami", title: "Sustainable Fashion App Renoon" },
  { name: "Silvia Vanni", title: "Sustainable Fashion Sharing Platform ShareMyBag" }
];

const PodcastSection = () => {
  return (
    <div className="podcast-section text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="display-4 mb-4">Talking Retail Podcast</h1>
            <p className="lead mb-5">
              Talking Retail hosted by Style.me is a podcast on retail innovation.
              Join us to learn more about retail trends, technology, innovation and much much more.
            </p>

            <div className="social-links mb-5">
              <a href="https://open.spotify.com/show/4iC8jLgLVFRgaypfgF7n4K" className="me-4 text-white">
                <FaSpotify size={24} />
              </a>
              <a href="/blogs" className="me-4 text-white">
                <FaYoutube size={24} />
              </a>
              <a href="https://podcasts.apple.com/gb/podcast/talking-retail/id1537078328" className="text-white">
                <FaPodcast size={24} />
              </a>
            </div>

            <h2 className="h4 mb-4">Guests:</h2>
            <div className="guests-list">
              {guests.map((guest, index) => (
                <div key={index} className="guest-item mb-4">
                  <h3 className="h5 mb-2">{guest.name}</h3>
                  <p className="text-light small fw-bold">{guest.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection;
