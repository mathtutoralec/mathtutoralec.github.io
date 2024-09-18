import { Typography, Container, Grid, Box } from "@mui/material"
import SchoolImage from "../images/pexels-polina-zimmerman-3747516.jpg"

function AfterSchoolHeader() {
    return (
        <>
        <Container sx={{margin: "15px auto", justifyContent: "center", display: "flex"}}>
            <Typography variant='h3' className="text-gray-600" sx={{fontWeight: "bold", textAlign: "center"}}>
                After School Programs
            </Typography>
        </Container>
        <Container maxWidth="2xl" fixed>
            <Grid container spacing={6} sx={{flexDirection: {xs: "column-reverse", lg:"row"}}}>
                <Grid item lg={6} sx={{display: "flex", alignItems: "center"}}>
                    <Typography variant="h6" sx={{textAlign: 'justify', padding: {xl: '0 50px'} }}>
                    At the heart of my educational philosophy is a deep commitment to inclusivity and 
                    exploration beyond the traditional classroom. Leveraging 
                    the school’s resources, including the library, I create enriching opportunities where 
                    students delve into innovative skills and concepts not typically covered in their daily 
                    curriculum. These programs are designed to ignite curiosity and foster a love for learning 
                    by offering hands-on experiences and real-world applications that make Math and computing 
                    come alive in exciting, unconventional ways.
                    </Typography>
                </Grid>
                <Grid item lg={6}><img src={SchoolImage} alt="school library" className="block h-full w-full object-cover object-center rounded-[2rem]"/></Grid>
            </Grid>
        </Container>
        </>    
)
}

export default AfterSchoolHeader