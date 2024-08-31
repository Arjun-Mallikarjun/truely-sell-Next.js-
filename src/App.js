import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';


function Header() {
  return (
    <>
      <div className="header-before">
        <p>50% OFF on Christmas</p>
        <ul>
          <li className="white-box">2</li>
          <li className="white-box">15</li>
          <li className="white-box">33</li>
          <li className="white-box">32</li>
        </ul>
        <a href="#index1.html"><p>X</p></a>
      </div>
      <div className="header">
        <a href="#Home"><img src="/images/logo.png" alt="True-sell-logo" className="logo" /></a>
        <nav className="head-nav">
          <div className="dropdown">
            <button className="dropbtn">Home <i className="bi bi-chevron-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Electrical Home</a>
              <a href="#">Cleaning Home</a>
              <a href="#">Saloon Home</a>
              <a href="#">Catering Home</a>
              <a href="#">Car Wash Home</a>
              <a href="#">House Problem Home</a>
              <a href="#">Pet Grooming Home</a>
              <a href="#">Mechanic Home</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Services <i className="bi bi-chevron-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Service Grid</a>
              <a href="#">Service List</a>
              <a href="#">Service Details</a>
              <a href="#">Search</a>
              <a href="#">Providers</a>
              <a href="#">Create Search</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Customers <i className="bi bi-chevron-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Dashboard</a>
              <a href="#">Booking</a>
              <a href="#">Favorites</a>
              <a href="#">Wallet</a>
              <a href="#">Reviews</a>
              <a href="#">Chat</a>
              <a href="#">Settings</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Providers <i className="bi bi-chevron-down"></i></button>
            <div className="dropdown-content">
              <a href="#">My Services</a>
              <a href="#">Payout</a>
              <a href="#">Settings</a>
              <a href="#">Availability</a>
              <a href="#">Holidays & Leave</a>
              <a href="#">Coupons</a>
              <a href="#">Offers</a>
              <a href="#">Earnings</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Pages <i className="bi bi-chevron-down"></i></button>
            <div className="dropdown-content">
              <a href="#">About</a>
              <a href="#">Contact Us</a>
              <a href="#">How It Works</a>
              <a href="#">Error Page</a>
              <a href="#">Authentication</a>
              <a href="#">Categories</a>
              <a href="#">Pricing Plan</a>
              <a href="#">FAQ</a>
              <a href="#">Maintenance</a>
              <a href="#">Coming soon</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Session Expired</a>
              <a href="#">Installer</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Blog <i className="bi bi-chevron-down"></i></button>
            <div className="dropdown-content">
              <a href="#">Blog Grid</a>
              <a href="#">Blog List</a>
              <a href="#">Blog Details</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Admin</button>
          </div>
        </nav>
        <button className="reg-button"><i className="fa fa-user" aria-hidden="true"></i><i className="bi bi-person"></i> Register / Login</button>
      </div>
    </>
  );
}

export function MainHome() {
  return (
    <div className="main-home">
      <div className="world-h0">
        <p className="worlds-h1">World's Largest Marketplace</p>
        <h4 className="worlds-h2">Search From 150 Awesome Verified Ads!</h4>
        <div className="home-button">
          <button><i className="bi bi-chevron-left"></i></button>
          <button><i className="bi bi-chevron-right"></i></button>
        </div>
        <form action="/search" method="get" className="worlds-h3">
          <input type="search" placeholder="What are you looking for?" className="worlds-h4" />
          <input type="search" placeholder="Your Location" className="worlds-h5" />
          <input type="submit" value="Search" className="home-search" />
        </form>
      </div>
    </div>
  );
}


