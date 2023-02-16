import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import "./ImageList.css";

interface ImageInfo {
  img: string;
  title: string;
}

interface ImageArray {
  imageData: Array<ImageInfo>;
}

export default function ImageList({ imageData }: ImageArray) {
  const isDarkTheme = useTheme().palette.mode === "dark";

  return (
    <Grid container spacing={4} className="grid">
      {imageData.map((item) => (
        <Grid key={item.img} xs={12} sm={6} md={4} lg={3} xl={2} item>
          <div
            className={`image-list-item ${
              isDarkTheme ? "image-list-item-dark" : "image-list-item-light"
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="image-list-item-img"
            />
            <p>{item.title}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
