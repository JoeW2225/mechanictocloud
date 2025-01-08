import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const CICDTxt = () => {
    return (
        <>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        This presented its own unique set of challenges to try and implement. Before I began setting up the CICD pipeline 
        I thought about what I was doing manually, then what was going to be require to automate this. Up until now 
        I was manually doing the following: 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
            <ul>
                <li className='mt-2'><ArrowRightIcon/>Updating the codebase via VS Code</li>
                <li className='mt-2'><ArrowRightIcon/>Pushing the changes to GitHub</li>
                <li className='mt-2'><ArrowRightIcon/>Executing npm run build to produce <div className='ml-2'>the static out/ folder</div></li>
                <li className='mt-2'><ArrowRightIcon/>Deleting the old folder in S3 and <div className='ml-2'>replacing it with the new one</div></li>
                <li className='mt-2'><ArrowRightIcon/>Invalidating CloudFront to refresh <div className='ml-2'>it&#39;s cache to display the new site changes</div></li>
            </ul>
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        Now I knew in comparison to the vanilla version of the challenge (not using any frameworks), 
        I was going to require an extra step. This extra step being AWS CodeBuild. Having never used it before and doing some 
        research, I needed to configure a buildspec.yml file. This being a list of instructions that will be used by 
        CodeBuild to execute the automation.   
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        I found these two sites being useful to get started:
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        <ul>
            <li className='mt-2'><ArrowRightIcon/><a href='https://karandeepsingh.ca/post/aws-codebuild-advanced-buildspec-guide/#understanding-buildspecyaml'
            target='_blank'
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}>karandeepsingh.ca||buildspec.yaml
            </a></li>
            <li className='mt-2'><ArrowRightIcon/><a href='https://medium.com/@saurabhdahibhate50/mastering-aws-codebuild-a-step-by-step-guide-a7cf9e037284'
            target='_blank'
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline' }}>medium.com||AWS CodeBuild
            </a></li>
        </ul>
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        It was the process of making this file combined with a lot of trail-and-error I began to realise, 
        boy I wished I started this project in a Docker container rather than my local PC. Have I had done that, 
        it would have made this process far simpler. The struggle was getting not only the project&#39;s static out/ folder, 
        but setting up the run-time environment correctly. So this involved making sure node was installed, npm (and the unzip package) 
        and AWS CLI which was needed to execute S3 and CloudFront commands.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        An extra step I took was to put my environment variables in AWS Systems Manager:  Parameter Store. 
        I did this for best practice, although I have my buildspec file only accessible via AWS. 
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        You can have the file stored on the GitHub repo, the advantages of this are useful to track commits/changes to it, 
        disaster recovery in case the AWS setup gets corrupted or deleted and on group projects where other developers can 
        easily access the file to reference the exact build steps used.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        After a lot of backwards and forwards, I eventually got there and it finally began to work.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        <strong>Note to self:</strong> start the project in a containerised environment, this makes things way easier when you want to automate it.
        </Typography>
        <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
        It was great to see what I had previously done manually, work automatically.
        </Typography>
        </>
        
        

    )
}