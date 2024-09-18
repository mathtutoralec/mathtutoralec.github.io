import { Container, Typography } from "@mui/material"

function TutoringHeading() {
    return (
        <Container>
            <Typography variant="h4" sx={{
                display: "flex", 
                textAlign: "center", 
                margin: "30px 0 10px", 
                fontWeight: 300, 
                color: "#2c338"
                }}>Working with individuals to provide personalised learning and enjoyment of Maths.</Typography>
            <Typography variant="body1" sx={{
                margin: "30px",
                textAlign: "justify"
            }}>With over a decade of experience as a dedicated math teacher, I specialize in boosting students' confidence 
            and proficiency in mathematics. I recognize that each student has unique learning needs, and I tailor my approach 
            to address those individual requirements. By providing regular assessments, personalized explanations, and clear, 
            effective communication, I help students make significant strides in their understanding of math. My goal is to 
            enhance each student's confidence and enjoyment of the subject, fostering a lifelong passion for mathematics.</Typography>
        </Container>
    )
}

export default TutoringHeading