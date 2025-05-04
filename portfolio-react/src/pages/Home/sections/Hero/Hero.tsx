import { styled } from "@mui/material/styles";
import Avatar from "../../../../assets/images/image.jpg";
import { Container, Grid, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    padding: "20px",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%", 
    maxWidth: "300px",
    borderRadius: "50%",
    display: "block",
    margin: "0 auto", 
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} alt="Marcelo L Freitas" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Marcelo L Freitas
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                I'm a Front End Developer
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                  >
                    Download CV
                  </Button>
                </Grid>

                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<MailOutlineIcon />}
                  >
                    Contact Me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
