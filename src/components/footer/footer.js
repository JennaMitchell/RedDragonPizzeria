import {
  TopContainer,
  ColumnOne,
  ColumnTwo,
  SocialIcons,
  ContactInfoContainer,
  StyledContactText,
  StyledFooterHeading,
  StyledFooterNavLink,
  StyledLink,
} from "./footer-styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Typography, Grid } from "@mui/material";

const Footer = () => {
  return (
    <TopContainer>
      <ColumnOne>
        <Typography
          sx={{
            color: "secondary.light",
            fontSize: "22px",
            marginBottom: "15px",
            "@media (max-width:1050px)": {
              fontSize: "16px",
            },
            "@media (max-width:880px)": {
              fontSize: "14px",
            },
            "@media (max-width:740px)": {
              fontSize: "12px",
            },
          }}
        >
          Red Dragon Pizzeria
        </Typography>
        <Typography
          sx={{
            color: "secondary.light",
            fontSize: "18px",
            marginBottom: "15px",
            "@media (max-width:1050px)": {
              fontSize: "16px",
            },
            "@media (max-width:880px)": {
              fontSize: "14px",
            },
            "@media (max-width:740px)": {
              fontSize: "12px",
            },
            "@media (max-width:680px)": {
              fontSize: "10px",
            },
          }}
        >
          Making hot and ready fantasy inspired dishes since 2022.
        </Typography>
        <Grid
          container
          columns={4}
          sx={{
            width: "175px",
            "@media (max-width:740px)": {
              width: "100px",
            },
          }}
        >
          <Grid item xs={1}>
            <SocialIcons>
              <FacebookIcon
                sx={{
                  "@media (max-width:1050px)": {
                    width: "max(20px,20px)",
                    height: "max(20px,20px)",
                  },
                  "@media (max-width:880px)": {
                    width: "max(15px,15px)",
                    height: "max(15px,15px)",
                  },
                }}
                color="secondary.light"
              />
            </SocialIcons>
          </Grid>
          <Grid item xs={1}>
            <SocialIcons>
              <TwitterIcon
                sx={{
                  "@media (max-width:1050px)": {
                    width: "max(20px,20px)",
                    height: "max(20px,20px)",
                  },
                  "@media (max-width:880px)": {
                    width: "max(15px,15px)",
                    height: "max(15px,15px)",
                  },
                }}
                color="secondary.light"
              />
            </SocialIcons>
          </Grid>
          <Grid item xs={1}>
            <SocialIcons>
              <LinkedInIcon
                sx={{
                  "@media (max-width:1050px)": {
                    width: "max(20px,20px)",
                    height: "max(20px,20px)",
                  },
                  "@media (max-width:880px)": {
                    width: "max(15px,15px)",
                    height: "max(15px,15px)",
                  },
                }}
                color="secondary.light"
              />
            </SocialIcons>
          </Grid>
          <Grid item xs={1}>
            <SocialIcons>
              <InstagramIcon
                sx={{
                  "@media (max-width:1050px)": {
                    width: "max(20px,20px)",
                    height: "max(20px,20px)",
                  },
                  "@media (max-width:880px)": {
                    width: "max(15px,15px)",
                    height: "max(15px,15px)",
                  },
                }}
                color="secondary.light"
              />
            </SocialIcons>
          </Grid>
        </Grid>
      </ColumnOne>
      <ColumnTwo>
        <StyledFooterHeading>Explore</StyledFooterHeading>
        <StyledFooterNavLink to="/home">Home</StyledFooterNavLink>
        <StyledFooterNavLink to="/menu">Menu</StyledFooterNavLink>
        <StyledFooterNavLink to="/pizza-maker">
          Custom Pizza
        </StyledFooterNavLink>
      </ColumnTwo>
      <ColumnTwo>
        <StyledFooterHeading>Resources</StyledFooterHeading>
        <StyledLink href="https://www.kingarthurbaking.com/recipes/the-easiest-pizza-youll-ever-make-recipe">
          Dough Recipe
        </StyledLink>
        <StyledLink href="https://www.wikihow.com/Toss-Pizza-Dough">
          How to Throw Dough
        </StyledLink>
        <StyledLink href="https://www.allrecipes.com/recipe/17319/exquisite-pizza-sauce/">
          Pizza Sauce Recipe
        </StyledLink>
      </ColumnTwo>
      <ColumnTwo>
        <StyledFooterHeading>Contact</StyledFooterHeading>
        <ContactInfoContainer>
          <LocalPhoneIcon
            sx={{
              "@media (max-width:1050px)": {
                width: "max(20px,20px)",
                height: "max(20px,20px)",
              },
              "@media (max-width:880px)": {
                width: "max(15px,15px)",
                height: "max(15px,15px)",
              },
            }}
          />
          <StyledContactText>(555) 555-5555</StyledContactText>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <LocationOnIcon
            sx={{
              "@media (max-width:1050px)": {
                width: "max(20px,20px)",
                height: "max(20px,20px)",
              },
              "@media (max-width:880px)": {
                width: "max(15px,15px)",
                height: "max(15px,15px)",
              },
            }}
          />
          <StyledContactText>Middle Earth</StyledContactText>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <EmailIcon
            sx={{
              "@media (max-width:1050px)": {
                width: "max(20px,20px)",
                height: "max(20px,20px)",
              },
              "@media (max-width:880px)": {
                width: "max(15px,15px)",
                height: "max(15px,15px)",
              },
            }}
          />
          <StyledContactText>Email TBD</StyledContactText>
        </ContactInfoContainer>
      </ColumnTwo>
    </TopContainer>
  );
};
export default Footer;
