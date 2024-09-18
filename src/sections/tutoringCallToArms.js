import { Container, Typography, Link } from "@mui/material"

function TutoringCalltoArms() {
    return (
        <Container>
            <Typography  variant="body1" sx={{
                margin: "30px",
                textAlign: "justify"
            }}>
            For more information and to discuss how we can tailor these programs to your needs, please feel free to <Link href="/contact-me">contact me</Link>. Rates start at $50/hr, depending on the grade.
            </Typography>
        </Container>
    )
}

export default TutoringCalltoArms