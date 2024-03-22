import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>
                Shopify !&copy; {currentYear} :{" "}
                <a href="mailto:katreaniket3@gmail.com">
                  katreaniket3@gmail.com
                </a>{" "}
                <a
                  href="https://www.instagram.com/annie_jb_/"
                  style={{ textDecoration: "None" }}
                  target="_blank"
                >
                  {"   "} || {"   "}
                  <FaInstagram style={{ fontSize: "20px" }} />
                  {"   "}
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/aniket-katre-752465149/"
                  style={{ textDecoration: "None" }}
                  target="_blank"
                >
                  {"   "} || {"   "}
                  <FaLinkedin style={{ fontSize: "20px" }} />
                  {"   "}
                </a>{" "}
                <a
                  href="https://github.com/AniketKatre/"
                  style={{ textDecoration: "None" }}
                  target="_blank"
                >
                  {"   "} || {"   "}
                  <FaGithub style={{ fontSize: "20px" }} />
                  {"   "}
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
