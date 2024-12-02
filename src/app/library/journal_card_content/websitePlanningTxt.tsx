import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const planningPOne = () => {
    return (
        <Typography sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            In the early stages of a project build, I initially like to get pen to paper. In my case a whiteboard. 
            I find it quick and easy to get ideas down and erase them as and when needed. 
            I find using tools like Figma is a little too overwhelming at such an early stage and can get easily distracting.
        </Typography>
    )
}

export const planningPTwo = () => {
    return (
        <Typography sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            I made a list of the tech stack I were to use on this project. This being:
            <ul className='mt-3'>
                <li><ArrowRightIcon/>Source Control - GitHub</li>
                <li className='mt-2'><ArrowRightIcon/>Framework - Next.js</li>
                <li className='mt-2'><ArrowRightIcon/>Language - TypeScript</li>
                <li className='mt-2'><ArrowRightIcon/>Cloud - AWS</li>
                <li className='mt-2'><ArrowRightIcon/>IaaC tool - Terraform</li>
                <li className='mt-2'><ArrowRightIcon/>Database - Relational, PostgreSQL</li>
                <li className='mt-2'><ArrowRightIcon/>Testing - Playwright or Cypress</li>
                <li className='mt-2'><ArrowRightIcon/>UI library - Material UI (MUI)</li>
                <li className='mt-2'><ArrowRightIcon/>Styling - combination of Tailwind &  <p className='ml-2'>CSS (.module)</p></li>
            </ul>
        </Typography>
    )
}

export const planningPThree = () => {
    return (
        <Typography sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            Planning:
            <ul className='mt-3'>
                <li><ArrowRightIcon/>Notes - Obsidian</li>
                <li className='mt-2'><ArrowRightIcon/>Designing - Ok! So..., Figma, draw.io <p className='ml-2'>and my whiteboard</p></li>
                <li className='mt-2'><ArrowRightIcon/>Project management: </li>
                <li className='ml-2'>Kanban board - GitHub Projects</li>
            </ul>
        </Typography>
    )
}

export const planningPFour = () => {
    return (
        <>
        <Typography sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            AWS wise, I created a list of the main services I would need (however, subject to change):
            <ul className='mt-3'>
                <li><ArrowRightIcon/>Route 53</li>
                <li className='mt-2'><ArrowRightIcon/>CloudFront</li>
                <li className='mt-2'><ArrowRightIcon/>S3</li>
                <li className='mt-2'><ArrowRightIcon/>Lambda</li>
                <li className='mt-2'><ArrowRightIcon/>API Gateway</li>
                <li className='mt-2'><ArrowRightIcon/>IAM</li>
                <li className='mt-2'><ArrowRightIcon/>RDS</li>
                <li className='mt-2'><ArrowRightIcon/>AWS CodePipeline</li>
                <li className='mt-2'><ArrowRightIcon/>CloudWatch</li>
            </ul>
            </Typography>
            
        </>
    )
}