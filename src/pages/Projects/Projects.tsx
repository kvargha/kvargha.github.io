import "./Projects.css";
import MediaCard from "../../components/MediaCard/MediaCard";

// MUI Components
import { Container, Grid } from "@mui/material";

// Images
import amberDash from "../../img/amber-dash.png";
import gmail from "../../img/gmail.png";
import soundcloud from "../../img/soundcloud.png";

export default function Projects() {
  const projects = [
    {
      image: amberDash,
      title: "AmberDash",
      description:
        "An Amber Alert detection system that utilizes Google Maps, Cloud Vision, and Firebase. This project was awarded Best Use of Google Cloud at CruzHacks 2020.",
      external: "https://devpost.com/software/amber-dash",
      code: "https://github.com/kvargha/AmberDash",
    },
    {
      image: gmail,
      title: "Gmail Clone",
      description:
        "Recreated the Gmail web app with React.js, Express.js, and PostgreSQL.",
      code: "https://github.com/kvargha/Gmail-Clone",
    },
    {
      image: soundcloud,
      title: "SoundCloud Clone",
      description:
        "Recreated SoundCloud with React.js, Django, and PostgreSQL.",
      code: "https://github.com/kvargha/SoundCloud-Clone",
    },
  ];

  return (
    <>
      <div className="title-container">
        <h1 className="title gradient-title">Projects</h1>
      </div>

      <Container maxWidth="lg" className="grid-container">
        <Grid container spacing={4} className="grid">
          {projects.map((content) => (
            <MediaCard
              key={content.title + " - " + content.description}
              {...content}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
