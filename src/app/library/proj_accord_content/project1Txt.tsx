import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const MechanicToCloudTxt = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[130ch]">
            <div className="flex justify-center flex-col w-fit bg-none">
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                <strong>The Cloud Resume Challenge</strong>, created by Forrest Brazeal, is a project designed to help people gain 
                practical experience with cloud technologies and stand out as job candidates. It&#39;s not a traditional tutorial, 
                but rather a set of goals you need to achieve by figuring things out yourself. testing
                </Typography>
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                    <h2 className='text-2xl'>Why is it Different?</h2>
                    <ul className='mt-3'>
                        <li><ArrowRightIcon/><strong>Focus on Learning</strong> -  Unlike tutorials, the challenge pushes you 
                        to learn by doing and troubleshooting problems on your own. This &#39;trial by fire&#39; approach 
                        reinforces knowledge better than memorisation</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Open-ended Project</strong> - The challenge provides a roadmap but 
                        lets you figure out the details. This simulates real-world cloud engineering where you need to 
                        learn new things quickly and adapt</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Valuable for Everyone</strong> - The challenge benefits both beginners 
                        and experienced professionals. Beginners gain practical skills, while experienced professionals can 
                        learn new technologies and showcase their problem-solving abilities.</li>
                    </ul>
                </Typography>
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                    <h2 className='text-2xl mb-3'>What Does the Challenge Entail?</h2>
                    The challenge involves building a functional resume website hosted on AWS, covering the following:
                    <ul className='mt-3'>
                        <li><ArrowRightIcon/><strong>Certification</strong> - Earn the AWS Cloud Practitioner certification</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Build the website</strong> - Create a website using HTML and CSS</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Deploy to AWS</strong> - Host the website on an Amazon S3 static website</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Secure the website</strong> - Use HTTPS with CloudFront for secure access</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Connect a custom domain</strong> - Register a domain name and point it to 
                        your website</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Add a visitor counter</strong> - Implement a visitor counter using 
                        Javascript</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Store visitor data</strong> - Use a database (DynamoDB) to store 
                        visitor count data</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Create an API</strong> - Build an API (API Gateway & Lambda) 
                        to interact with the database</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Use Python</strong> - Write the back-end logic in Python for the API</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Write Tests</strong> - Ensure the code functionality with unit tests</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Use Infrastructure as Code (IaC)</strong> - Define your cloud infrastructure 
                        using AWS Serverless Application Model (SAM)</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Version Control</strong> - Manage your code using a Github repo</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Automate Deployment (CI/CD)</strong> - Set up Github Actions to 
                        automate code testing and deployment</li>
                        <li className='mt-2'><ArrowRightIcon/><strong>Share Your Experience</strong> - Write a blog post detailing your 
                        learning experience during the challenge</li>
                    </ul>
                </Typography>
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                <h2 className='text-2xl mb-3'>My Implementation</h2>
                There are particular areas I did differently. For example the website build, this was made using Next.js, 
                Material UI as well as CSS and Tailwind (tapping into the skills learnt from my software developer course).
                </Typography>
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                For the cloud, I added AWS CodeBuild and SSM Parameter Store (storing env variables) to automate the static folder creation 
                (npm run build). The CodeBuild phase was particularly challenging as I had never used it before, especially getting my head around
                the buildspec.yml file (This file being a set of build instructions).
                </Typography>
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                Most of these changes I had to do differently from the guide primarily due to the fact I was using Next.js, not vanilla
                HTML, CSS and JavaScript.
                </Typography>
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                I decided after the hosting stage to do the CI/CD pipeline first, then the API for the counter. 
                Reason being is that the counter was going to require myself editing the code base, followed by pushing the changes. 
                I though this would be a good way of putting my freshly implemented pipeline to the test.
                </Typography>
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                <h2 className='text-2xl mb-3'>Diagrams & Designs</h2>
                The following images below are the cloud architectural diagrams with draw.io, along with my low and high-fidelity 
                designs using Ok! So... and Figma.<br></br> As you can see, the general structure of the site is very similar to the 
                final product, but I have also made a number of changes during the building stage.
                </Typography>
            </div>
        </div>
    )
}