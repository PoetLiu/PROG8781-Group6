// Ceaated By : Harsh Patel

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PressReleasesTimeline from './components/PressRelease';
import PressCoverage from './components/PressCoverage';
import PodcastSection from './components/PodCastSection';
import EbookSection from './components/EbookSection';


const blogs = [
  {
    id: 1,
    image: "/images/blog/date-summit-cover-2022-700x441.jpg",
    title: "The Future of Fashion in the Metaverse Keynote",
    date: "September 20, 2022",
    content: "In-depth discussion about the future of fashion in the metaverse...",
    longDescription:
      "The future of fashion in the metaverse is an exciting concept that blends technology, creativity, and culture. This keynote addresses how virtual reality, augmented reality, and AI are converging to redefine the way fashion is designed, marketed, and experienced. Major brands are entering this space to create virtual clothing collections, immersive shopping experiences, and avatar styling tools. Join us as we explore the limitless possibilities of fashion in this digital frontier."
  },
  {
    id: 2,
    image: "/images/blog/emerging-giants-asia-pacific-kpmg-hsbc-700x441.png",
    title: "Style.me in the Top 10 KPMG-HSBC Emerging Giants in Asia Pacific List",
    date: "August 26, 2022",
    content: "We are proud to be included in the Top Ten KPMG-HSBC list...",
    longDescription:
      "Style.me's inclusion in the prestigious KPMG-HSBC Emerging Giants list recognizes our innovation in digital fashion technology. This milestone highlights our growth and dedication to transforming how consumers interact with fashion brands. As a leader in virtual fitting technology, we continue to empower retailers and designers with tools to enhance customer engagement and sustainability practices."
  },
  {
    id: 3,
    image: "/images/blog/ar-footwear-feature-700x441.jpg",
    title: "AR for Footwear and Accessories",
    date: "June 29, 2022",
    content: "Style.me expands AR features for footwear and accessories...",
    longDescription:
      "Augmented Reality (AR) is revolutionizing the fashion industry, and Style.me is at the forefront of this change. By integrating AR features for footwear and accessories, we offer customers a seamless and interactive way to visualize products before purchase. Our technology helps reduce returns, improves customer satisfaction, and brings the shopping experience closer to reality."
  },
  {
    id: 4,
    image: "/images/blog/fashion-nfts-metaverses-blog-article-700x441.jpg",
    title: "Fashion, NFTs and Metaverses. How Wearable Digital Assets are Going to Transform the Industry?",
    date: "July 15, 2022",
    content: "The NFT and digital fashion markets are exploding. Is your wardrobe ready to enter the metaverse worlds? You can buy digital fashion and NFTs, but cannot wear them? Well, that’s about to change.",
    longDescription:
      "Style.me's virtual fitting solution is now available globally, providing fashion retailers with cutting-edge technology to enhance their online shopping experience. This solution allows customers to visualize how garments fit their body shapes, leading to better purchasing decisions and increased confidence in online shopping."
  },
  {
    id: 5,
    image: "/images/blog/ar-view-announcement-2022-700x441.jpg",
    title: "Launching Our AR Solution for Fashion E-Commerce",
    date: "May 10, 2022",
    content: "Our AR solution plugs into your product page, adding unique content to your site, and providing an instant interactive experience in 3D.",
    longDescription:
      "Sustainability is a critical issue in fashion, and technology is playing a significant role in addressing it. This blog explores how innovative tools like digital sampling, virtual showrooms, and AI-driven insights are helping fashion brands minimize waste, optimize supply chains, and promote eco-friendly practices."
  },
  {
    id: 6,
    image: "/images/blog/featured-image-annual-report-2021-700x441.jpg",
    title: "Learnings from 2021. Virtual Fitting Room Consumer Insights",
    date: "March 5, 2022",
    content: "How is the average shopper built? We analysed over 9 million users from our partners from various clothing categories, dividing the results for North America, Europe and East Asia. Measurement distribution across regions for men and women.",
    longDescription:
      "Artificial Intelligence (AI) is transforming the fashion industry, from predicting trends to personalizing customer experiences. This blog delves into how AI tools are used in designing collections, managing inventories, and even creating virtual stylists that guide consumers in their shopping journey."
  }
];

function Blog() {
    const [selectedBlog, setSelectedBlog] = useState(blogs[0]);
  
    return (
      <>
      <Container className="py-5">
        <Row>
          {/* Left Section: Blog Details */}
          <Col md={8} className="border-end">
            <div className="p-3">
              <h2 className="fw-bold">{selectedBlog.title}</h2>
              <p className="text-muted">{selectedBlog.date}</p>
              <img
                id="blog-image"
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="img-fluid mb-3 rounded blog-image"
              />
              <p>{selectedBlog.content}</p>
              <hr />
              <h5 className="mt-4">More Details:</h5>
              <p>{selectedBlog.longDescription}</p>
            </div>
          </Col>

          {/* Right Section: Blog List */}
          <Col md={4}>
            <h3 className="fw-bold mb-4">Recent Blogs</h3>
            <div className="blog-list">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className={`blog-item ${
                    blog.id === selectedBlog.id ? 'active-blog' : ''
                  }`}
                  onClick={() => setSelectedBlog(blog)}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="img-thumbnail blog-thumbnail"
                  />
                  <div>
                    <h6 className="mb-1 fw-bold text-dark">{blog.title}</h6>
                    <p className="text-muted small mb-0">{blog.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        
      </Container>
      <PressReleasesTimeline />
        <PressCoverage />
        <PodcastSection />
        <EbookSection />
      </>
    );
  }

export default Blog;
