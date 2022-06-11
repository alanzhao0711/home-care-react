import React from 'react'

export default function home() {
  return (
    <React.Fragment>
    <section id="nav-bar">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/#"
            ><img src="images/logo.png" alt=""
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="/#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="nav-bar-links/about-us.html"
                  >About Us</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="nav-bar-links/home-care.html"
                  >Home Care</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="nav-bar-links/resources.html"
                  >Resources</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="nav-bar-links/careers.html"
                  >Careers</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>

    {/* <!-----------------banner sections------------------------------> */}
    <section id="banner">
      <div class="float-container">
        <div class="float-child">
          <h1 class="start-title">Your Family is Our Family</h1>
          <p class="h3">
            Our professional care teams, each led by a Registered Nurse, deliver
            expert, compassionate, and personal care.
          </p>
          <a
            href="nav-bar-links/careers.html"
            type="button"
            class="btn btn-danger btn-lg"
            >JOIN US</a
          >
        </div>
        <div class="float-child">
          <img src="images/home_page.jpg" alt="" />
        </div>
      </div>
      <svg
        id="wave"
        style={{transform: "rotate(0deg)", transition: "0.3s"}}
        viewBox="0 0 1440 140"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
            <stop
              stop-color="rgba(253.008, 253.008, 253.008, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{transform: "translate(0, 0px)", opacity: "1"}}
          fill="url(/#sw-gradient-0)"
          d="M0,126L30,107.3C60,89,120,51,180,44.3C240,37,300,61,360,79.3C420,98,480,112,540,100.3C600,89,660,51,720,46.7C780,42,840,70,900,72.3C960,75,1020,51,1080,42C1140,33,1200,37,1260,37.3C1320,37,1380,33,1440,44.3C1500,56,1560,84,1620,88.7C1680,93,1740,75,1800,72.3C1860,70,1920,84,1980,77C2040,70,2100,42,2160,35C2220,28,2280,42,2340,42C2400,42,2460,28,2520,39.7C2580,51,2640,89,2700,91C2760,93,2820,61,2880,39.7C2940,19,3000,9,3060,16.3C3120,23,3180,47,3240,53.7C3300,61,3360,51,3420,42C3480,33,3540,23,3600,37.3C3660,51,3720,89,3780,88.7C3840,89,3900,51,3960,49C4020,47,4080,79,4140,91C4200,103,4260,93,4290,88.7L4320,84L4320,140L4290,140C4260,140,4200,140,4140,140C4080,140,4020,140,3960,140C3900,140,3840,140,3780,140C3720,140,3660,140,3600,140C3540,140,3480,140,3420,140C3360,140,3300,140,3240,140C3180,140,3120,140,3060,140C3000,140,2940,140,2880,140C2820,140,2760,140,2700,140C2640,140,2580,140,2520,140C2460,140,2400,140,2340,140C2280,140,2220,140,2160,140C2100,140,2040,140,1980,140C1920,140,1860,140,1800,140C1740,140,1680,140,1620,140C1560,140,1500,140,1440,140C1380,140,1320,140,1260,140C1200,140,1140,140,1080,140C1020,140,960,140,900,140C840,140,780,140,720,140C660,140,600,140,540,140C480,140,420,140,360,140C300,140,240,140,180,140C120,140,60,140,30,140L0,140Z"
        ></path>
      </svg>
    </section>

    {/* <!-----------------Home Care Services------------------------------> */}
    <section id="services">
      <div class="container text-center">
        <h1 class="title">Our Home Care Services</h1>
        <p id="title-p">
          Evergreen Home care delivers the perfect level of care for your loved
          one's personal and medical needs - from daily care to special care
        </p>
        <div class="row text-center">
          <div class="col-md-4">
            <a href="/#"
              ><img src="images/personal care.png" class="service-img" alt='map'
            /></a>
            <h4>Personal Care</h4>
            <p id="service-p">
              We are ready to assit with any personal care needs -- bathing,
              grooming, eating, and more
            </p>
          </div>
          <div class="col-md-4">
            <a href="/#"
              ><img src="images/transitional care.png" class="service-img" alt='map'
            /></a>
            <h4>Transitional Care</h4>
            <p id="service-p">
              Optimize recovery and enjoy free transportation from the hospital
            </p>
          </div>
          <div class="col-md-4">
            <a href="/#"
              ><img src="images/medicaiton.png" class="service-img" alt='map'
            /></a>
            <h4>Medication Management</h4>
            <p id="service-p">
              We will ensure your loved one stays healthy and safe with their
              medications.
            </p>
          </div>
        </div>
        <a href="/" type="button" class="btn btn-danger btn-lg">View All</a>
      </div>
    </section>

    {/* <!-----------------Get Started------------------------------> */}

    <section id="get-started">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-5">
            <img src="images/get_started.jpg" class="get-started-img" alt="" />
          </div>
          <div class="col-md-7 text-lg-start">
            <h2>How do I get started?</h2>
            <p>
              The search for a home nursing agency is often new to families who
              need it? Thats' why we are here to help, call us through
              <span style={{color: "red"}}>312-877-5311</span> or contact us below.
            </p>
            <a href="/" type="button" class="btn btn-danger btn-lg"
              >Get Started !</a
            >
          </div>
        </div>
      </div>
    </section>

    {/* <!-----------------about us and our story------------------------------> */}

    <section id="story">
      <div class="container text-center">
        <h1>The Start of Evergreen Home Care Story</h1>
        <p id="title-p">
          When we needed care for our loved one, we couldn't find the right mix
          of expertise, flexibility, and compassion that we wanted and they
          deserved. So we founded Evergreen Home Care
        </p>
        <a
          href="nav-bar-links/about-us.html"
          type="button"
          class="btn btn-danger btn-lg"
          >Learn More About Evergreen</a
        >
        <div class="row">
          <div class="col-md-5">
            <iframe
            title='map'
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d185.74183725955314!2d-87.63450292669056!3d41.8526378713145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c61725beb05%3A0x723dcb6d8fbad401!2s265%20W%20Cermak%20Rd%2C%20Chicago%2C%20IL%2060616!5e0!3m2!1sen!2sus!4v1653634989979!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{border: "0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="col-md-7">
            <h2>About the Office</h2>
            <p id="story-p">
              Evergreen Home Care was established in 2021 to help and advocate
              for better home care services in the Chinatown area. We are
              located at the heart of Chinatown, below Jaslin Hotel. About 5
              minutes walk from the nearest red-line stations and multiple bus
              stop nearby.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <!-----------------testimonials------------------------------> */}

    <section id="testimonials">
      <div class="container">
        <h1 class="title text-center">What Our Client Say</h1>
        <div class="row">
          <div id="test-p" class="col-md-6 testimonials">
            <p>
              It is more than what I can say Thanks to Evergreen Home Care. I
              have moved to Denver last year and I'm always concern of my Mom,
              YanQin because she doesn't speak English. But luckily, I've found
              Evergreen Home Care, they helped me arrange all the necessary care
              for my mom and help her find a caregiver that speaks Chinese.
            </p>
            <p>David L.</p>
          </div>
          <div id="test-p" class="col-md-6 testimonials">
            <p>
              Evergreen Home Care helps me take care of all the transportation
              and translation needed for my mom during hospital. They are by far
              the most welcoming home care provided I've seen.
            </p>
            <p>ZhongYi M.</p>
          </div>
        </div>
      </div>
    </section>

    {/* <!-----------------bottom-page------------------------------> */}

    <section id="bottom-page">
      <div class="container">
        <div class="row">
          <div id="bottom-link" class="col-md-4">
            <h6>Home Care</h6>
            <p><a href="/#">Personal Care</a></p>
            <p><a href="/#">Respite Care</a></p>
            <p><a href="/#">Transitional Care</a></p>
            <p><a href="/#">Child Care</a></p>
            <p><a href="/#">Types of Care</a></p>
          </div>
          <div id="bottom-link" class="col-md-4">
            <h6>Resources</h6>
            <p><a href="/#">FAQ</a></p>
            <p><a href="/#">Medical Resources</a></p>
          </div>

          <div id="bottom-link" class="col-md-4">
            <h6>About Evergreen</h6>
            <p><a href="/#">About Us</a></p>
            <p><a href="/#">Careers</a></p>
            <p><a href="/#">Contact Us</a></p>
            <p><a href="/#">Office Location</a></p>
          </div>
        </div>
      </div>
    </section>

    {/* <!-----------------all right reserved------------------------------> */}

    <section id="right">
      <div class="text-center">
        <p>&copy 2022 Evergreen Home Care. All rights reserved.</p>
      </div>
    </section>
    </React.Fragment>
  )
}
