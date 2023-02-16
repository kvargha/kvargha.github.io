import KoorousVargha from "../../img/koorous-vargha-square.png";
import "./About.css";

// MUI Components
import { Grid, Container, Button } from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";

export default function About() {
  return (
    <>
      <div className="title-container">
        <h1 className="title gradient-title">About Me</h1>
      </div>

      <Container maxWidth="lg" className="about-me-section">
        <Grid container spacing={4} className="grid">
          <Grid
            className="grid-item about-me-photo-container"
            xs={12}
            md={6}
            item
          >
            <img
              src={KoorousVargha}
              alt="Koorous Vargha"
              className="about-photo"
            />
          </Grid>

          <Grid className="grid-item" xs={12} md={6} item>
            <p style={{ marginTop: 0 }}>
              Hello, I'm Koorous Vargha. I graduated from UC Santa Cruz with a
              B.S. in Computer Science.
            </p>

            <p>
              I am Full-Stack Software Engineer with experience working in an
              agile environment building highly scalable applications in the
              cloud.
            </p>

            <p>
              In my freetime, I'm either learning new tools/frameworks, or
              watching the latest Marvel series.
            </p>

            <a href={'/Resume.pdf'} target="_blank" rel="noreferrer">
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArticleIcon />}
                sx={{ marginTop: "16px" }}
              >
                Resume
              </Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}