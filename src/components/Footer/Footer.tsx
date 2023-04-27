import "./Footer.css";

import { Typography, Link, IconButton, Tooltip } from "@mui/material";

// Icons
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer className="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} Koorous Vargha
      </Typography>

      <div className="footer-buttons">
        <Tooltip title="Email">
          <Link href="mailto:koorousvargha@gmail.com" target="_blank">
            <IconButton aria-label="Email">
              <EmailIcon />
            </IconButton>
          </Link>
        </Tooltip>

        {/* <Tooltip title="Facebook">
          <Link href="https://www.facebook.com/koorousvargha" target="_blank">
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
          </Link>
        </Tooltip> */}

        <Tooltip title="LinkedIn">
          <Link href="https://www.linkedin.com/in/kvargha" target="_blank">
            <IconButton aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Tooltip>

        <Tooltip title="GitHub">
          <Link href="https://github.com/kvargha" target="_blank">
            <IconButton aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
          </Link>
        </Tooltip>
      </div>
    </footer>
  );
}
