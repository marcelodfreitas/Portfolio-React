import { styled } from "@mui/material/styles";
import Avatar from "../../../../assets/images/image.jpg";
import { Container, Grid, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/system";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
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
    border: "3px solid #4f8e3e",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box position="relative" width="100%" height="auto">
                <Box position="absolute" width="150%" top={-100} right={0}>
                  <AnimatedBackground />
                </Box>

                <Box zIndex={99} position="relative">
                  <StyledImg src={Avatar} alt="Marcelo L Freitas" zIndex />
                  </Box>
              </Box>
            </Grid>

            {/* Texto e Botões */}
            <Grid item xs={12} md={8}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
                pb={2}
                sx={{
                  fontSize: {
                    xs: "2rem", // Tamanho da fonte no mobile
                    sm: "3rem", // Tamanho da fonte em telas pequenas
                    md: "5rem", // Tamanho da fonte em telas médias
                  },
                }}
              >
                Marcelo L Freitas
              </Typography>
              <Typography
                color="secondary"
                variant="h2"
                textAlign="center"
                sx={{
                  fontSize: {
                    xs: "1.5rem", // Tamanho da fonte no mobile
                    sm: "2rem", // Tamanho da fonte em telas pequenas
                    md: "2.8rem", // Tamanho da fonte em telas médias
                  },
                }}
              >
                I'm a Front End Developer
              </Typography>

              <Grid container spacing={2} marginTop={3} justifyContent="center" pt={3}>
                <Grid item>
                  <Button variant="contained" color="primary" startIcon={<DownloadIcon />}>
                    Download CV
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="contained" color="secondary" startIcon={<MailOutlineIcon />}>
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
