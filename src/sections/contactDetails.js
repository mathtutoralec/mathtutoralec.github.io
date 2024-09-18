import profile from "../images/profile1.JPG"
import { Paper, Typography, Container, Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";

function ContactDetails({ sx }) {
    return (
    <Box className="container self-center" sx={sx}>
    <Paper sx={{maxWidth: 500, overflow: "hidden", marginTop: 3}}>
        <Box sx={{display: "flex", flexDirection: "row", flexShrink: "initial"}}>
            <Box sx={{overflow: "hidden"}} >
                <img src={profile} alt="prfile pic" style={{overflow: "hidden", height: "250px", objectFit: "cover", objectPosition: "center"}}/>
            </Box>
            <Box sx={{marginRight: 1, paddingLeft: 3, display: "flex", flexDirection: "column", justifyContent: "center", rowGap: 2}}>
                <Typography variant="h5" sx={{fontWeight: "300"}}>Alec Scott</Typography>
                <Typography variant="body1" gutterBottom>mathtutoralec@gmail.com</Typography>   
                <Typography>+1(236) 990-1856</Typography>
                <Typography>North Vancouver, BC</Typography>
            </Box>
        </Box>
    </Paper>
    </Box>
    )
}

export default ContactDetails