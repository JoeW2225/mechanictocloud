import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const approachTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            This wasn&#39;t my first attempt at the Cloud Resume Challenge (CRC). I had started a few months back,
            having got to the stage of learning how I could deploy my Cloud set-up as IaaC (using Terraform).
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            However, I had stopped due to a fantastic opportunity to push my journey further into the tech world 
            by enrolling in a 12 week Software Developer course (with the Tech Educators). 
            I would come to learn many aspects about full stack web development from the basics of
            JS, HTML, CSS, relational databases to React, Next and authentication tools like Clerk.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            This was a pretty intense course and coming from no coding experience what-so-ever, 
            proved to be a tough challenge indeed. The skills, knowledge and resources that I 
            had gathered from doing this course would be invaluable for when I was to go back to doing the CRC.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                Rather than carry on from where I had left off, I decided to start again for two main reasons:
            </Typography>
            <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                1- As opposed to using a templated site like I did last time (as I knew nothing about web development), 
                I would create my own site from scratch. After all, I was now not only showcasing my knowledge in AWS, 
                but also as a Junior Developer.
            </Typography>
            <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                2- Going through the motions of setting up the Cloud side again. I was pretty rusty on the AWS side 
                of things as the course didn&#39;t touch on Cloud. It had be quite sometime since I had studied/worked 
                with AWS and like most things when you leave it for awhile, skill fade sets in.
            </Typography>
            <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            Still using the CRC guide book, I decided to get to work. I would split this project into two main segments:
            </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }} >
            <ArrowRightIcon/> The website build
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            <ArrowRightIcon/> The AWS deployment
        </Typography>
        </>
    )
}