import {
  TopContainer,
  ColumnOne,
  ColumnTwo,
  SocialIcons,
  ContactInfoContainer,
} from "./footer-styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Typography, Grid, Button } from "@mui/material";

const Footer = () => {
  return (
    <TopContainer>
      <ColumnOne>
        <Typography
          sx={{
            color: "secondary.light",
            fontSize: "22px",
            marginBottom: "15px",
          }}
        >
          Red Dragon Pizzeria
        </Typography>
        <Typography
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
          }}
        >
          Making hot and ready fantasy inspired dishes since 2022.
        </Typography>
        <Grid container columns={4} sx={{ width: "175px" }}>
          <Grid item xs={1}>
            <SocialIcons>
              <FacebookIcon color="secondary.light" />
            </SocialIcons>
          </Grid>
          <Grid item xs={1}>
            <SocialIcons>
              <TwitterIcon color="secondary.light" />
            </SocialIcons>
          </Grid>
          <Grid item xs={1}>
            <SocialIcons>
              <LinkedInIcon color="secondary.light" />
            </SocialIcons>
          </Grid>
          <Grid item xs={1}>
            <SocialIcons>
              <InstagramIcon color="secondary.light" />
            </SocialIcons>
          </Grid>
        </Grid>
      </ColumnOne>
      <ColumnTwo>
        <Typography
          sx={{
            color: "secondary.light",
            fontSize: "22px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Explore
        </Typography>
        <Button
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          variant={"text"}
        >
          Home
        </Button>
        <Button
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          variant={"text"}
        >
          Menu
        </Button>
        <Button
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          variant={"text"}
        >
          Custom Pizza
        </Button>
      </ColumnTwo>
      <ColumnTwo>
        <Typography
          sx={{
            color: "secondary.light",
            fontSize: "22px",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          Resources
        </Typography>
        <Button
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          variant={"text"}
        >
          Dough Recipe
        </Button>
        <Button
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          variant={"text"}
        >
          How to Throw Dough
        </Button>
        <Button
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
          variant={"text"}
        >
          Pizza Sauce Recipe
        </Button>
      </ColumnTwo>
      <ColumnTwo>
        <Typography
          sx={{
            color: "secondary.light",
            fontSize: "22px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact
        </Typography>
        <ContactInfoContainer>
          <LocalPhoneIcon />
          <Typography
            sx={{
              color: "secondary.light",
              fontSize: "18px",
            }}
          >
            +1 (555) 555-5555
          </Typography>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <LocationOnIcon />
          <Typography
            sx={{
              color: "secondary.light",
              fontSize: "18px",
            }}
          >
            Address TBD
          </Typography>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <EmailIcon />
          <Typography
            sx={{
              color: "secondary.light",
              fontSize: "18px",
            }}
          >
            Email TBD
          </Typography>
        </ContactInfoContainer>
      </ColumnTwo>
    </TopContainer>
  );
};
export default Footer;
