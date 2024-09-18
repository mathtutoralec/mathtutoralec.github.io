import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material"
import ClockPic from "../images/pexels-padrinan-745365.jpg"
import Advanced from "../images/pexels-thisisengineering-3862130.jpg"
import Personalised from "../images/pexels-karolina-grabowska-5238079.jpg"
function TutoringAttributes() {

    const attributes = [
        {
            pic: ClockPic,
            heading: "Flexible times and locations",
            text: "Finding a convenient time and place for tutoring can be challenging. To accommodate students' needs, I offer flexible scheduling and can meet at various locations in and around the Edgemont area of North Vancouver."
        },
        {
            pic: Advanced,
            heading: "Grades 5 - 12",
            text: "With a decade of experience teaching advanced Math, I offer tuition for students in grades 5 through 12, including a range of advanced courses. Support for younger students is also available upon consultation."
        },
        {
            pic: Personalised,
            heading: "Personalised Approach",
            text: "My top priority is to support students based on their specific needs. Whether it's assistance with homework, reviewing past material, or advancing to new topics, I tailor my approach to meet each student's unique requirements."
        }
    ]

    return (
        <Grid container spacing={1} sx={{justifyContent: "center"}}>
            {attributes.map((attribute) => {
                return (
                    
                    <Card sx={{ width: 445, margin: "0px 5px 10px" }} variant="outlined">
                    <CardMedia
                        sx={{ height: 200 }}
                        image={attribute.pic}
                        title={attribute.heading}
                    />
                    <CardContent className="bg-slate-100">
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign: "center", fontWeight: "light"}}>
                        {attribute.heading}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: "justify" }}>
                        {attribute.text}
                        </Typography>
                    </CardContent>
                    </Card>
                    
                )
            })}
        </Grid>
    )
}

export default TutoringAttributes