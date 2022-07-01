import { Grid, Typography } from "@mui/material";

const HomepageMenuItem = ({ title, description, cost }) => {
  return (
    <Grid item xs={1}>
      <Typography
        sx={{
          fontSize: "20px",
          textDecoration: "underline",
          marginBottom: "5px",

          "@media (max-width:870px)": {
            fontSize: "16px",
          },
          "@media (max-width:600px)": {
            fontSize: "14px",
          },
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          marginBottom: "5px",
          "@media (max-width:870px)": {
            fontSize: "14px",
          },
          "@media (max-width:730px)": {
            fontSize: "12px",
          },
          "@media (max-width:600px)": {
            fontSize: "10px",
          },
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          marginBottom: "5px",
          "@media (max-width:870px)": {
            fontSize: "14px",
          },
          "@media (max-width:730px)": {
            fontSize: "12px",
          },
          "@media (max-width:600px)": {
            fontSize: "10px",
          },
        }}
      >
        {cost}
      </Typography>
    </Grid>
  );
};
export default HomepageMenuItem;
