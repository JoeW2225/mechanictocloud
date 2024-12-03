import Typography from '@mui/material/Typography';

export const setupTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            Before starting the build, I began with the Kanban board. At first glance this seemed like 
            unnecessary extra work (considering I&#39;m the only one working on this project), 
            I believed it to be good practice to get into the motions of using it. 
            After all, working in this agile format was common practice in the real-world and didn&#39;t want to lose touch. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            This board will be used for the website build phase and the AWS Cloud phase, 
            so it was important for me to keep it updated. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            Previously I on my developer course we had been using Trello for our Kanban boards. 
            However, I randomly came across GitHub Projects (as I was curious) and decided to give it ago. 
            This being more of a convince as it was on the same platform as the repository. 
            Plus it gets me used to using different platforms, as the saying goes; get good at the digging, 
            not just using a shovel. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I then began setting up the Next app, followed by dependencies. One of which being the MUI. 
        This caused a bit of a headache as I ended up getting NPM errors around depreciation. 
        Long story short, after some Googling and forum searching due to React recently releasing version 19 
        (being in its RC phase, RC being Release Candidate which is after the Beta phase 
        but before the stable official release), I changed the version of my React to the last stable version (18). 
        This fixed the issue.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Having set up the folders and files, it was time in this early phase to link it up to my new empty GitHub repo. 
        Once complete I would work on a separate branch and then merge it to main (again,  
        by getting into the swing of doing it this way as I have done in group projects. 
        Rather than just working direct on main).
        </Typography>
        </>
        
        

    )
}