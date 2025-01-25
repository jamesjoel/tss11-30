import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../public/assets/css/wave-bsb.css";

const Welcome = () => {
  let base_url = "http://localhost:3000"
  let [singleState, setSingleState] = useState("")
  let [stateNames, setStateNames] = useState([]);
  let [cityNames, setCityNames] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/getstate").then((response)=>{
      setStateNames(response.data)
    })
  })
  
let getState = (e)=>{
  let x = e.target.value
  axios.get(`${base_url}/getcity/${x}`).then(response=>{
    console.log(response.data);
    setCityNames(response.data)
  })
}
  return (
    <>
      <section
        id="scrollspyHero"
        className="bsb-hero-2 bsb-tpl-bg-blue py-5 py-xl-8 py-xxl-10"
      >
        <div className="container overflow-hidden">
          <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <div className="col-12 col-lg-6 order-1 order-lg-0">
              <h1 className="display-3 fw-bolder mb-3">
                We provide easy <br />
                <mark className="bsb-tpl-highlight bsb-tpl-highlight-blue">
                  <span className="bsb-tpl-font-hw display-2 text-accent fw-normal">
                    solutions
                  </span>
                </mark>{" "}
                for startups at affordable rates.
              </h1>
              <p className="fs-4 mb-5">
                Our methods are straight, comfortable, and established to ensure
                evolution and acceleration.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <button
                  type="button"
                  className="btn btn-primary bsb-btn-3xl rounded-pill"
                >
                  Free Consultation
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary bsb-btn-3xl rounded-pill"
                >
                  Buy Credits
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center">
              <img
                className="img-fluid"
                loading="lazy"
                src="./assets/img/hero/hero-home.jpg"
                alt=""
                style={{
                  WebkitMaskImage: "url(./assets/img/hero/hero-blob-1.svg)",
                  maskImage: "url(./assets/img/hero/hero-blob-1.svg)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section
          id="scrollspyServices"
          className="py-5 py-xl-8 bsb-section-py-xxl-1"
        >
          <div className="container mb-5 mb-md-6 mb-xl-10">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
                <h2 className="display-3 fw-bolder mb-4">
                  We reach any city to provide <br />
                  perfect{" "}
                  <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow">
                    <span className="bsb-tpl-font-hw display-1 text-accent fw-normal">
                      resolutions
                    </span>
                  </mark>{" "}
                  with our proficient services.
                </h2>
              </div>
            </div>
          </div>

          <div className="container overflow-hidden">
            <div className="row justify-content-center">
              <div className="col-11 col-sm-6 col-lg-3">
                <form className="inquiryform">
                  <div className="form-group">
                    <label>Select State</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      // value={singleState}
                      onChange={(e)=>getState(e)}
                    >
                      <option>Select</option>
                      {stateNames.map((item) => (
                        <option>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Select City</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      <option>Select</option>
                      {cityNames.map((item) => (
                        <option>{item.name}</option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
              {/* <div className="col-11 col-sm-6 col-lg-3">
                <div className="badge bsb-tpl-bg-green text-primary p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-aspect-ratio"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
                    <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z" />
                  </svg>
                </div>
                <h4 className="mb-3">Web Design</h4>
                <p className="mb-3 text-secondary">
                  We can help you to create a visually appealing and
                  user-friendly website. We take into account your brand
                  identity and target audience when designing your website.
                </p>
                <a
                  href="#!"
                  className="fw-bold text-decoration-none link-primary"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
              <div className="col-11 col-sm-6 col-lg-3">
                <div className="badge bsb-tpl-bg-pink text-primary p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-airplane-engines"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                  </svg>
                </div>
                <h4 className="mb-3">SEO Services</h4>
                <p className="mb-3 text-secondary">
                  We can help you to improve your website's visibility in search
                  engine results pages (SERPs). This can lead to more traffic to
                  your website and more conversions.
                </p>
                <a
                  href="#!"
                  className="fw-bold text-decoration-none link-primary"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div>
              <div className="col-11 col-sm-6 col-lg-3">
                <div className="badge bsb-tpl-bg-cyan text-primary p-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-alarm"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                  </svg>
                </div>
                <h4 className="mb-3">Content Marketing</h4>
                <p className="mb-3 text-secondary">
                  We can help you to promote your business online through a
                  variety of digital marketing channels, including SEO, PPC,
                  social media marketing, and email marketing.
                </p>
                <a
                  href="#!"
                  className="fw-bold text-decoration-none link-primary"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </a>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Welcome;
