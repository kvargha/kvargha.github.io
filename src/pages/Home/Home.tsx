import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { Gradient } from "whatamesh";

import Skills from "../../components/Skills/Skills";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import EducationCard from "../../components/EducationCard/EducationCard";

// MUI Components
import { Container, Grid, Divider, Button } from "@mui/material";

// import ArticleIcon from "@mui/icons-material/Article";

// Images
import inBlue from "../../img/In-Blue.png";
import inWhite from "../../img/In-White.png";
import genomicsInstituteLogo from "../../img/genomics-institute.png";
import ucscLogo from "../../img/ucsc.png";
import { ReactComponent as CodingImg } from "../../img/coding-img.svg";
import { AppContext } from "../../App";

export default function Home() {
  const isDarkTheme = useContext(AppContext);

  const experience = [
    {
      company: "LinkedIn",
      dateRange: "May 2024 - Present",
      position: "Software Engineer, Systems Infrastructure",
      tags: ["Java", "Apache Kafka", "Kubernetes"],
      image: isDarkTheme ? inWhite : inBlue,
      link: "https://www.linkedin.com/",
    },
    {
      company: "The Genomics Institute",
      dateRange: "August 2021 - May 2024",
      position: "Full Stack Software Engineer 2",
      position2: "Full Stack Software Engineer 1",
      tags: ["React.js", "Kubernetes", "Flask"],
      image: genomicsInstituteLogo,
      link: "https://genomics.ucsc.edu/",
    },
    {
      company: "LEEPS Lab",
      dateRange: "May 2020 - August 2021",
      position: "Software Engineer Intern",
      tags: ["Django", "PostgreSQL", "Python"],
      image: ucscLogo,
      link: "https://leeps.ucsc.edu/",
    },
  ];

  const education = [
    {
      university: "University of California, Santa Cruz",
      dateRange: "Sept. 2017 - March 2021",
      degree: "B.S. Computer Science",
      points: [
        "Graduated with honors in the major",
        "Served as the Technology Chair for the student volunteer organization Circle K International",
        "Coursework: Distributed Systems, Web Applications, Databases, Computer Networking, Machine Learning",
      ],
    },
  ];

  useEffect(() => {
    // Create animated gradient
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <>
      <div className="title-section">
        <canvas id="gradient-canvas"></canvas>

        <div className="title-text-wrapper">
          <div className="title-text">
            <h1 className="main-title">
              Hello, I'm <span>Koorous Vargha</span>
            </h1>
            <p>Software Engineer</p>
          </div>

          <CodingImg className="title-image" />
        </div>
      </div>

      <Grid container spacing={4} className="intro grid">
        <Grid className="grid-item" xs={12} sm={6} item>
          <h2 className="title gradient-title">About Me</h2>
          <p className="intro-text">
            Hi there! I'm Koorous Vargha, Software Engineer at LinkedIn.
          </p>

          <div className="about-me-buttons">
            <Link to="/about">
              <Button variant="outlined" size="large">
                Learn More
              </Button>
            </Link>

            {/* <a href={"/Resume.pdf"} target="_blank" rel="noreferrer">
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArticleIcon />}
              >
                Resume
              </Button>
            </a> */}
          </div>
        </Grid>
        <Grid className="grid-item" xs={12} sm={6} item>
          <h2 className="title gradient-title">About This Site</h2>
          <p className="intro-text">
            Welcome to my website. This was built using React.js and TypeScript.
            Please check out the various pages.
          </p>

          <p className="intro-text">
            You can find the source code on my{" "}
            <a
              href="https://github.com/kvargha/kvargha.github.io"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </Grid>
      </Grid>

      <Divider className="section-divider" />

      <div className="title-container">
        <h1 className="title gradient-title">Experience</h1>
      </div>

      <Container maxWidth="lg" className="grid-container">
        <Grid container spacing={4} className="grid">
          {experience.map((content, index) => (
            <ExperienceCard key={index} {...content} />
          ))}
        </Grid>
      </Container>

      <Divider className="section-divider" />

      <div className="title-container">
        <h1 className="title gradient-title">Education</h1>
      </div>

      <Container maxWidth="lg" className="grid-container">
        <Grid container spacing={4} className="grid">
          {education.map((content, index) => (
            <EducationCard key={index} {...content} />
          ))}
        </Grid>
      </Container>

      <Divider className="section-divider" />

      <div className="title-container">
        <h1 className="gradient-title">Skills</h1>
      </div>

      <Skills />
    </>
  );
}
