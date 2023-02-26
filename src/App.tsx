import { useEffect, useState } from "react";

import "./App.css";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

// Components
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange/ScrollToTopOnRouteChange";

// MUI Components
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Button,
} from "@mui/material";

import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const drawerWidth = 200;

const Main = styled("main")<{}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  width: "100%",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// Define theme settings
const light = createTheme({
  palette: {
    mode: "light",
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  // Navigation
  const navigation = [
    {
      link: "/",
      text: "Home",
      icon: HomeIcon,
    },
    {
      link: "/about",
      text: "About",
      icon: AccountBoxIcon,
    },
    {
      link: "/projects",
      text: "Projects",
      icon: CodeIcon,
    },
    {
      link: "/contact",
      text: "Contact",
      icon: ContactMailIcon,
    },
  ];

  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();

  // Read theme stored in local storage
  let themeStored = localStorage.getItem("theme");

  const [isDarkTheme, setIsDarkTheme] = useState(
    themeStored === "light" ? false : true
  );

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Modify theme stored when theme is changed
  useEffect(() => {
    if (isDarkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <MuiAppBar position="fixed">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  mr: 2,
                  display: { sm: "none" },
                  ...(openDrawer && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>

              <Link to="/" className="header-link">
                <Typography variant="h6" noWrap component="div">
                  Koorous Vargha
                </Typography>
              </Link>

              {/* Top link navigation */}
              <Box
                className="link-list top-link-navigation"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {navigation.map((item, index) => (
                  <Button key={index} component={Link} to={item.link}>
                    {item.text}
                  </Button>
                ))}
              </Box>

              <div style={{ flexGrow: 1 }}></div>

              <Tooltip
                title={isDarkTheme ? "Toggle light mode" : "Toggle dark mode"}
              >
                <IconButton onClick={changeTheme} color="inherit">
                  {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
            </Toolbar>
          </MuiAppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            anchor="left"
            open={openDrawer}
            onClose={handleDrawerClose}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            {/* Drawer navigation */}
            <List className="drawer-link-list">
              {navigation.map((item) => (
                <ListItem
                  key={item.text}
                  component={Link}
                  to={item.link}
                  disablePadding
                  onClick={handleDrawerClose}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Main>
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </Main>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
