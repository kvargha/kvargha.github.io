import "./Contact.css";

import { Link } from "@mui/material";

export default function Contact() {
  return (
    <>
      <div className="title-container">
        <h1 className="title gradient-title">Contact</h1>

        <p className="contact-text">
          Interested in getting in touch with me?
          <br />
          Feel free to email me at{" "}
          <Link href="mailto:koorousvargha@gmail.com" target="_blank">
            koorousvargha@gmail.com
          </Link>
          .
        </p>
      </div>
    </>
  );
}
