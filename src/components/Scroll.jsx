// IMPORTS -
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "../styles/Scroll.css";

const Scroll = () => {
  // STATE TO HANDLE VISIBILITY -
  const [visible, setVisible] = useState(false);

  // BUTTON HANDLER -
  const btnHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // SCROLL HANDLER -
  const toScroll = () => {
    let height = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // TRIGGER VISIBILITY -
  useEffect(() => {
    window.addEventListener("scroll", toScroll);
  }, []);

  return (
    <>
      {visible && (
        <div className="wrapper">
          <div className="top__btn" onClick={btnHandler}>
            <FaArrowUp className="arrow__icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Scroll;
