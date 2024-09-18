import { Box } from "@mui/material";
import TutoringHeading from "./tutoringHeading";
import TutoringAttributes from "./tutoringAttributes";
import TutoringCalltoArms from "./tutoringCallToArms";


function TutoringSection() {


    return (
        <>
        <Box>
            <TutoringHeading />
            <TutoringAttributes />
        </Box>
        <Box >
            <TutoringCalltoArms />
        </Box>
        </>
    )
}

export default TutoringSection