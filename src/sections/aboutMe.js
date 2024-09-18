import { Paper, Box, Button, Typography, Container } from "@mui/material"
import profilePic from '../images/9642D981-94D7-4211-A3A8-FEB37CCBE2F8_1_201_a.jpeg'

function AboutMe() {
    return (
        <Box sx={{marginBottom: "35px"}} id="aboutme">
                <Container maxWidth="xl" fixed>
                <Paper elevation={6} className="p-3">
                    <Box className="px-6 py-3">
                    <img src={profilePic} alt="profile pic" className="rounded-full max-h-24 sm:max-h-48 float-right m-2"></img>
                    <Typography variant="h4" sx={{fontWeight: "light"}}>About Me</Typography>
                    <Typography className="py-3">                
                    Welcome to my math tutoring corner!<br/><br/>
                    With over a decade of experience in teaching math, I've dedicated my career to helping students not only understand but 
                    truly enjoy the subject. My passion lies in building confidence and making math an engaging and positive experience for 
                    learners of all ages. I specialize in using innovative technologies and interactive methods to bring math to life and connect 
                    with students on their level.<br/><br/>
                    In 2022, my family and I made the exciting move to Canada, where I took a brief hiatus to embrace new challenges as a 
                    homemaker and delve into the world of coding. This journey has enriched my approach to teaching, allowing me to integrate 
                    cutting-edge technology and new perspectives into my tutoring sessions.<br/><br/>
                    Now, I'm thrilled to be back in the classroom, eager to inspire and support the next generation of math enthusiasts. Whether 
                    you're looking to strengthen your skills, tackle challenging concepts, or simply build a greater love for math, I'm here to 
                    help you every step of the way.<br/><br/>
                    Let's embark on this math adventure together!
                    </Typography>
                    <Button size="small" href="/contact-me" variant="outlined">Contact Me</Button>
                    </Box>
                </Paper>
                </Container>
        </Box>
    )
}

export default AboutMe