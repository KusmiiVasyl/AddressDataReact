import './NotFound.css'
import {Button, Paper, Typography} from '@mui/material'
import {Home} from '@mui/icons-material'


export const NotFound = () => {


    return (
        <Paper elevation={10}
               sx={{
                   margin: '0 auto',
                   height: `50vh`,
                   width: '50vh'
               }}
               style={{
                   padding: 8,
                   color: "#ff8566",
                   backgroundColor:  "#330000",
               }}>
            <div className="containerNotFound">
                <Typography variant="h4">Page not found</Typography>
                <Typography variant="h2">404</Typography>
                <Typography variant="subtitle1">
                    error
                </Typography>
                <Button
                    color="success"
                    aria-label="home"
                    href="/"
                    style={{marginTop: 30}}
                >
                    <Home style={{height: '70px', width:'70px'}}/>
                </Button>
            </div>
        </Paper>
    )
}