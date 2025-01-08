import Typography from '@mui/material/Typography';

export const ApiTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Now in the guide, This step actually comes before CI/CD. But I decided to do this after mainly because I could 
        test out my pipeline to see if it was working.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Much like the CI/CD process, I was unfamiliar with setting up API Gateway, so again I began to do some research. 
        I found the YouTuber <a href='https://www.youtube.com/@BeABetterDev' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'underline'}}>
        BeABetterDev</a> had some really helpful tutorials on many AWS services and how to implement them. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Doing both the <strong>Lambda</strong> function and JS codebase was a challenge and required a lot of trial and error. 
        This was a great learning process when testing these areas. First directly testing the Lambda function,
        making sure the code does what it&#39;s supposed to do.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Then testing it externally via <strong>Postman</strong> on both GET and POST HTTP requests. Once this was returning the data, 
        it was a matter of integrating this with my code base. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        During the process of making the visitor count, I learnt about a React Hook called useContext. 
        This hook provides a convenient way to share data, such as the visitor count, across multiple components within my codebase.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Using these serverless services was a valuable learning opportunity, understanding more about how they work.
        </Typography>
        </>
        
        

    )
}