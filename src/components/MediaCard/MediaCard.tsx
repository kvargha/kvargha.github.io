import "./MediaCard.css";

// MUI Components
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Link,
} from "@mui/material";

interface MediaContent {
  image: string;
  title: string;
  description: string;
  external?: string;
  demo?: string;
  code?: string;
}

export default function MediaCard({
  image,
  title,
  description,
  external,
  demo,
  code,
}: MediaContent) {
  return (
    <Grid
      className="grid-item"
      key={title + " - " + description}
      xs={12}
      md={6}
      item
    >
      <Card className="media-card">
        <CardMedia
          component="img"
          image={image}
          alt={title}
          height="250"
          className="media-card-img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>

        <div style={{ flexGrow: 1 }}></div>

        <CardActions>
          <Link
            href={external}
            target="_blank"
            rel="noreferrer"
            sx={{ display: external ? "block" : "none" }}
          >
            <Button variant="outlined" size="small">
              View
            </Button>
          </Link>
          <Link
            href={demo}
            target="_blank"
            rel="noreferrer"
            sx={{ display: demo ? "block" : "none" }}
          >
            <Button variant="outlined" size="small">
              Demo
            </Button>
          </Link>
          <Link
            href={code}
            target="_blank"
            rel="noreferrer"
            sx={{ display: code ? "block" : "none" }}
          >
            <Button variant="outlined" size="small">
              Code
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
