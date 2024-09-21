import React from 'react';

const Contact = () => {
  return (
    <>
      {/* <header id="site-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand fw-bold" href="index.html">BS-01</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">404 Page</a></li>
                    <li><a className="dropdown-item" href="#">Common Page</a></li>
                    <li><a className="dropdown-item" href="#">FAQ Page</a></li>
                    <li><a className="dropdown-item" href="#">Hero Page</a></li>
                    <li><a className="dropdown-item" href="portfolios.html">Portfolio Page</a></li>
                    <li><a className="dropdown-item" href="#">Single Page</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Contact</a>
                </li>
              </ul>
              <div className="d-flex">
                <button
                  className="btn btn-sm btn-outline-light"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <i className="fa-solid fa-magnifying-glass"></i> Search
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div
          className="offcanvas offcanvas-top"
          tabIndex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div className="container pt-5">
            <div className="offcanvas-header">
              <h2 className="fw-bold pb-3">Search here</h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <form className="position-relative" action="#" method="post">
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Examples: posts, services,.."
                />
                <button
                  className="position-absolute top-0 end-0 border-0 bg-transparent py-2 pe-2 text-secondary"
                  type="submit"
                  name="search"
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header> */}

      <section className="mt-5">
        <div className="bg-light py-5">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h1 className="fw-bold">Contact us</h1>
              <nav
                className="pt-3"
                style={{ "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")` }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6">
              <div className="row row-cols-md-2 g-4">
                <div className="aos-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-envelope h3 pe-2"></i>
                        <span className="h5">Email</span>
                      </div>
                      <span>example@domain.com</span>
                    </div>
                  </div>
                </div>
                <div className="aos-item" data-aos="fade-up" data-aos-delay="400">
                  <div className="aos-item__inner">
                    <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                      <div className="d-flex justify-content-start">
                        <i className="fa-solid fa-phone h3 pe-2"></i>
                        <span className="h5">Phone</span>
                      </div>
                      <span>+0123456789, +9876543210</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aos-item mt-4" data-aos="fade-up" data-aos-delay="600">
                <div className="aos-item__inner">
                  <div className="bg-light hvr-shutter-out-horizontal d-block p-3">
                    <div className="d-flex justify-content-start">
                      <i className="fa-solid fa-location-pin h3 pe-2"></i>
                      <span className="h5">Office location</span>
                    </div>
                    <span>#007, Street name, Bigtown BG23 4YZ, England</span>
                  </div>
                </div>
              </div>
              <div className="aos-item" data-aos="fade-up" data-aos-delay="800">
                <div className="mt-4 w-100 aos-item__inner">
                  <iframe
                    className="hvr-shadow"
                    width="100%"
                    height="345"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a>
                  </iframe>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <h2 className="pb-4">Leave a message</h2>
              <div className="row g-4">
                <div className="col-6 mb-3">
                  <label htmlFor="fname" className="form-label">Fname</label>
                  <input type="text" className="form-control" id="fname" placeholder="John" />
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="lname" className="form-label">Lname</label>
                  <input type="text" className="form-control" id="lname" placeholder="Doe" />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="example@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
