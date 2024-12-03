import Typography from '@mui/material/Typography';

export const InitialTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I first began with the landing page. I had decided that rather than having users arriving straight 
        onto the homepage of the site and seeing the content, I would have them get to the landing page. 
        This page was essentially a title and a &#39;click here to enter&#39; button (Although I would dress this up a bit), 
        reason being is that the button would be a visitor counter. This count (being important to the CRC) 
        would be stored on a RDS database and displayed on the website. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        The other way I was doing it before, and what the guide mentions is to basically set it 
        up so that your monitoring the site itself and counting the users arriving on the site (without a button press).
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        In the end I decided on a button press to count the numbers as this was going to be easier to implement. 
        A stretch goal would be to remove the button and add the monitoring of users arriving to the site.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I added the homepage mainly so I could add the navigation bar, with the dark/light mode 
        (this was to prove to be a pain). Because of Next running everything on the server by default, 
        if you implemented the dark mode like you would if on vanilla React you would get a flickering.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        During some Googling on how to correctly implement this, I found a great guide (Light & Dark Mode in Next.js 
            App Router + Tailwind with No Flicker | Dave Gray).
        </Typography>
        </>
        
        

    )
}