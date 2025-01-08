import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const HostingTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Hosting the site was more difficult than I had anticipated. Whilst I had hosted a static site before on AWS, 
        I did so in a different manner. Most tutorials will effectively tell you to have your hosting S3 bucket open so 
        that CloudFront (CF) can then access and distribute your site. However, the one major problem with this method 
        is your leaving your hosting bucket exposed. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        To avoid this as I found out you can use AWS Origin Access Control (OAC) feature. 
        What this means is that the hosting bucket can be locked down, but still gives access to CF to be able to 
        access the objects and use for hosting the site. Although a more complex set-up, it&#39;s far more beneficial. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        It took sometime to get it to work, as well as some Googling. Long story short you need to use CF Functions to 
        get the routing of the website to work. This is because the way in which CF routes the site is different to 
        how Next.js does it. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        It took sometime to get it to work, as well as some Googling. Long story short you need to use CF Functions to 
        get the routing of the website to work. This is because the way in which CF routes the site is different to 
        how Next.js does it. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        If you don&#39;t, I found it will load the initial landing page (/), but if you click on any other page link in your 
        navigation bar like &#39;about&#39; for example, it will change the URL but load the content of the landing page.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        That is where CF Functions comes in, I would recommend reading this guide:
        <ul>
            <li><ArrowRightIcon/>
            <a href="https://medium.com/@amardewri/solving-url-rewriting-challenges-for-static-next-js-sites-ssg-on-aws-s3-and-aws-cloudfront-55fec9fe04ed"
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'underline' }}> medium.com
            </a>
            </li>
        </ul>
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        The same goes with Next/Image tags, this needs to be included in your CF Function, as well as a image-loader file 
        in your code base and next.config file:
        <ul>
            <li><ArrowRightIcon/>
            <a href='https://nextjs.org/docs/app/api-reference/config/next-config-js/images'
            target='_blank'
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}> nextjs.org 
        </a>
        </li>
        </ul>
        </Typography>
        </>
        
        

    )
}