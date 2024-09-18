import { Divider } from "@mui/material"
import AfterSchoolHeader from "../sections/afterSchoolHeader"
import AfterSchoolPrograms from "../sections/afterSchoolPrograms"
function AfterSchoolPage() {
    return (
        <>
        <AfterSchoolHeader />
        <Divider variant="middle" sx={{margin: "30px"}}/>
        <AfterSchoolPrograms />
        </>
    )
}

export default AfterSchoolPage