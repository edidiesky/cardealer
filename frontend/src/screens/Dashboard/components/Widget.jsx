import React, { useState } from "react";
import styled from "styled-components";

import { RiLuggageDepositLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SlSupport } from "react-icons/sl";
import { FaHouse, FaGift } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";

import { FaEye, FaMoneyCheck } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiStats } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

export default function Widget() {
  const [widgettab, setWidgetTab] = useState(1);
  const { totalProduct, isStatLoading } = useSelector((store) => store.product);
  const { totalUser } = useSelector((store) => store.user);
  const WidgetData = [
    {
      id: 1,
      title: "Total Sales",
      qty: "$100,357",
      icon: <RiLuggageDepositLine />,
      back: "#3693FF",
      percent: "2.6",
    },
    {
      id: 2,
      title: "Visitors",
      qty: `${totalUser}`,
      icon: <FaEye />,
      back: "#5B5E81  ",
      percent: "-0.06",
    },
    {
      id: 4,
      title: "Total Product",
      qty: `${totalProduct}`,
      icon: <BiStats />,
      back: "#AC4CBC",
      percent: "+1.06",
    },
  ];

  return (
    <WidgetWrapper>
      {WidgetData.map((x, index) => {
        return (
          // <div
          //   className={widgettab === x.id ? "widgetCard shadow active" : "widgetCard shadow"}
          //   key={x.id}
          //   onClick={() => setWidgetTab(x.id)}
          // >
          //   <div className="Icons">{x.icon}</div>
          // <h2>
          //   <span className="span1">{x.title}</span>
          //   {x.qty}
          // </h2>
          // </div>

          <div
            style={{ background: `${x?.back}` }}
            className="widgetCard w-100 flex item-center gap-2"
          >
            <span className="icon_widget flex item-center justify-center">
              {x.icon}
            </span>
            <h2>
              <span className="span1">{x.title}</span>
              {x.qty}
            </h2>
          </div>
        );
      })}
    </WidgetWrapper>
  );
}

const WidgetWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 2rem;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }

  svg {
    font-size: 2.4rem;
    color: #fff;
  }
  .widgetCard {
    padding: 4rem 2rem;
    background: var(--white);
    box-shadow: var(--shadow);
    display: flex;
    gap: 1.8rem;
    width: 100%;
    border-radius: 10px;
    transition: all 0.3s;
    h4 {
      font-size: 1.3rem;
      color: var(--grey-2);
      font-weight: 400;
      .span2 {
        color: var(--green);
      }
    }

    h2 {
      font-size: 3.5rem;
      color: #fff;
      font-weight: 600;
      text-transform: uppercase;
      .span1 {
        display: block;
        font-size: 1.4rem;
        color: var(--grey-2);
        font-weight: 400;
        padding-bottom: 1rem;
      }
    }

    .Icons {
      width: 5rem;
      height: 5rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #d76f2d;
      border-radius: 6px;
      svg {
        font-size: 20px;
        color: #fff;
      }
    }
    &.active,
    &:hover {
      background: #d76f2d;
      .Icons {
        background: #fff;
        svg {
          color: #d76f2d;
        }
      }

      h2,
      h4 {
        color: var(--white);
        .span2 {
          color: var(--white);
        }
      }
    }
  }
`;
