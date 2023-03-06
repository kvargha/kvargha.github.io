import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import { Gradient } from "whatamesh";

import Skills from "../../components/Skills/Skills";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import EducationCard from "../../components/EducationCard/EducationCard";

// MUI Components
import { Container, Grid, Divider, Button } from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";

// Images
import genomicsInstituteLogo from "../../img/genomics-institute.png";
import ucscLogo from "../../img/ucsc.png";
import { ReactComponent as CodingImg } from "../../img/coding-img.svg";

export default function Home() {
  const experience = [
    {
      company: "UCSC Genomics Institute",
      dateRange: "August 2021 - Present",
      position: "Software Developer",
      tags: ["React.js", "Kubernetes", "Flask"],
      image: genomicsInstituteLogo,
      link: "https://genomics.ucsc.edu/",
    },
    {
      company: "UCSC LEEPS Lab",
      dateRange: "May 2020 - August 2021",
      position: "Lead Programmer Intern",
      position2: "Programmer Intern",
      tags: ["Django", "PostgreSQL", "Python"],
      image: ucscLogo,
      link: "https://leeps.ucsc.edu/home/",
    },
  ];

  const education = [
    {
      university: "University of California, Santa Cruz",
      dateRange: "Sept. 2017 - March 2021",
      degree: "B.S. Computer Science",
      points: [
        "Graduated with honors",
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
            <p>Full Stack Software Engineer</p>
          </div>

          <CodingImg className="title-image" />
        </div>
      </div>

      <Grid container spacing={4} className="intro grid">
        <Grid className="grid-item" xs={12} sm={6} item>
          <h2 className="title gradient-title">About Me</h2>
          <p className="intro-text">
            Hi there! I'm Koorous Vargha, Software Developer at the Genomics
            Institute.
          </p>

          <div className="about-me-buttons">
            <Link to="/about">
              <Button variant="outlined" size="large">
                Learn More
              </Button>
            </Link>

            <a href={"/Resume.pdf"} target="_blank" rel="noreferrer">
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArticleIcon />}
              >
                Resume
              </Button>
            </a>
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
