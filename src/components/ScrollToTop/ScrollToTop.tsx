import { useState } from "react";
import "./ScrollToTop.css";

// MUI Components
import { Fade, Fab, Tooltip } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Fade in={visible}>
      <Tooltip title="Scroll to top">
        <Fab
          className="scroll-to-top-button"
          size="medium"
          color="info"
          onClick={scrollToTop}
          style={{ display: visible ? "flex" : "none" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </Fade>
  );
}
