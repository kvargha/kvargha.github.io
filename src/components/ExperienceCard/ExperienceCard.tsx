import "./ExperienceCard.css";

// MUI Components
import {
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Button,
} from "@mui/material";

interface ExperienceContent {
  company: string;
  dateRange: string;
  position: string;
  position2?: string;
  tags: string[];
  image: string;
  link: string;
}

export default function ExperienceCard({
  company,
  dateRange,
  position,
  position2,
  tags,
  image,
  link,
}: ExperienceContent) {
  return (
    <Grid
      className="grid-item"
      key={company + " - " + position}
      xs={12}
      md={6}
      item
    >
      <CardActionArea className="card-action-area" href={link} target="_blank">
        <Card className="card">
          <div className="card-details-container">
            <CardContent className="card-details">
              <Typography component="h2" variant="h5">
                {company}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                {dateRange}
              </Typography>

              <Typography variant="subtitle1" className="position" paragraph>
                {position}
              </Typography>

              {position2 ? (
                <Typography variant="subtitle1" className="position" paragraph>
                  {position2}
                </Typography>
              ) : null}

              <div style={{ flexGrow: 1 }}></div>

              <div className="tags">
                {tags.map((tag, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    color="primary"
                    size="small"
                    disableRipple
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </CardContent>
          </div>

          <Box
            className="company-image-container"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img className="company-image" src={image} alt="logo" />
          </Box>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
