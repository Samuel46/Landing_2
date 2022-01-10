import Link from "next/link";
import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  color: #ffffff !important;
`;
const Logo = styled(Text)`
  font-weight: 500;
  font-size: 34px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BottomWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <>
      <footer className="footer-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-8">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link href="/">
                    <a>
                      <Logo>Unifaires</Logo>
                    </a>
                  </Link>
                </div>
                <div className="newsletter-area">
                  <Text>
                    Unifaires GmbH, Stormstraße 17 <br /> 50997 Cologne <br />{" "}
                    Phone: +49 (0) <br /> 5241-80-0 info@unifaires.com
                  </Text>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>Platform</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/discover-1">
                      <a>Jobs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/discover-1">
                      <a>Education</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/discover-1">
                      <a>Funding</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>Use Cases</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/authors">
                      <a>For Students</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/collection">
                      <a>For Universities</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/author-profile">
                      <a>For Recruiters</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>Company</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/help-center">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/auction">
                      <a>Our Services</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/item-details">
                      <a>Our Pricing</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/activity">
                      <a>News</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-sm-4">
              <div className="footer-widget ps-5">
                <h3>support</h3>
                <ul className="footer-list">
                  <li>
                    <Link href="/about">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Help Center</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/blog-1">
                      <a>Sitemap</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <TopWrapper></TopWrapper>

        <div className="footer-shape">
          <div className="footer-shape1">
            <img src="../images/shape/shape-bg.png" alt="Images" />
          </div>

          <div className="footer-shape2">
            <img src="../images/shape/shape1.png" alt="Images" />
          </div>

          <div className="footer-shape3">
            <img src="../images/shape/shape2.png" alt="Images" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
