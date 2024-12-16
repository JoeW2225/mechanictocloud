'use client'
import * as React from 'react';
import { useEffect } from 'react';
import { Grow, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../../styles/homeTheme';
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
import FoundationIcon from '@mui/icons-material/Foundation';
import * as Build from '../../library/journal_card_content/websiteBuildTxt'

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

export const WebsiteBuildCard = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={homeTheme}>
        <Card sx={{ maxWidth: 340, margin: 2 }}>
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
                <FoundationIcon />
            </Avatar>
            }
            title="The Site: Main Build"
            subheader=" 2nd December, 2024"
        />
        <CardMedia
            component="img"
            height="194"
            image="/images/mainBuild.webp"
            alt="construction site"
        />
        <CardContent>
            <Typography variant="body2" sx={{ fontFamily: 'platypi', color: 'rgb(var(--foreground))' }}>
            Cloud Resume Challenge: Main Build
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2, fontFamily: 'platypi', color: 'rgb(var(--foreground))' }}>
            Getting the bulk of the site completed and adding content. Taking longer than anticipated, 
            but turning out better than I had envisioned.
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
                }}>The Main Build</Typography>
            
            <Build.BuildTxt />
            
            </CardContent>

        </Collapse>
        </Card>
        </ThemeProvider>
    );
}
export default function GrowSetupCard() {
    // Set animation to false before component mount:
    const [checked, setChecked] = React.useState(false)

    // Trigger animation on mount:
    useEffect(() => {
        setChecked(true)
    },[])

    return (
        <>
        <Box 
            sx={{ 
                height: 'auto', 
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                position: 'absolute',
                zIndex: -10,
            }}
        ></Box>
        <Grow
        in={checked}
        timeout={3000}
        style={{ transformOrigin: 'center center' }}
        >
            <div>
                <WebsiteBuildCard />
            </div>
            
        </Grow>
        </>
    );
}