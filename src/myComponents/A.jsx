import { Link } from "react-router-dom";
import "./A.css";
import desertImage from "./images/premium_photo-1661962428918-6a57ab674e23.jpg";
// import "./ImageComponent.css";
import Logo from "./images/logo-removebg-preview.png";
import React, { useState } from "react";
// import Logo from "./images/logo-removebg-preview.png";
import jallianwalaBagh from "./images/hawa-mahal-6156123_640.jpg";
const A = () => {
  const places = [
    {
      name: "New Delhi",
      image:
        "https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg",
      link: "Delhi-NCR.php",
    },
    {
      name: "Shimla",
      image:
        "https://thumbs.dreamstime.com/b/khaliya-top-located-near-munsiyari-pithoragarh-district-uttarakhand-meandering-meadow-surrounded-snowy-peaks-249578436.jpg",
      link: "Himachal-Pradesh.php",
    },
    {
      name: "Agra",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/68/Taj_Mahal%2C_Agra%2C_India.jpg",
      link: "Agra-Uttar-Pradesh.php",
    },
    {
      name: "Kullu and Manali",
      image:
        "https://c8.alamy.com/comp/R93KP9/chaukori-hill-station-pithoragarh-district-garhwal-kumaon-uttar-pradesh-uttarakhand-india-asia-R93KP9.jpg",
      link: "Kullu-Manali-Himachal-Pradesh.php",
    },
    {
      name: "Mussoorie and Dehradun",
      image:
        "https://www.peakadventuretour.com/assets/imgs/uttarakhand-tourism-02.webp",
      link: "Mussoorie-Dehradun-Uttarakhand.php",
    },
    {
      name: "Dalhousie",
      image:
        "https://www.peakadventuretour.com/assets/imgs/uttarakhand-tourism-01.webp",
      link: "Dalhousie-Himachal-Pradesh.php",
    },
    {
      name: "Jim Corbett",
      image:
        "https://himalayanoutback.com/wp-content/uploads/2022/03/Jim-Corbett-National-Park-%E2%80%93-A-Comprehensive-Guide.jpeg",
      link: "Jim-Corbett-Uttarakhand.php",
    },
    {
      name: "Amritsar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAS5uiPHNbQ6-JcP_f10nVuuA_cC4kz4ipg&s",
      link: "Amritsar-Punjab.php",
    },
  ];
  const [activeTab, setActiveTab] = useState("north");
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="container10">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" />
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li className="dropdown">
              <span>Domestic</span>
              <div className="dropdown-menu">
                <Link to="/north">North</Link>
                <Link to="/west">West</Link>
                <Link to="/east">East</Link>
                <Link to="/south">South</Link>
              </div>
            </li>
            <li className="dropdown">
              <span>International</span>
              <div className="dropdown-menu">
                <Link to="/thailand">Thailand</Link>
                <Link to="/belgium">Belgium</Link>
                <Link to="/canada">Canada</Link>
                <Link to="/dubai">Dubai</Link>
                <Link to="/singapore">Singapore</Link>
                <Link to="/germany">Germany</Link>
                <Link to="/maldives">Maldives</Link>
                <Link to="/iceland">Iceland</Link>
                <Link to="/malaysia">Malaysia</Link>
                <Link to="/switzerland">Switzerland</Link>
                <Link to="/nepal">Nepal</Link>
                <Link to="/international-packages">View More</Link>
              </div>
            </li>
            <li className="dropdown">
              <span>Place</span>
              <div className="dropdown-menu">
                <Link to="/destinations">Destinations</Link>
                <Link to="/hotels">Hotels</Link>
                <Link to="/gallery">Gallery</Link>
              </div>
            </li>
            <li className="dropdown">
              <span>Packages</span>
              <div className="dropdown-menu">
                <Link to="/domestic-packages">Domestic Packages</Link>
                <Link to="/international-packages">International Packages</Link>
              </div>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <a href="tel:+918506922777">+91-8506922777</a>
            </li>
            <li>
              <Link to="/payment">PAY NOW</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Image Section */}
      <div className="image-container">
        <img src={desertImage} className="styled-image" alt="Desert Scene" />
        <div className="overlay">
          <h1>Welcome to Jingle Holiday Bazar Pvt Ltd.</h1>
          <p>Rajasthan</p>
          <button className="contact-btn">Contact</button>
        </div>
      </div>

      {/* OUR SERVICES Section */}
      <section id="header" className="jumbotron text-center">
        <h3 className="display-5">OUR SERVICES</h3>
        <p className="lead">
          At Jingle Holiday Bazar, we are committed to ensuring that you save on
          every trip and every holiday
          <br />
          booking you make with us by bringing to you the best price deals; be
          it flights, tours or hotels. Our unique budget
        </p>
      </section>

      <section id="gallery">
        <div className="container">
          <div className="row">
            {/* Homestays Card */}
            <div className="card-container">
              <div className="icon">
                <i className="fa fa-home"></i>
              </div>
              <h5>Jingle Holiday Bazar Homestays</h5>
              <h6>Book Villas, Apartments and Resorts</h6>
              <p>
                Jingle Holiday Bazar.com ventured into Homestays in India in
                2015, and is providing great homestay experiences to its
                customers.
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>

            {/* Hotels Card */}
            <div className="card-container">
              <div className="icon">
                <i className="fa fa-bed"></i>
              </div>
              <h5>Jingle Holiday Bazar Hotels</h5>
              <h6>Book Hotels with Jingle Holiday Bazar.com</h6>
              <p>
                We are back in the post-pandemic world with a bouquet of hotels
                across Indian cities.
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>

            {/* Flights Card */}
            <div className="card-container">
              <div className="icon">
                <i className="fa fa-plane"></i>
              </div>
              <h5>Jingle Holiday Bazar Flights</h5>
              <h6>Why to book Flights Online with Jingle Holiday Bazar.com</h6>
              <p>
                Purchasing flight tickets and confirming your flight booking is
                the key aspect of planning a trip.
              </p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* Header Section */}
        <section id="header">
          <h3>POPULAR DESTINATION IN INDIA</h3>
          <p>
            India is a vibrant land of startling contrasts where both the
            traditional and modern worlds meet.
            <br />
            The world's seventh largest nation by area and the second largest in
            terms of population, India boasts a rich
            <br />
            heritage that's the result of centuries of different cultures and
            religions leaving their mark.
          </p>
        </section>

        {/* Image Section */}
        <div className="container">
          <div className="column">
            {/* First Image */}
            <div className="image flex-1">
              <a href="Punjab-Tour-packages.php">
                <img
                  src="https://media.istockphoto.com/id/2096182308/photo/amritsar-by-night.jpg?s=2048x2048&w=is&k=20&c=DZ7RbvCCJqS27O9PDuY2i1gAmL3U6ptzomXAWzg1An0="
                  alt="Amritsar, Punjab"
                  style={{
                    height: "100%",
                  }}
                />
              </a>
              <div className="caption">Amritsar, Punjab</div>
            </div>
          </div>

          <div className="column">
            {/* Second Image */}
            <div className="image">
              <a href="tour.php">
                <img
                  src="https://media.istockphoto.com/id/1837972754/photo/golden-temple-amritsar.jpg?s=2048x2048&w=is&k=20&c=0S2Wep5-eP5743HHCOinJN6gJwzAUDWHult2p7Cv7iU="
                  alt="Gangtok, Sikkim"
                />
              </a>
              <div className="caption">Gangtok, Sikkim</div>
            </div>

            {/* Third Image */}
            <div className="image">
              <a href="Uttar-pradesh-Tour-packages.php">
                <img
                  src="https://i0.wp.com/oneday.tours/wp-content/uploads/one-day-amritsar-local-sightseeing-tour-package-private-cab-header-v2.jpg?w=1920&ssl=1"
                  alt="Agra, Uttar Pradesh"
                />
              </a>
              <div className="caption">Agra, Uttar Pradesh</div>
            </div>
          </div>
        </div>
      </div>
      <section id="header" className="jumbotron text-center">
        <h3 className="display-5">POPULAR DESTINATION INTERNATIONAL</h3>
        <p className="lead">
          Mother Earth along with mankind have co-created some of the most
          spectacular places on this planet. <br /> From sprawling cities to
          spectacular national parks, it is hard to keep your bucket list
          stagnant. Keeping in mind <br /> iconic attractions, culture, food,
          and ease of travel, these are the best places in the world to visit!
        </p>
      </section>

      <div className="destination-container">
        <div className="destination-row">
          {/* Dubai Image */}
          <div className="destination-col big">
            <a href="Dubai-Tour-Packages.php">
              <img
                src="https://media.istockphoto.com/id/1453583308/photo/dubai-downtown-at-twilight.jpg?s=612x612&w=0&k=20&c=-VQ_gcI3kxrtfS-IJtGv1buaePpzOOBuksn0xjtruaI="
                alt="Dubai"
                className="destination-image"
                style={{
                  height: "100%",
                }}
              />
            </a>
            <div className="destination-caption">DUBAI</div>
          </div>

          {/* Sydney & Singapore Images */}
          <div className="destination-col small">
            <div className="destination-box">
              <a href="Australia-Tour-Packages.php">
                <img
                  src="https://www.curiousgoosetravel.com/wp-content/uploads/2023/07/6262bd_c26714b4525c439db96c8c876676f5e3mv2.jpg"
                  alt="Sydney"
                  className="destination-image small-img"
                  style={{
                    height: "90%",
                  }}
                />
              </a>
              <div className="destination-caption">SYDNEY</div>
            </div>
            <div className="destination-box">
              <a href="Singapore-Tour-Packages.php">
                <img
                  src="https://as2.ftcdn.net/jpg/02/94/27/73/1000_F_294277354_ev3qw00wjlHAfhqRdEozsrVRpbhixC3S.jpg"
                  alt="Singapore"
                  className="destination-image small-img"
                  style={{
                    height: "90%",
                  }}
                />
              </a>
              <div className="destination-caption">SINGAPORE</div>
            </div>
          </div>
        </div>
      </div>
      <section id="header" className="header-section">
        <div className="content-wrapper">
          <h3 className="title">FEATURED TOURS IN INDIA</h3>
          <p className="description">
            India is a vibrant land of startling contrasts where both the
            traditional and modern worlds meet.
            <br /> The world's seventh largest tourist nation by area and the
            second largest in terms of population.
          </p>
        </div>
      </section>
      <div className="tours-container">
        <div className="tours-row">
          <div className="tours-column">
            <div className="tour-card">
              <a href="Ladakh-Tour-Packages.php">
                <img
                  src="https://www.lehladakhindia.com/wp-content/uploads/2024/07/thiksey-gompa.jpeg"
                  alt="Thiksey Monastery"
                  className="tour-image"
                />
              </a>
              <h3 className="tour-title">
                <a href="Ladakh-Tour-Packages.php">Week At Thiksey Monastery</a>
              </h3>
              <p className="tour-description">
                This 12-storey complex hosts over 500 monks and is considered to
                be one of the most beautiful Buddhist monasteries in all of
                Ladakh.
              </p>
              <p className="tour-link">
                <a href="https://wa.link/9hwu05">WhatsApp Now More Details</a>
              </p>
            </div>
          </div>

          <div className="tours-column">
            <div className="tours-row">
              <div className="tours-column">
                <div className="tour-card">
                  <a href="Himachal-Tour-Packages.php">
                    <img
                      src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/02/Himachal-Pradesh-in-March-1.webp?resize=1536%2C864&ssl=1"
                      alt="Solang Valley"
                      className="tour-image"
                    />
                  </a>
                  <h3 className="tour-title">
                    <a href="Himachal-Tour-Packages.php">
                      Week At Solang Valley, Manali
                    </a>
                  </h3>
                  <p className="tour-description">
                    A mini valley located at about 8400 feet above sea level,
                    Solang Nala is a short drive away from Manali.
                  </p>
                  <p className="tour-link">
                    <a href="https://wa.link/9hwu05">Contact</a>
                  </p>
                </div>
              </div>
              <div className="tours-column">
                <div className="tour-card">
                  <a href="Goa-Tour-Packages.php">
                    <img
                      src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1400&h=1400&s=1"
                      alt="Goa Beach"
                      className="tour-image"
                    />
                  </a>
                  <h3 className="tour-title">
                    <a href="Goa-Tour-Packages.php">Week At Beach in Goa</a>
                  </h3>
                  <p className="tour-description">
                    Goa is the smallest state in India, Goa is synonymous to
                    many captivating things.
                  </p>
                  <p className="tour-link">
                    <a href="https://wa.link/9hwu05">Contact</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="header" className="jumbotron text-center">
        <h3 className="display-5">Gallery</h3>
        <p className="lead">
          At Jingle Holiday Bazar All Over India Destination Gallery
        </p>
      </section>
      <div className="tabs-container">
        {/* Tab Buttons */}
        <div className="tabs">
          <button
            className={activeTab === "north" ? "tab active" : "tab"}
            onClick={() => setActiveTab("north")}
          >
            NORTH INDIA
          </button>
          <button
            className={activeTab === "east" ? "tab active" : "tab"}
            onClick={() => setActiveTab("east")}
          >
            EAST INDIA
          </button>
          <button
            className={activeTab === "west" ? "tab active" : "tab"}
            onClick={() => setActiveTab("west")}
          >
            WEST INDIA
          </button>
          <button
            className={activeTab === "south" ? "tab active" : "tab"}
            onClick={() => setActiveTab("south")}
          >
            SOUTH INDIA
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "north" && (
            <div className="tab-panel">North India Content Goes Here...</div>
          )}
          {activeTab === "east" && (
            <div className="tab-panel">East India Content Goes Here...</div>
          )}
          {activeTab === "west" && (
            <div className="tab-panel">West India Content Goes Here...</div>
          )}
          {activeTab === "south" && (
            <div className="tab-panel">South India Content Goes Here...</div>
          )}
        </div>
      </div>

      <div className="places-container">
        <div className="places-grid">
          {places.map((place, index) => (
            <div key={index} className="place-card">
              <a href={place.link}>
                <img
                  className="place-image"
                  src={place.image}
                  alt={place.name}
                />
                <p className="place-name">{place.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <section id="header" className="jumbotron text-center">
        <h3 className="display-5 mt-5">POPULAR HOTELS</h3>
        <p className="lead">
          At Jingle Holiday Bazar Provide Best Hotel Facility National And
          International
        </p>
      </section>

      <div className="container">
        <div className="row">
          <div className="left-column">
            <div className="hotel-item">
              <a href="tour.php">
                <img
                  src="https://cdn.sanity.io/images/ocl5w36p/prod3/fc3eee692ebbfd03bd99149ac9add3c924eb91fc-1920x930.jpg?w=480&auto=format&dpr=2"
                  alt="Taj Aravali Resort & Spa"
                />
              </a>
            </div>
            <div className="hotel-info">
              <h3>Taj Aravali Resort & Spa</h3>
              <p>
                Prices for Taj Aravali Resort and Spa one of the best hotels in
                India, starts at ₹ 12999+ per night
              </p>
            </div>

            <div className="hotel-item">
              <a href="tour.php">
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/178625112.jpg?k=4a8700113a4f5790af3fcc51c92441938d0a333fe7710cbf4c6a5b19ef7a06d8&o=&hp=1"
                  alt="Hotel Mountain face"
                />
              </a>
            </div>
            <div className="hotel-info">
              <h3>Hotel Mountain face by Snow City Hotels</h3>
              <p>
                Set in Manāli Hotel Mountain face by Snow City Hotels offers
                accommodation with a restaurant, free private parking, a shared
                lounge and a garden. ₹ 1,440+ per night
              </p>
            </div>
          </div>

          <div className="right-column">
            <div className="hotel-item">
              <a href="tour.php">
                <img
                  src="https://www.momondo.in/himg/03/bc/85/leonardo-2093503-Glass_Box_Suite_-_Master_Bedroom_O-360050.jpg"
                  alt="Hideout Premiere"
                />
              </a>
            </div>
            <div className="hotel-info">
              <h3>Hideout Premiere</h3>
              <p>
                Hideout Resorts is a collection of elegantly designed hotels and
                resorts in Goa that aim to give our guests the opportunity to
                enjoy Goa in all her glory. Whether it's the beaches ₹ 4499+
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="widgets-section">
        <div className="container-fluid">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-7">
                  <div className="footer-widget">
                    <div className="logo">
                      <h2>
                        <a href="#" className="text-white">
                          Jingle Holiday Bazar
                        </a>
                      </h2>
                      <p>Travel with us from here to anywhere...</p>
                    </div>

                    <ul className="footer-info">
                      <li>
                        <i className="fa fa-phone"></i> Phone:
                        <br />
                        <a
                          className="aboutus text-white"
                          href="https://wa.link/9hwu05"
                        >
                          +91 8506922777
                        </a>{" "}
                        /
                        <a
                          className="aboutus text-white"
                          href="https://api.whatsapp.com/send?phone=8506944777&text=Hello,%20I%20want%20more%20info%20about%20the%20your%20tours%20plane...?"
                        >
                          +91 8506944777
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>
                        <a
                          className="aboutus text-white"
                          href="mailto:jingleholidaybazar@gmail.com"
                        >
                          jingleholidaybazar@gmail.com
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-envelope-o"></i>
                        <a
                          className="aboutus text-white"
                          href="mailto:thejingleholidaybazar@gmail.com"
                        >
                          thejingleholidaybazar@gmail.com
                        </a>
                      </li>
                      <p>
                        <i className="fa fa-phone"></i> 24/7 Dedicated Customer
                        Support
                      </p>
                    </ul>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="col-lg-5">
                  <div className="footer-widget">
                    <h2>Quick Links</h2>
                    <ul className="list">
                      <li>
                        <a href="index.php">Home</a>
                      </li>
                      <li>
                        <a href="about.php">About Us</a>
                      </li>
                      <li>
                        <a href="#">Blog List</a>
                      </li>
                      <li>
                        <a href="destinations.php">Destinations</a>
                      </li>
                      <li>
                        <a href="hotel.php">Hotels</a>
                      </li>
                      <li>
                        <a href="gallery.php">Gallery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-7">
              <div className="row">
                {/* Domestic Packages */}
                <div className="col-lg-4">
                  <div className="footer-widget">
                    <h2>
                      <a
                        href="domestic-package-service.php"
                        className="text-white"
                      >
                        Domestic Packages
                      </a>
                    </h2>
                    <ul className="list">
                      <li>
                        <a href="Uttarakhand-Tour-Packages.php">Uttarakhand</a>
                      </li>
                      <li>
                        <a href="Mumbai-Tour-Packages.php">Mumbai</a>
                      </li>
                      <li>
                        <a href="Ladakh-Tour-Packages.php">Ladakh</a>
                      </li>
                      <li>
                        <a href="Meghalaya-Tour-Packages.php">Meghalaya</a>
                      </li>
                      <li>
                        <a href="North-east-india-Tour-Packages.php">
                          North East India
                        </a>
                      </li>
                      <li>
                        <a href="Rajasthan-Tour-Packages.php">Rajasthan</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* International Packages */}
                <div className="col-lg-4">
                  <div className="footer-widget">
                    <h2>
                      <a
                        href="international-package-service.php"
                        className="text-white"
                      >
                        International Packages
                      </a>
                    </h2>
                    <ul className="list">
                      <li>
                        <a href="Maldives-Tour-Packages.php">Maldives</a>
                      </li>
                      <li>
                        <a href="Singapore-Tour-Packages.php">Singapore</a>
                      </li>
                      <li>
                        <a href="Switzerland-Tour-Packages.php">Switzerland</a>
                      </li>
                      <li>
                        <a href="Saudi-Arabia-Tour-Packages.php">
                          Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="Thailand-Tour-Packages.php">Thailand</a>
                      </li>
                      <li>
                        <a href="Dubai-Tour-Packages.php">Dubai</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Yatra Section */}
                <div className="col-lg-4">
                  <div className="footer-widget">
                    <h2>
                      <a href="#" className="text-white">
                        Yatra
                      </a>
                    </h2>
                    <ul className="list">
                      <li>
                        <a href="Mata-Vaishno-Devi-Tour-Packages.php">
                          Mata Vaishno
                        </a>
                      </li>
                      <li>
                        <a href="Kedarnath-Tour-Packages.php">Kedarnath</a>
                      </li>
                      <li>
                        <a href="Badrinath-Tour-Packages.php">Badrinath</a>
                      </li>
                      <li>
                        <a href="Char-Dham-Yatra-Tour-Packages.php">
                          Char Dham Yatra
                        </a>
                      </li>
                      <li>
                        <a href="Ramayana-Tour-Packages.php">Ramayana Yatra</a>
                      </li>
                      <li>
                        <a href="9-Devi-Tour-Packages.php">9 Devi Yatra</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <p>
                Powered By |{" "}
                <a href="https://namratauniversal.com/">Bora.....</a> | All
                Rights are Reserved by Jingleholidaybazar
              </p>
            </div>
            <div className="footer-right">
              <ul className="social-icons">
                <li>
                  <a href="https://m.facebook.com/jingleholidaybazar">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default A;
