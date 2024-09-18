import { Card, Typography } from "@mui/material"
import { useState } from "react"
import RegistrationForm from "../sections/registrationForm"

function RegistrationPage() {

    const [sent, setSent] = useState(false)
    const [error, setError] = useState(false)

    let content;
    if (!sent && !error) {
        content = (
        <>
        <Card className="mt-5 container self-center p-5">
            <RegistrationForm setSent={setSent} setError={setError} />
        </Card>
        </>)
    } else if (sent) {
        content = (
            <>
                <Card className="mt-5 container self-center p-5">
                    <Typography>Thank you for registering your interest, I will respond shortly.</Typography>
                </Card>
            </>
        )
    } else if (error) {
        content =             <>
        <Card className="mt-5 container self-center p-5">
            <Typography>Error registering, please try again.</Typography>
        </Card>
    </>
    }

    return (
        <>
            {content}
        </>
    )
}

export default RegistrationPage