export function BelowHome() {
  return (
    <div className="below-home">
      <div className="below-homepage-lines">
        <div>
          <h1>Featured Categories</h1>
          <p>What do you need to find?</p>    
        </div>
        <div className="below-home-link">
          <a href="#">View All <i className="bi bi-arrow-right-circle"></i></a>
        </div>
      </div>
      <div className="below-home-img">
        <div className="img-wrapper">
          <a href="#"><img src="images/construction.jpg" alt="Construction" className="img-1" /></a>
          <div className="img-text"><h3 style={{ fontWeight: 'bolder' }}>Construction</h3><p>10 services</p></div>
        </div>
        <div className="img-wrapper">
          <a href="#"><img src="images/interior.jpg" alt="Interior" className="img-1" /></a>
          <div className="img-text"><h3 style={{ fontWeight: 'bolder' }}>Interior</h3><p>08 services</p></div>
        </div>
        <div className="img-wrapper">
          <a href="#"><img src="images/car-wash.jpg" alt="Car Wash" className="img-1" /></a>
          <div className="img-text"><h3 style={{ fontWeight: 'bolder' }}>Car Wash</h3><p>15 services</p></div>
        </div>
        <div className="img-wrapper">
          <a href="#"><img src="images/cleaning.jpg" alt="Cleaning" className="img-1" /></a>
          <div className="img-text"><h3 style={{ fontWeight: 'bolder' }}>Cleaning</h3><p>20 services</p></div>
        </div>
        <div className="img-wrapper">
          <a href="#"><img src="images/car-wash.jpg" alt="Electrical" className="img-1" /></a>
          <div className="img-text"><h3 style={{ fontWeight: 'bolder' }}>Electrical</h3><p>17 services</p></div>
        </div>
        <div className="img-wrapper">
          <a href="#"><img src="images/finance.jpg" alt="Finance" className="img-1" /></a>
          <div className="img-text"><h3 style={{ fontWeight: 'bolder' }}>Finance</h3><p>13 services</p></div>
        </div>
      </div>
    </div>
  );
}

export function FeaturedServices() {
  return(
    <div class="service-part">
        <h1>Featured Services</h1>
        <p>Explore the greatest of our services. You won’t be disappointed</p>
    
        <div class="carousel-container">
            <div class="imgs-texts">
                <div class="img-text-1">
                    <img src="/images/car-wash.jpg" alt=""/>
                    <h4>Car Wash</h4>
                    <h3><i class="bi bi-geo-alt-fill"></i>Georgia, USA</h3>
                    <h3><i class="bi bi-telephone"></i>352-265-3256</h3>
                    <h5>$45.00</h5>
                </div>
    
                <div class="img-text-1">
                    <img src="/images/car-wash.jpg" alt=""/>
                    <h4>Car Wash</h4>
                    <h3><i class="bi bi-geo-alt-fill"></i>Georgia, USA</h3>
                    <h3><i class="bi bi-telephone"></i>352-265-3256</h3>
                    <h5>$45.00</h5>
                </div>
    
                <div class="img-text-1">
                    <img src="/images/car-wash.jpg" alt=""/>
                    <h4>Car Wash</h4>
                    <h3><i class="bi bi-geo-alt-fill"></i>Georgia, USA</h3>
                    <h3><i class="bi bi-telephone"></i>352-265-3256</h3>
                    <h5>$45.00</h5>
                </div>
    
                <div class="img-text-1">
                    <img src="/images/car-wash.jpg" alt=""/>
                    <h4>Car Wash</h4>
                    <h3><i class="bi bi-geo-alt-fill"></i>Georgia, USA</h3>
                    <h3><i class="bi bi-telephone"></i>352-265-3256</h3>
                    <h5>$45.00</h5>
                </div>
    
                <div class="img-text-1">
                    <img src="/images/car-wash.jpg" alt=""/>
                    <h4>Car Wash</h4>
                    <h3><i class="bi bi-geo-alt-fill"></i>Georgia, USA</h3>
                    <h3><i class="bi bi-telephone"></i>352-265-3256</h3>
                    <h5>$45.00</h5>
                </div>
    
                <div class="img-text-1">
                    <img src="/images/car-wash.jpg" alt=""/>
                    <h4>Car Wash</h4>
                    <h3><i class="bi bi-geo-alt-fill"></i>Georgia, USA</h3>
                    <h3><i class="bi bi-telephone"></i>352-265-3256</h3>
                    <h5>$45.00</h5>
                </div>
    
                <div class="img-text-1">
                    <img src="/images/car-wash.jpg" alt=""/>
                    <h4>Car Wash</h4>
                    <h3><i class="bi bi-geo-alt-fill"></i>Georgia, USA</h3>
                    <h3><i class="bi bi-telephone"></i>352-265-3256</h3>
                    <h5>$45.00</h5>
                </div>
            </div>
        </div>
    </div>
  );
}


