import { Box, Button, Container, IconButton, Stack } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


const MuiButton = () => {

    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction={"row"}>
                <Button variant="outlined">Outline</Button>
                <Button variant="contained">Containerd</Button>
                <Button href="https://google.com">Text</Button>
            </Stack>
            <Stack spacing={1} >
                <Button variant="contained" color="primary"> primary</Button>
                <Button variant="contained" color="secondary"> secondary</Button>
                <Button variant="contained" color="warning"> warning</Button>
                <Button variant="contained" color="error"> error</Button>
                <Button variant="contained" color="info"> infor</Button>
                <Button variant="contained" color="success">success</Button>
            </Stack>
            <Stack display={"block"} spacing={2} direction={"row"}>
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>
            </Stack>
            <Stack spacing={2}>
                <Button startIcon={<AccessAlarmIcon />}>Send</Button>
                <Button endIcon={<ThreeDRotation />}>Send</Button>
                <Button endIcon={<SendIcon />} disabled>Send</Button>
                <IconButton aria-label="hi" size="small">
                    <SendIcon />
                </IconButton>
            </Stack>

        </Stack>

    )

}

export default MuiButton