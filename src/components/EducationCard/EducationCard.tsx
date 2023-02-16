import "./EducationCard.css";

// MUI Components
import { Grid, Card, CardContent, Typography } from "@mui/material";

interface EducationContent {
  university: string;
  dateRange: string;
  degree: string;
  points: string[];
}

export default function EducationCard({
  university,
  dateRange,
  degree,
  points,
}: EducationContent) {
  return (
    <Grid className="grid-item" key={university + " - " + degree} xs={12} item>
      <Card className="card">
        <div className="card-details-container">
          <CardContent className="card-details">
            <div className="header">
              <Typography component="h2" variant="h5">
                {university}
              </Typography>

              <Typography variant="subtitle1" color="textSecondary">
                {dateRange}
              </Typography>
            </div>

            <Typography variant="subtitle1" className="degree" paragraph>
              {degree}
            </Typography>

            <ul>
              {points.map((point, index) => {
                return <li key={index}>{point}</li>;
              })}
            </ul>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}
