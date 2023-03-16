import './HomePage.css'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import {Home} from "@mui/icons-material";


export const HomePage = () => {

    return (
        <>
            <Home style={{height: '70px', width: '70px'}}/>
            <h1>Home Page</h1>
            <SentimentSatisfiedOutlinedIcon style={{
                height: '40%',
                width: '40%',
                marginTop: '40px',
                color: 'green'
            }}
            />
        </>
    )
}