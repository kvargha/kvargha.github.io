import { useState } from "react";

import "./Skills.css";
import ImageList from "../ImageList/ImageList";

// MUI Components
import { Tabs, Tab, Box, useMediaQuery } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import SwipeableViews from "react-swipeable-views";

// Icons
import CodeIcon from "@mui/icons-material/Code";
import InventoryIcon from "@mui/icons-material/Inventory";
import CloudIcon from "@mui/icons-material/Cloud";

// Languages
// import c from "./img/Languages/c.svg";
// import cplusplus from "./img/Languages/c++.svg";
import css from "./img/Languages/css.svg";
// import go from "./img/Languages/go.svg";
import html from "./img/Languages/html.svg";
// import java from "./img/Languages/java.svg";
import javascript from "./img/Languages/javascript.svg";
import postgresql from "./img/Languages/postgresql.svg";
import python from "./img/Languages/python.svg";
import typescript from "./img/Languages/typescript.svg";

// Frameworks
import django from "./img/Frameworks/django.svg";
import docker from "./img/Frameworks/docker.svg";
import expressJSDarkMode from "./img/Frameworks/expressjs_dark_mode.svg";
import expressJSLightMode from "./img/Frameworks/expressjs_light_mode.svg";
import flask from "./img/Frameworks/flask.svg";
import jest from "./img/Frameworks/jest.svg";
import kubernetes from "./img/Frameworks/kubernetes.svg";
import materialUI from "./img/Frameworks/materialui.svg";
import nodeJS from "./img/Frameworks/nodejs.svg";
// import polymerJS from "./img/Frameworks/polymerjs.svg";
import reactJS from "./img/Frameworks/reactjs.svg";
// import terraform from "./img/Frameworks/terraform.svg";

// Cloud Services
import aws from "./img/CloudServices/aws.svg";
// import cloudflare from "./img/CloudServices/cloudflare.svg";
import digitalOcean from "./img/CloudServices/digitalocean.svg";
import gcp from "./img/CloudServices/gcp.svg";
// import snowflake from "./img/CloudServices/snowflake.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Skills() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery("(max-width:450px)");
  const isDarkTheme = useTheme().palette.mode === "dark";

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const languages = [
    {
      img: python,
      title: "Python",
    },
    {
      img: javascript,
      title: "JavaScript",
    },
    {
      img: typescript,
      title: "TypeScript",
    },
    {
      img: html,
      title: "HTML",
    },
    {
      img: css,
      title: "CSS",
    },
    // {
    //   img: java,
    //   title: "Java",
    // },
    // {
    //   img: go,
    //   title: "Go",
    // },
    {
      img: postgresql,
      title: "PostgreSQL",
    },
    // {
    //   img: c,
    //   title: "C",
    // },
    // {
    //   img: cplusplus,
    //   title: "C++",
    // },
  ];

  const frameworksAndLibraries = [
    {
      img: docker,
      title: "Docker",
    },
    {
      img: kubernetes,
      title: "Kubernetes",
    },
    {
      img: nodeJS,
      title: "Node.js",
    },
    {
      img: reactJS,
      title: "React.js",
    },
    {
      img: materialUI,
      title: "Material UI",
    },
    {
      img: isDarkTheme ? expressJSDarkMode : expressJSLightMode,
      title: "Express.js",
    },
    {
      img: django,
      title: "Django",
    },
    {
      img: flask,
      title: "Flask",
    },
    {
      img: jest,
      title: "Jest",
    },
    // {
    //   img: polymerJS,
    //   title: "Polymer.js",
    // },
    // {
    //   img: terraform,
    //   title: "Terraform",
    // },
  ];

  const cloudServices = [
    {
      img: gcp,
      title: "Google Cloud Platform",
    },
    {
      img: aws,
      title: "Amazon Web Services",
    },
    // {
    //   img: snowflake,
    //   title: "Snowflake",
    // },
    // {
    //   img: cloudflare,
    //   title: "Cloudflare",
    // },
    {
      img: digitalOcean,
      title: "DigitalOcean",
    },
  ];

  return (
    <Box className="skills-container">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered={isMobile ? false : true}
          variant={isMobile ? "scrollable" : "fullWidth"}
          scrollButtons={isMobile ? true : false}
          allowScrollButtonsMobile
        >
          <Tab label="Languages" icon={<CodeIcon />} {...a11yProps(0)} />
          <Tab label="Frameworks & Libraries" icon={<InventoryIcon />} {...a11yProps(1)} />
          <Tab label="Cloud Services" icon={<CloudIcon />} {...a11yProps(2)} />
        </Tabs>
      </Box>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <ImageList imageData={languages} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ImageList imageData={frameworksAndLibraries} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ImageList imageData={cloudServices} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
