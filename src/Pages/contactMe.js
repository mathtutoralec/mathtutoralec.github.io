import { Card, Typography, Container } from "@mui/material"
import ContactForm from "../sections/contactForm"
import ContactDetails from "../sections/contactDetails"
import { useState } from "react"

function ContactMePage() {

    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)

    let content;
    if (!sent && !error) {
        content = (
        <>
        <ContactDetails sx={{padding: "0 24px"}}/>
        <Container fixed maxWidth="2xl">
        <Card sx={{padding: 3, margin: "15px 0 20px", placeSelf: "center"}}>
            <ContactForm setSent={setSent} setError={setError} />
        </Card>
        </Container>
        </>)
    } else if (sent) {
        content = (
            <>
                <Card className="mt-5 container self-center p-5">
                    <Typography>Thank you! Message sent. I will respond shortly.</Typography>
                </Card>
            </>
        )
    } else if (error) {
        content =             <>
        <Card className="mt-5 container self-center p-5">
            <Typography>Error sending message, please try again.</Typography>
        </Card>
    </>
    }

    return (
        <>
            {content}
        </>
    )
}

export default ContactMePage