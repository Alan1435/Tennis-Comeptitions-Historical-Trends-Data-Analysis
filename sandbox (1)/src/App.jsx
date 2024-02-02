import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import logo from "./images/logo.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYoutube from "./images/icon-youtube.svg";
import IconLaptop from "./images/icon-laptop.svg";

export default function App() {
  return (
    <Wrapper>
      <Spline
        className="spline"
        scene="https://prod.spline.design/lN5MvmXXKAG7gj3n/scene.splinecode"
      />
      <Content>
        <Menu>
          <li>
            <img src={logo} alt="Logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Download</a>
          </li>
          <li>
            <a href="/">App</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <button className="get-started"> Get Started</button>
          </li>
        </Menu>

        <h1>Collaborate with people</h1>
        <p>
          Bring your team together and build your community by using our
          cross-platform app that lets you collaborate via chat, voice and by
          sharing and storing unlimited media files. A world of topics is
          waiting for you. Join the private beta.
        </p>
        <button>
          <img src={IconLaptop} alt="Download" /> Download for Mac
        </button>
      </Content>
      <Social>
        <div />
        <img src={IconTwitter} alt="Twitter" />
        <img src={IconYoutube} alt="Youtube" />
      </Social>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  font-size: 16px;
  color: white;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: -10%;
    right: -5%;
    z-index: 10;

    @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 80px;

  h1 {
    font-family: "Spline Sans Mono", monospace;
    font-weight: bold;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    font-size: 16px;
    font-weight: bold;
    padding: 12px 30px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    max-width: 280px;
    backdrop-filter: blur(20px);

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    transition: 1s;
  }

  button:hover {
    border: 1px solid rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;
    z-index: 11;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0px;

  li {
    list-style: none;
    margin: 0;
    z-index: 11;

    .get-started {
      position: absolute;
      top: 0;
      right: 0;
      background: rgba(31, 66, 250, 0.2);
    }

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;
      border-radius: 14px;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  img {
    z-index: 11;
  }

  div {
    width: 1px;
    height: 500px;
    z-index: 11;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
