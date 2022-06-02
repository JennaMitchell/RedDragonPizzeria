import { Grid, Typography } from "@mui/material";

const HomepageMenuItem = ({ title, description, cost }) => {
  return (
    <Grid item xs={1}>
      <Typography
        sx={{
          fontSize: "20px",
          textDecoration: "underline",
          marginBottom: "5px",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          marginBottom: "5px",
        }}
      >
        {description}
      </Typography>
      <Typography>{cost}</Typography>
    </Grid>
  );
};
export default HomepageMenuItem;
