/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "./Header.css";

//Icons
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { authentication } from "../../firebase.js";
import Email from "../Email";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  const [activateNavLinks, setActivateNavLinks] = useState(false);

  let username = user ? Email() : "Guest";

  function handleAuthentication() {
    if (user) {
      authentication.signOut();
    }
  }

  return (
    <div className="headerContainer">
      {innerWidth > 1028 ? (
        <div className="header">
          <Link to="/">
            <img
              className="header__logo"
              src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
              alt="amazon"
            />
          </Link>

          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>

          <div className="header__nav">
            <Link to={!user && "/login"}>
              <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineOne">Hello, {username}</span>
                <span className="header__optionLineTwo">
                  {user ? "Sign out" : "Sign in"}
                </span>
              </div>
            </Link>

            <Link to="/orders">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>

            <Link to="/address">
              <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Address</span>
              </div>
            </Link>

            <Link to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="header">
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <a
              className="header__toggleButton"
              href="#"
              onClick={() => {
                setActivateNavLinks(!activateNavLinks);
              }}
            >
              <span className="header__bar"></span>
              <span className="header__bar"></span>
              <span className="header__bar"></span>
            </a>
            <div className="header-logo">
              <Link to="/">
                <img
                  className="header__logo"
                  src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
                  alt="amazon"
                />
              </Link>
            </div>

            <div className="header__nav">
              <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header__option">
                  <span className="header__optionLineOne">
                    Hello, {username}
                  </span>
                  <span className="header__optionLineTwo">
                    {user ? "Sign out" : "Sign in"}
                  </span>
                </div>
              </Link>

              <Link to="/checkout">
                <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                  <span className="header__optionLineTwo header__basketCount">
                    {basket?.length}
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="header__search">
            <input
              className="header__searchInput"
              type="text"
              placeholder="Search Amazon..."
            />
            <SearchIcon className="header__searchIcon" />
          </div>

          <div
            className={
              activateNavLinks ? "header__links active" : "header__links"
            }
          >
            <Link to="/orders">
              <div className="header__navLink">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo"> & Orders</span>
              </div>
            </Link>

            <Link to="/address">
              <div className="header__navLink">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo"> Address</span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
