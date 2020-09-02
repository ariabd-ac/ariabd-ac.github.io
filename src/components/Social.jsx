import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

class Social extends React.Component {
  render() {
    const fillColor = this.props.isFull ? "#23B4A5" : "#73737d";
    const sizeUp = this.props.isFull ? "23px" : "21px";
    const mbUp = this.props.isFull ? "mb-5 " : "mb-4";

    return (
      <SocialBar>
        <a
          href="https://github.com/ariabd-ac"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://www.linkedin.com/in/ariabdac007/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Linkedin size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://twitter.com/ariabd_id"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter size={sizeUp} className={mbUp} color={fillColor} />
        </a>
        <a
          href="https://www.instagram.com/ariabd.ac"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Instagram size={sizeUp} className={mbUp} color={fillColor} />
        </a>
      </SocialBar>
    );
  }
}

export default Social;

const SocialBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 2.55rem;
  bottom: 11rem;

  @media (max-width: 992px) {
    left: 1.5rem;
  }

  @media (max-width: 580px) {
    flex-direction: row;
    justify-content: center;
    position: unset;
  }
`;

const Github = styled(FaGithub)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Linkedin = styled(FaLinkedinIn)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Twitter = styled(FaTwitter)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
const Instagram = styled(FaInstagram)`
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    transform: scale(1.3) rotate(360deg);
  }

  @media (max-width: 580px) {
    color: #73737d !important;
    margin-right: 0.5rem;
  }
`;
