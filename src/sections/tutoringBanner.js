import { Box, Container, Typography } from "@mui/material"
import backgroundImage from '../images/anoushka-puri-f1YfrZ1o2r8-unsplash.jpg'

function TutoringBanner() {
    const textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"

    return (
        <Box sx={{ height: "400px", overflow: "hidden", position: "relative", display: "flex"}}>
            <img src={backgroundImage} alt="background image" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom", position: "absolute", bottom: 0, zIndex: 0 }}/>
            <Container sx={{zIndex: 2, position: "relative", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <Typography sx={{color: "white", fontWeight: 300, textShadow: `${textShadow}`, marginBottom: 2, paddingLeft: "50px"}} variant="h3">Private Math Tutoring</Typography>
                <Typography sx={{color: "white", fontWeight: 300, textShadow: `${textShadow}`, marginBottom: 2, paddingLeft: "50px" }} variant="h3">Empowering Minds</Typography>
                <Typography sx={{color: "white", fontWeight: 300, textShadow: `${textShadow}`, paddingLeft: "50px" }} variant="h3">Inspiring Confidence</Typography>
            </Container>
        </Box>
    )
}

export default TutoringBanner