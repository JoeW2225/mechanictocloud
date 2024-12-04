import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const planningTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            In the early stages of a project build, I initially like to get pen to paper. In my case a whiteboard. 
            I find it quick and easy to get ideas down and erase them as and when needed. 
            I find using tools like Figma is a little too overwhelming at such an early stage and can get easily distracting.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            I made a list of the tech stack I were to use on this project. This being:
            <ul className='mt-3'>
                <li><ArrowRightIcon/><strong>Source Control</strong> - GitHub</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Framework</strong> - Next.js</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Language</strong> - TypeScript</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Cloud</strong> - AWS</li>
                <li className='mt-2'><ArrowRightIcon/><strong>IaaC tool</strong> - Terraform</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Database</strong> - Relational, PostgreSQL</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Testing</strong> - Playwright or Cypress</li>
                <li className='mt-2'><ArrowRightIcon/><strong>UI library</strong> - Material UI (MUI)</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Styling</strong> - combination of Tailwind &  <div className='ml-2'>CSS (.module)</div></li>
            </ul>
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            Organisation:
            <ul className='mt-3'>
                <li><ArrowRightIcon/><strong>Notes</strong> - Obsidian</li>
                <li className='mt-2'><ArrowRightIcon/><strong>Designing</strong> - Ok! So..., Figma, draw.io <div className='ml-2'>and my whiteboard</div></li>
                <li className='mt-2'><ArrowRightIcon/><strong>Project management:</strong></li>
                <li className='ml-2'><strong>Kanban board</strong> - GitHub Projects</li>
            </ul>
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
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