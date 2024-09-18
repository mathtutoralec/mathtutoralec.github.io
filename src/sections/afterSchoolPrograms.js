import { Card, CardContent, Typography, Grid, Button, CardActions } from "@mui/material"

const programs = [
    {
        heading: "Math Club",
        text: "A club focusing on engaging activities and puzzles designed to enrich students' mathematical understanding while enhancing their enjoyment of the subject. With over a decade of experience teaching Math in the UK, I am passionate about fostering a genuine love for Math in students. Through this club, I aim to show students that Math extends beyond the classroom and can be both exciting and enjoyable. This club is intended for students in grades 4 through 7."
    },
    {
        heading: "Coding Club",
        text: "As a newly qualified computer programmer I recognize the immense value of coding skills. I regret not having learned to code earlier and want to provide students with the opportunity to start early. I will offer a beginner’s course in coding, guiding students through the fundamentals and leading them to create their own game. The course will cover key programming concepts such as loops, conditionals, and data types. This club is designed for students in grades 3 through 7."
    } 
]

function AfterSchoolPrograms() {

    return (

        <Grid container sx={{alignContent: "center", display: "flex", flexDirection:"column", marginBottom: "15px"}}>
        {programs.map((program) => {
            return (
                
                <Card sx={{ maxWidth: 700, margin: "0px 5px 15px", padding: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{textAlign: "center", fontWeight: "light"}}>
                    {program.heading}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: "left" }}>
                    {program.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{margin: "0 auto"}} variant="outlined" href="/afterschool/registration">Register</Button>
                </CardActions>
                </Card>
                
            )
        })}
    </Grid>
    )
}

export default AfterSchoolPrograms