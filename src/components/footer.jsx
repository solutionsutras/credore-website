import React, { useState } from "react";
import Link from "next/link";
import Form from "./RequestModal";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="linksSectn">
          <div className="quickLinks">
            <div className="heading">Quick Links</div>
            <ul className="linksBx">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Vulnerability Disclosure</a>
              </li>
              <li>
                <a href="#">Accessibliity</a>
              </li>
            </ul>
          </div>
          <div className="solutionsLinks">
            <div className="heading">Solutions</div>
            <ul className="linksBx">
              <li>
                <a href="#">Lorem Ipsum is simply dummy</a>
              </li>
              <li>
                <a href="#">It is a long established fact</a>
              </li>
              <li>
                <a href="#">that a reader will be distracted</a>
              </li>
              <li>
                <a href="#">by the readable content </a>
              </li>
              <li>
                <a href="#">page when looking at its</a>
              </li>
            </ul>
          </div>
          <div className="readyToGoBx">
            <div className="heading">Ready To Go Truly Paperless?</div>
            <p>
              Get a free personalised demo and see how easy it to manage your
              paperless trade finance.
            </p>
            <div>
              <button
                className="ml-3 p-4 py-1 text-sm flex-shrink-0 text-white bg-[#f15928] font-medium text-xsm"
                type="button"
                onClick={openModal}
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="receiveUpdates flex items-center gap-4 py-4 justify-center">
            Receive Updates and News from Credore
            <input
              type="text"
              class="p-2 py-1 border-1 md:round border-[#F15928] outline-none text-sm br-5"
              placeholder="Enter Your Email"
              value=""
            />
            <button class="px-4 py-1 text-sm flex-shrink-0 text-F15928 bg-[#FFF]" type="submit">Subscribe</button>
          </div>
        </div>

        <div className="copyrightSectn">
          <div>&#169; Copyright 2023 Credore - All rights Reserved</div>
          <div className="mediaLinks items-center">
            <ul className="otherLinks">
              <li>
                <a href="#">Status</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
            </ul>
            <ul className="socialMediaLinks">
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="assets/images/linkedin-logo.png"
                      alt="linkedin-logo"
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="assets/images/twitter-logo.png"
                      alt="twitter-logo"
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="assets/images/youtube-logo.png"
                      alt="youtube-logo"
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
              <li>
                <a href="#">
                  <figure>
                    <img
                      src="assets/images/facebook-logo.png"
                      alt="facebook-logo"
                      className="img-responsive"
                    />
                  </figure>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Form isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
    </footer>
  );
}

export default Footer;
