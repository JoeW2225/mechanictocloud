'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
        props: ({ expand }) => !!expand,
        style: {
            transform: 'rotate(180deg)',
        },
        },
    ],
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 380 }}>
        <CardHeader sx={{ 
            '.MuiCardHeader-title':{
                fontFamily: 'platypi',
                color: 'rgb(var(--foreground))',
                fontSize: '1.1rem',
            }, 
            '.MuiCardHeader-subheader': {
                fontFamily: 'platypi',
                color: 'rgb(var(--textColorLight))'
            }  
        }}

            avatar={
            <Avatar sx={{ backgroundColor:'rgba(5, 126, 208)' }} aria-label="plus in a screen">
                <AddToQueueIcon />
            </Avatar>
            }
            title="My First Project: CRC"
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
            Cloud Resume Challenge:<br></br> After completing my Software Developer course, this is my first, true, independent project. 
            I am looking forward to putting the skills and lessons learnt into practice.  
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
                color: 'rgb(var(--textColorLight))' 
                }}>The Approach</Typography>

            <Typography sx={{ marginBottom: 2 }}>
            This wasn&#39;t my first attempt at the Cloud Resume Challenge (CRC). I had started a few months back,
            having got to the stage of learning how I could deploy my Cloud set-up as IaaC (using Terraform).
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
            However, I had stopped due to a fantastic opportunity to push my journey further into the tech world 
            by enrolling in a 12 week Software Developer course (with the Tech Educators). 
            I would come to learn many aspects about full stack web development from the basics of
            JS, HTML, CSS, relational databases to React, Next and authentication tools like Clerk.
            </Typography>

            <Typography sx={{ marginBottom: 2 }}>
            This was a pretty intense course and coming from no coding experience what-so-ever, 
            proved to be a tough challenge indeed. The skills, knowledge and resources that I 
            had gathered from doing this course would be invaluable for when I was to go back to doing the CRC.
            </Typography>

            <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
            
            </CardContent>

        </Collapse>
        </Card>
    );
}