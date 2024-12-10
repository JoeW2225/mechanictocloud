import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const BuildTxt = () => {
    return (
        <>
        <Typography component='div'  sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I was enjoying implementing the features for the site and seeing it all come together. 
        Along the way I was learning things I had not previously seen. 
        Whether this was TypeScript errors, CSS properties or Next/React features/bugs. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I wanted to add three main MUI components to showcase some variety in the site for a better UX. 
        These main components were MUI&#39;s Paper, Accordion and Card. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            <ul>
                <li className='mt-2'><ArrowRightIcon/><strong>Paper</strong> I added in the home and <div className='ml-2'>about pages</div></li>
                <li><ArrowRightIcon/><strong>Accordion</strong> used in the Project page</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Card</strong> implemented in the Journal <div className='ml-2'>page</div></li>
            </ul>
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Although the documentation example code was a great help to get started, 
        it still required a lot of tinkering to get it to sit nicely on the page. 
        I would include extra MUI elements such as the Grow transition feature. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Over all it has been a great learning opportunity and I still have many notes to write-up.
        </Typography>
        </>
        
        

    )
}