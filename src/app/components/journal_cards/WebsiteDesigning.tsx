'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import homeTheme from '@/app/styles/homeTheme';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import * as Designing from '@/app/library/journal_card_content/websiteDesigningTxt'

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

//? undefined error on expand as not used in TSX, used the following to disable:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandMore = styled(({ expand, ...other }: ExpandMoreProps) => (
    <IconButton {...other} />
))(({ theme, expand }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function WebsiteDesigningCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={homeTheme}>
        <Card sx={{ maxWidth: 380, margin: 4 }}>
        <CardHeader sx={{ 
            '.MuiCardHeader-title':{
                fontFamily: 'platypi',
                color: 'rgb(var(--foreground))',
                fontSize: '1.1rem',
            }, 
            '.MuiCardHeader-subheader': {
                fontFamily: 'platypi',
                color: 'rgba(23, 58, 94, 1)'
            }  
        }}

            avatar={
            <Avatar sx={{ backgroundColor:'rgba(5, 126, 208)' }} aria-label="plus in a screen">
                <AddToQueueIcon />
            </Avatar>
            }
            title="My First Project: The Website"
            subheader=" 14th November, 2024"
        />
        <CardMedia
            component="img"
            height="194"
            image="/images/growing.webp"
            alt="small plant in vase"
        />
        <CardContent>
            <Typography variant="body2" sx={{ fontFamily: 'platypi', color: 'rgb(var(--foreground))' }}>
            Cloud Resume Challenge: Designing<br></br> 
            After  
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>

            <CardContent>

            <Typography sx={{ 
                marginBottom: 2, 
                fontFamily: 'platypi', 
                color: 'rgb(var(--foreground))' 
                }}>The designing</Typography>
            
            <Designing.designingPOne />
            <Designing.designingPTwo />
            <Designing.designingPThree />
            <Designing.designingPFour />
            <Designing.designingPFive />
            
            </CardContent>

        </Collapse>
        </Card>
        </ThemeProvider>
    );
}