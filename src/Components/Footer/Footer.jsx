/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="amazon-footer">
      <div className="amazon-footer-container">
        <div className="amazon-footer-lists">
          <div className="amazon-row">
            <div className="amazon-col  amazon-col--30">
              <a href="/" className="amazon-footer-logo">
                <img
                  src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
                  alt="Amazon Logo"
                  className="amazon-footer-logo-image"
                />
              </a>
            </div>
            <div className="amazon-col  amazon-col--20">
              <h4 className="amazon-footer-title">Get to Know Us</h4>
              <ul className="amazon-footer-list">
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Careers
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Blog
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    About Amazon
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Investor Relations
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Amazon Devices
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Amazon Science
                  </a>
                </li>
              </ul>
            </div>
            <div className="amazon-col  amazon-col--20">
              <h4 className="amazon-footer-title">Amazon Payment Products</h4>
              <ul className="amazon-footer-list">
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Amazon Business Card
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Shop with Points
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Reload Your Balance
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Amazon Currency Converter
                  </a>
                </li>
              </ul>
            </div>
            <div className="amazon-col  amazon-col--20">
              <h4 className="amazon-footer-title">Make Money with Us</h4>
              <ul className="amazon-footer-list">
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Sell products on Amazon
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Sell on Amazon Business
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Sell apps on Amazon
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Become an Affiliate
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Advertise Your Products
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Self-Publish with Us
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Host an Amazon Hub
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    <small>{">"}</small> Host an Amazon Hub
                  </a>
                </li>
              </ul>
            </div>
            <div className="amazon-col  amazon-col--20">
              <h4 className="amazon-footer-title">Let Us Help You</h4>
              <ul className="amazon-footer-list">
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Amazon and COVID-19
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Your Account
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <Link to="/orders" className="amazon-footer-link">
                    Your Orders
                  </Link>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Shipping Rates & Policies{" "}
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Returns & Replacements{" "}
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Manage Your Content and Devices{" "}
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Amazon Assistant
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Help{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="amazon-sub-footer">
          <div className="amazon-row">
            <div className="amazon-col  amazon-col--50">
              <p className="amazon-footer-text">Copyright © {year}</p>
            </div>
            <div className="amazon-col  amazon-col--50">
              <ul className="amazon-footer-list">
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Cookies &amp; Internet Advertising
                  </a>
                </li>
                <li className="amazon-footer-list-item">
                  <a href="#" className="amazon-footer-link">
                    Privacy Notice
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
