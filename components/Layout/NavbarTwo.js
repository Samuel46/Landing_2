import { useState } from "react";
import styled from "styled-components";
import SearchModal from "./SearchModal";
import Link from "../../utils/ActiveLink";

const Logo = styled.h5`
  width: 160px;
  height: 48px;
  font-weight: 500;
  font-size: 34px;
  line-height: 125%;
  display: flex;
  align-items: center;
  color: #ffffff !important;
`;

const NavbarTwo = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleWallet = () => {
    setShowWallet(!showWallet);
  };

  const toggleSearchModal = () => {
    setShowSearchModal(!showSearchModal);
  };

  //sticky menu
  const showStickyMenu = () => {
    if (window.scrollY >= 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", showStickyMenu);
  }
  return (
    <>
      {/* For mobile devices */}
      <div className={sticky ? "is-sticky navbar-area" : "navbar-area"}>
        <div className="mobile-responsive-nav">
          <div className="container-fluid">
            <div className="mobile-responsive-menu">
              <div
                onClick={() => toggleMenu()}
                className="hamburger-menu hamburger-two"
              >
                {showMenu ? (
                  <i className="ri-close-line"></i>
                ) : (
                  <i className="ri-menu-line"></i>
                )}
              </div>
              <div className="logo">
                <Link href="/">
                  <Logo>Unifaires</Logo>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            showMenu ? "show desktop-nav nav-area" : "desktop-nav nav-area"
          }
        >
          {/* For desktop devices */}
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light ">
              <Link href="/">
                <Logo>Unifaires</Logo>
              </Link>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services
                    </a>
                  </li>
                </ul>
              </div>

              <div className="nav-widget-form nav-widget-form-bg">
                <form className="search-form">
                  <input
                    type="search"
                    className="form-control"
                    placeholder=" Jobs, Education, & Funding | Search for anything "
                  />
                  <button type="submit">
                    <i className="ri-search-line"></i>
                  </button>
                </form>
              </div>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <img
                      src="../images/home-two/glob.svg"
                      alt=""
                      className="svg_logo"
                    />
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      English
                    </a>
                  </li>
                  <li className="nav-item">
                    <img
                      src="../images/home-two/lang.svg"
                      alt=""
                      className="svg_logo"
                    />
                  </li>
                </ul>
              </div>
              <div
                onClick={() => toggleMenu()}
                className="hamburger-menu hamburger-two"
              >
                {showMenu ? (
                  <i className="ri-close-line"></i>
                ) : (
                  <i className="ri-menu-line"></i>
                )}
              </div>
            </nav>
          </div>
        </div>

        <div className="mobile-nav">
          <div
            className="search-btn global-pointer"
            onClick={() => toggleSearchModal()}
          >
            <a data-bs-toggle="modal" data-bs-target="#searchmodal">
              <i className="ri-search-line"></i>
            </a>
          </div>
        </div>

        <div className="side-nav-responsive">
          <div className="container-max">
            <div className="dot-menu" onClick={() => toggleWallet()}>
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className={showWallet ? "container active" : "container"}>
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  <div className="side-nav-item">
                    <ul className="optional-item-list">
                      <li>
                        <Link
                          href="/create-collection"
                          activeClassName="active"
                        >
                          <a>Create</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/add-wallet" activeClassName="active">
                          <a className="active">Connect Wallet</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchModal
        showSearchModal={showSearchModal}
        toggleSearchModal={toggleSearchModal}
      />
    </>
  );
};

export default NavbarTwo;