export function How_It_Works() {
  return (
    <div className="how-it-works">
      <div className="work-start-text">
        <h1>How It Works</h1>
        <p style={{ fontWeight: 'lighter', color: 'rgb(110, 103, 103)' }}>
          Aliquam lorem ante, dapibus in, viverra quis
        </p>
      </div>

      <div className="circles">
        <div className="circle-1">
          <p className="logo-2">
            <img src="images/work-icon-01.svg" alt="" />
          </p>
          <div className="circle-text">
            <h3>Choose What To Do</h3>
            <p style={{ fontWeight: 'lighter', color: 'rgb(110, 103, 103)' }}>
              Lorem ipsum dolor amet, consectetur adipiscing tempor labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="circle-1">
          <p className="logo-2">
            <img src="images/work-icon-02.svg" alt="" />
          </p>
          <div className="circle-text">
            <h3>Find What You Want</h3>
            <p style={{ fontWeight: 'lighter', color: 'rgb(110, 103, 103)' }}>
              Lorem ipsum dolor amet, consectetur adipiscing tempor labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="circle-1">
          <p className="logo-2">
            <img src="images/work-icon-03.svg" alt="" />
          </p>
          <div className="circle-text">
            <h3>Amazing Places</h3>
            <p style={{ fontWeight: 'lighter', color: 'rgb(110, 103, 103)' }}>
              Lorem ipsum dolor amet, consectetur adipiscing tempor labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <h1>Most Popular Services</h1>
      <p>Explore the greatest of our services. You won't be disappointed.</p>
      <div className="carousel-container-1">
        <div className="imgs-texts-1">
          <div className="img-text-2">
            <img src="/images/car-wash.jpg" alt="" />
            <h4>Car Wash</h4>
            <h3>Georgia, USA</h3>
            <h3>352-265-3256</h3>
            <h5>$45.00</h5>
          </div>

          <div className="img-text-2">
            <img src="/images/car-wash.jpg" alt="" />
            <h4>Car Wash</h4>
            <h3>Georgia, USA</h3>
            <h3>352-265-3256</h3>
            <h5>$45.00</h5>
          </div>

          <div className="img-text-2">
            <img src="/images/car-wash.jpg" alt="" />
            <h4>Car Wash</h4>
            <h3>Georgia, USA</h3>
            <h3>352-265-3256</h3>
          </div>

          <div className="img-text-2">
            <img src="/images/car-wash.jpg" alt="" />
            <h4>Car Wash</h4>
            <h3>Georgia, USA</h3>
            <h3>352-265-3256</h3>
            <h5>$45.00</h5>
          </div>

          <div className="img-text-2">
            <img src="/images/car-wash.jpg" alt="" />
            <h4>Car Wash</h4>
            <h3>Georgia, USA</h3>
            <h3>352-265-3256</h3>
            <h5>$45.00</h5>
          </div>

          <div className="img-text-2">
            <img src="/images/car-wash.jpg" alt="" />
            <h4>Car Wash</h4>
            <h3>Georgia, USA</h3>
            <h3>352-265-3256</h3>
            <h5>$45.00</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Our_Top_Workers() {
  return (
    <div className="worker-list">
      <div className="top-card">
        <div>
          <h1>Our Top Workers</h1>
          <p>Meet our best workers. You won’t be disappointed</p>
        </div>
        <div className="viewlink">
          <a href="#">View All</a>
        </div>
      </div>

      <div className="workers-cards" style={{ color: 'black' }}>
        <div className="card-1">
          <div>
            <img src="/images/person.jpg" alt="person image" />
          </div>
          <div style={{ gap: '80px' }}>
            <h4>John Smith <br /> Electrician </h4>
            <p>$50.00 <span>/hr</span></p>
          </div>
          <div className="bottom-link" style={{ gap: '100px' }}>
            <p>4.8</p>
            <a href="#">View Details</a>
          </div>
        </div>

        <div className="card-1">
          <div>
            <img src="/images/person.jpg" alt="person image" />
          </div>
          <div style={{ gap: '80px' }}>
            <h4>John Smith <br /> Electrician </h4>
            <p>$50.00 <span>/hr</span></p>
          </div>
          <div className="bottom-link" style={{ gap: '100px' }}>
            <p>4.8</p>
            <a href="#">View Details</a>
          </div>
        </div>

        <div className="card-1">
          <div>
            <img src="/images/person.jpg" alt="person image" />
          </div>
          <div style={{ gap: '80px' }}>
            <h4>John Smith <br /> Electrician </h4>
            <p>$50.00 <span>/hr</span></p>
          </div>
          <div className="bottom-link" style={{ gap: '100px' }}>
            <p>4.8</p>
            <a href="#">View Details</a>
          </div>
        </div>

        <div className="card-1">
          <div>
            <img src="/images/person.jpg" alt="person image" />
          </div>
          <div style={{ gap: '80px' }}>
            <h4>John Smith <br /> Electrician </h4>
            <p>$50.00 <span>/hr</span></p>
          </div>
          <div className="bottom-link" style={{ gap: '100px' }}>
            <p>4.8</p>
            <a href="#">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}



export function Pricing_Plans() {
  return (
    <div className="pricing">
      <h1>Pricing Plans</h1>
      <p>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
      </p>
      <div className="slider-container">
        <p className="slider-text">Bill Monthly</p>
        <input type="checkbox" id="slider-checkbox" className="slider-checkbox" />
        <label htmlFor="slider-checkbox" className="slider-label"></label>
      </div>    
      <div className="three-cards">
        <div className="three-cards-1">
          <h1>$50<span>/month</span></h1>
          <h2>Starter</h2>
          <p><span>Lorem ipsum dolor sit amet, consectetur</span></p>
          <hr />
          <ul>
            <li>Sed perspiciatis unde omnis natus error</li>
            <li>Lorem dolor consectetur adipiscing elit</li>
            <li>Duis irure dolor reprehenderit voluptate</li>
            <li>Nemo enim ipsam voluptatem quia</li>
            <li>Sed perspiciatis iste natus error</li>
          </ul>
          <input type="submit" className="sub-butt" value="Choose Plan" />
        </div>
        <div className="three-cards-2">
          <h3>MOST POPULAR</h3>
          <h1>$100<span>/month</span></h1>
          <h2>Company</h2>
          <p><span>Lorem ipsum dolor sit amet, consectetur</span></p>
          <hr />
          <ul>
            <li>Sed perspiciatis unde omnis natus error</li>
            <li>Lorem dolor consectetur adipiscing elit</li>
            <li>Duis irure dolor reprehenderit voluptate</li>
            <li>Nemo enim ipsam voluptatem quia</li>
            <li>Sed perspiciatis iste natus error</li>
          </ul>
          <input type="submit" value="Choose Plan" />
        </div>
        <div className="three-cards-1">
          <h1>$150<span>/month</span></h1>
          <h2>Professional</h2>
          <p><span>Lorem ipsum dolor sit amet, consectetur</span></p>
          <hr />
          <ul>
            <li>Sed perspiciatis unde omnis natus error</li>
            <li>Lorem dolor consectetur adipiscing elit</li>
            <li>Duis irure dolor reprehenderit voluptate</li>
            <li>Nemo enim ipsam voluptatem quia</li>
            <li>Sed perspiciatis iste natus error</li>
          </ul>
          <input type="submit" value="Choose Plan" />
        </div>
      </div>
    </div>
  );
}



export function DownloadApp() {
  return (
    <div className="mob-links">
      <div>
        <img src="images/mobile.png" alt="mobile image" />
      </div>

      <div className="mob-links-content">
        <p style={{ color: 'rgb(116, 113, 113)' }}>Download App</p>
        <h1 style={{ fontWeight: 'bold', color: 'rgb(35, 34, 34)', paddingBottom: '50px' }}>
          We're available on mobile. Just download it!
        </h1>
        <p style={{ color: 'rgb(115, 111, 111)' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h4 style={{ color: 'rgb(38, 38, 89)' }}>Scan the QR code to get the app now</h4>
        <img src="images/scan-img.png" alt="scanner image" style={{ paddingBottom: '40px' }} />
        <div>
          <img src="images/appstore.svg" alt="appstore" />
          <img src="images/googleplay.svg" alt="googleplay" />
        </div>
      </div>
    </div>
  );
}




export function Testimonials() {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <p>Lorem ipsum dolor sit amet, consectetur elit</p>
      <div className="testi-cards">
        <div className="testi-block">
          {[...Array(6)].map((_, index) => (
            <div className="testi-card" key={index}>
              <h4>"Good Maintenance"</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
              <hr />
              <div className="img-name">
                <div>
                  <a href="#">
                    <img src="images/person.jpg" alt="Profile Picture" />
                  </a>
                </div>
                <div className="clint-name">
                  <h4>Nick John</h4>
                  <p><span>Developer</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export function Our_Recent_News_Blog() {
  return (
    <div className="blog-section">
      <div className="block-heading-name">
        <h1>Our Recent News & Blog</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>

      <div className="blog-cards">
        {[...Array(3)].map((_, index) => (
          <div className="blog-card" key={index}>
            <a href="#"><img src="images/car-wash.jpg" alt="Blog Image" /></a>
            <div>
              <div className="on-img" style={{ marginTop: '-220px' }}>25 <span>dec</span></div>
              <div className="below-img" style={{ marginTop: '205px' }}>
                <p>Hal Lewis</p>
                <div className="ver-line"></div>
                <p>Comments(5)</p>
              </div>
            </div>
            <a href="#"><h3>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod</h3></a>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, eaque ipsa</p>
          </div>
        ))}
      </div>

      <div id="partners">
        <div className="partner-head">
          <h1>Our Partners</h1>
          <p>Lorem ipsum dolor sit amet, consectetur elit</p>
        </div>
        <div className="partners-links">
          {['partner1', 'partner2', 'partner3', 'partner4', 'partner5'].map((partner, index) => (
            <a href="#" key={index}><img src={`images/${partner}.svg`} alt={partner} /></a>
          ))}
        </div>
      </div>
    </div>
  );
}


export function Free_Trial(){
  return (
    <div id="trail-block">
    <div>
     <h4>14 Days Free Trial</h4>
     <h1>We Are Offering 14 Days Free Trial</h1>
     <p>Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit, sed do eiusmod tempor incididunt
         <br/> ut labore et dolore minim veniam, quis nostrud 
          exercitation ullamco magna aliqua.</p>
          <input type="submit" value="Try 14 Days Free Trail"/>
    </div>
          <div>
            <img src="images/offer-img.png" alt="offer Image"/>
          </div>
 </div>
  );
}



export function Footer() {
  return (
    <section id="footer">
      <div className="foot-text">
        <a href="#" className="footer-logo"><img src="images/logo.png" alt="Footer Logo" /></a>
        <div className="contact-details">
          <div className="foot-tel">
            <p><i className="bi bi-telephone"></i> Tel <br />310-437-2766</p>
          </div>
          <div className="foot-mail">
            <p><i className="bi bi-envelope-at"></i> Email Address <br />truelysell@example.com</p>
          </div>
          <div className="foot-addr">
            <p><i className="bi bi-geo-alt"></i> Address <br />367 Hillcrest Lane, Irvine, California, United States</p>
          </div>
        </div>
      </div>
      <div>
        <p>Company</p>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Blog List</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
      </div>
      <div>
        <p>Quick Links</p>
        <ul>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Online Chat</a></li>
          <li><a href="#">Whatsapp</a></li>
          <li><a href="#">Telegram</a></li>
          <li><a href="#">Ticketing</a></li>
          <li><a href="#">Call Center</a></li>
        </ul>
      </div>
      <div>
        <p>Support</p>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Manage Deliveries</a></li>
          <li><a href="#">Orders</a></li>
          <li><a href="#">Payments</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <p>Instagram Feed</p>
        <div className="insta-pics">
          <div className="insta-pic">
            <a href="#"><img src="images/car-wash.jpg" alt="Car Wash" /></a>
            <a href="#"><img src="images/construction.jpg" alt="Construction" /></a>
            <a href="#"><img src="images/electrincal.jpg" alt="Electrical" /></a>
          </div>
          <div className="insta-pic">
            <a href="#"><img src="images/cleaning.jpg" alt="Cleaning" /></a>
            <a href="#"><img src="images/finance.jpg" alt="Finance" /></a>
            <a href="#"><img src="images/interior.jpg" alt="Interior" /></a>
          </div>
          <div className="insta-pic">
            <a href="#"><img src="images/house.jpg" alt="House" /></a>
            <a href="#"><img src="images/mechanic.jpg" alt="Mechanic" /></a>
            <a href="#"><img src="images/wood-worker.jpg" alt="Wood Worker" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}



export function Carousel() {
  const containerRef = useRef(null);
  const itemsRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollLeft = () => {
    if (containerRef.current && itemsRef.current) {
      const itemWidth = containerRef.current.offsetWidth;
      setScrollAmount(prev => {
        const newScrollAmount = Math.max(prev - itemWidth, 0);
        itemsRef.current.style.transform = `translateX(-${newScrollAmount}px)`;
        return newScrollAmount;
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current && itemsRef.current) {
      const itemWidth = containerRef.current.offsetWidth;
      setScrollAmount(prev => {
        const maxScroll = itemsRef.current.scrollWidth - itemWidth;
        const newScrollAmount = Math.min(prev + itemWidth, maxScroll);
        itemsRef.current.style.transform = `translateX(-${newScrollAmount}px)`;
        return newScrollAmount;
      });
    }
  };

  return (
    <div className="carousel-container" ref={containerRef}>
      <button onClick={scrollLeft}>Left</button>
      <div className="imgs-texts" ref={itemsRef}>
        {/* Your carousel items here */}
      </div>
      <button onClick={scrollRight}>Right</button>
    </div>
  );
}



export default Header;
