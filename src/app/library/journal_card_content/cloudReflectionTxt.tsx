import Typography from '@mui/material/Typography';

export const ReflectionTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I&#39;m happy with the results both from a web and cloud build point-of-view. It was certainly a challenge and I have 
        learnt a great deal from doing it.  
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        My Next steps are to proceed with the final phase, moving away from the &#39;click-ops&#39; of 
        using the AWS web console and onto using IaC. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I will be using <strong>Terraform</strong> in order to do this. This step will have it&#39;s own difficulties. 
        Terraform has it&#39;s own syntax and approach, requiring another larning curve.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I look forward to being able to achieve this, as I am aware many companies/organisations use IaC for their applications 
        and Cloud environments. 
        </Typography>
        </>
    )
}