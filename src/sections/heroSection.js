import { Box, Grid, Button } from "@mui/material"
import tutoringImage from "../images/pexels-cottonbro-5184945.jpg"

function HeroSection() {
    return (
        <Box className="flex flex-grow flex-row w-full relative top-[-68.5px] justify-middle self-center items-center align-middle text-gray-600">
            <Grid container>
                <Grid item xs={12} md={6} className="flex-col h-svh px-12 pt-20 md:pt-0 place-content-center text-center md:text-left">
                    <p className="mb-5 text-6xl font-light">Alec Scott</p>
                    <p className="mb-7 text-6xl font-bold">Tutoring Services</p>
                    <p className="mb-7 text-6xl font-bold">After School Programs</p>
                    <Button sx={{justifyContent: "space-between", marginTop: "2rem", display: {xs:"none", md:"inline-flex"}}} variant="outlined" href="#aboutme">Find out more</Button>
                </Grid>
                <Grid item xs={12} md={6} className="hidden md:block">
                    <img src={tutoringImage} alt="tutoring pic" className="block  z-0 h-svh w-full object-cover object-center rounded-bl-[4rem]"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HeroSection