import React, { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

export default function Heroindex() {
  useEffect(() => {
    gsap.to(".text1", {
      transform: "none",
      duration: 0.8,
      delay: 0.5,
      stagger: {
        amount: 0.5,
      },
    });
  }, []);
  return (
    <HeroContainer>
      <div className="herowrapper">
        <img
          src="https://avada.website/car-dealership/wp-content/uploads/sites/165/2022/02/hero-image-car-alt.jpg"
          alt=""
          className="heroImage"
        />
        <img
          src="data:image/svg+xml;utf8,%3Csvg%20width%3D%221920%22%20height%3D%22954%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23prefix__clip0_75_23031%29%22%20fill%3D%22rgba%288%2C27%2C54%2C1%29%22%3E%3Cpath%20d%3D%22M1321.57%20538C1357.08%20287.516%201273.7%2089.91%201127-.418L1374.18-6c65.77%20100.68-15.89%20431.512-52.61%20544zM312%20955c432.242%200%20746.77-180.667%20850-271-90.34%20157.09-176.766%20246.121-208.688%20271H312z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.25%22%2F%3E%3Cpath%20d%3D%22M1344.5%20427c0-252.4-212.67-390.833-319-428.5H1373c70%2082.4%2010.17%20320-28.5%20428.5z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.1%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M839.644%20954C1138.37%20793.549%201337%20508.902%201337%20184.5c0-63.218-7.54-124.926-21.9-184.5H1920v954H839.644zm0%200C676.842%201041.44%20484.311%201092%20278%201092c-584.87%200-1059-406.302-1059-907.5S-306.87-723%20278-723c511.098%200%20937.63%20310.269%201037.1%20723H0v954h839.644z%22%20fill%3D%22rgba%28255%2C255%2C255%2C1%29%22%20fill-opacity%3D%22.5%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M1011.55%20954C1221.42%20793.95%201353%20564.007%201353%20308.5c0-108.584-23.76-212.552-67.2-308.5H1920v954h-908.45zm0%200c-187.291%20142.83-436.933%20230-711.05%20230C-280.78%201184-752%20792.025-752%20308.5S-280.78-567%20300.5-567c450.743%200%20835.31%20235.692%20985.3%20567H0v954h1011.55z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22prefix__clip0_75_23031%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h1920v954H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
          alt=""
          className="imageWrap"
        />
        <div className="gradient"></div>
        <div className="heroSection">
          <div className="hidden">
            <h3 className="fs-24 text1 text-white text-center">
              WORLD-CLASS PERFORMANCE
            </h3>
          </div>
          <div className="hidden">
            <h1 className="text2 text1">Luxury Sports Cars</h1>
          </div>
          <div className="hidden">
            <h2 className="family1 text3 text1 text-white text-center">
              We Make Dreams Come True
            </h2>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  z-index: 20;

  .text1,
  .text2,
  .text3 {
    transform: translate3d(0, 100px, 0);
  }
  .gradient {
    z-index: 400;
    background-image: linear-gradient(
      90deg,
      rgb(4 25 54 / 78%) 30%,
      rgba(8, 27, 53, 0) 65%
    );
    position: absolute;
    top: 0px;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .imageWrap {
    position: absolute;
    top: 0px;
    left: 0;
    height: 100%;
    transform: scale(-1, 1);
    width: 100%;
    opacity: 0.6;
    background-size: cover;
    background-position: center;
  }
  .herowrapper {
    width: 100%;
    position: relative;
    min-height: 55rem;
    padding: 4rem 0;
    display: grid;
    place-items: center;
    @media (max-width: 780px) {
      min-height: 53rem;
    }
    .heroImage {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      object-fit: cover;
    }

    .heroSection {
      width: 60%;
      max-width: 1100px;
      margin: 0 auto;
      z-index: 12460;
      display: flex;
      justify-content: center;
      padding: 4rem 0;
      flex-direction: column;
      align-items: center;
      gap: 1.7rem;
      @media (max-width: 1080px) {
        width: 90%;
      }
      @media (max-width: 780px) {
        width: 90%;
        align-items: flex-start;
      }
      h3 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 26px;
        @media (max-width: 580px) {
          text-align: start;
          font-size: 18px;
        }
      }
      h1 {
        color: #fff;
        font-size: 7.9rem;
        font-weight: 700;
        z-index: 500;
        text-align: center;
        @media (max-width: 780px) {
          text-align: start;
          font-size: 6rem;
          line-height: 1;
        }
      }
      h2 {
        font-size: 39px;
        font-weight: normal;
        @media (max-width: 580px) {
          text-align: start;
          line-height: 1.3;
          font-size: 27px;
        }
        @media (max-width: 480px) {
          font-size: 2.8rem !important;
        }
      }
      .btnwrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 2rem 0;
        @media (max-width: 480px) {
          flex-direction: column;
          align-items: flex-start;
        }
        .btn {
          width: 200px;
          padding: 2.3rem;
          cursor: pointer;
          font-size: 2rem;
          font-weight: 400;
          color: #fff;
          background: var(--red);
          border: none;
          outline: none;
          z-index: 400;
          text-transform: uppercase;
          transition: all 0.3s;

          &.btn-1 {
            background: #fff;
            color: var(--dark-1);
          }
          &:hover {
            background: var(--blue-1);
            color: #fff;
          }
        }
      }
    }
  }
`;
