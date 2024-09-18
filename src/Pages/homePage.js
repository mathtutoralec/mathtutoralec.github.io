import { Box } from "@mui/material"
import HeroSection from "../sections/heroSection"
import AboutMe from "../sections/aboutMe"
function HomePage() {
    return (
        <Box className="flex flex-grow flex-col">
            <HeroSection />
            <AboutMe />
        </Box>
    )
}

export default HomePage