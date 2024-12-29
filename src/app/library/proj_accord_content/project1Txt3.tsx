import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const MechanicToCloudTxt3 = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[130ch]">
            <div className="flex justify-center flex-col w-fit bg-none">
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                    <ul className='mt-3'>
                        <li>1. Changes are made in the code base (in this case using the VS Code IDE) of the site</li>
                        <li className='mt-2'>2. These changes are then pushed to the GitHub Repository (Repo), 
                        then subsequently merged with the main branch when ready </li>
                        <li className='mt-2'>3. Once merged with main, this in turn triggers AWS CodePipeline 
                        to begin its pipeline</li>
                        <li className='mt-2'>4. CodePipeline is configured to monitor the repo for changes. 
                        Merges trigger CodePipeline which initiates AWS CodeBuild (you can also use third party 
                        tools such as Jenkins if you wish),  then it begins executing its buildspec.yml file</li>
                        <li className='mt-2'>5. The buildspec file contains a list of instructions written in yaml. 
                        This is the blueprint which will not only build a cloned version of the site, 
                        but also refresh the CF (CloudFront) caches. This file is broken down into various phases: 
                        <strong> install</strong>, <strong>pre_build</strong>,<strong> build</strong>, <strong>post_build</strong>, 
                        and <strong>artifacts</strong>. This installs all necessary dependencies that are required to generate a build artifact 
                        (the static site files). 
                        You must state all commands that are needed, for this site&#39;s build I needed the following:</li>
                        <li className='mt-2'><ArrowRightIcon/>5.1 The buildspec file accesses the env variables via the SSM Parameter Store 
                        (which is free to use, while the alternative Secrets Manager incurs a cost)</li>
                        <li className='mt-2'><ArrowRightIcon/>5.2 A Docker image as the build environment (provided by AWS or custom)</li>
                        <li className='mt-2'><ArrowRightIcon/>5.3 Node.js run-time environment</li>
                        <li className='mt-2'><ArrowRightIcon/>5.4 AWS CLI to execute the latter AWS specific commands</li>
                        <li className='mt-2'><ArrowRightIcon/>5.5 npm package manager</li>
                        <li className='mt-2'><ArrowRightIcon/>5.6 Next.js commands to build the static files</li>
                        <li className='mt-2'><ArrowRightIcon/>5.7 Using AWS CLI, removing old static site files and replacing them with the new ones</li>
                        <li className='mt-2'><ArrowRightIcon/>5.8 Using AWS CLI, refreshing the CF caches to reflect the new site changes</li>
                        <li className='mt-2'>6. CodePipeline jumps back in after CodeBuild has finished</li>
                        <li className='mt-2'>7. Deploys the static files to the S3 bucket</li>
                    </ul>
                </Typography>
            </div>
        </div>
    )
}