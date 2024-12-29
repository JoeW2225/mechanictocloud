import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const MechanicToCloudTxt4 = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[130ch]">
            <div className="flex justify-center flex-col w-fit bg-none">
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                    <ul className='mt-3'>
                        <li>1. Users visit the site and enter via a button (in this case the door).</li>
                        <li className='mt-2'><ArrowRightIcon/>1.1 This button triggers a visitor count script in the code base which uses
                        &#34;GET&#34; & &#34;POST&#34; HTTP requests </li>
                        <li className='mt-2'>2. HTTP requests are routed through AWS API Gateway. 
                        The Gateway acts as the entry point for the HTTP requests, routing them to their appropriate endpoints</li>
                        <li className='mt-2'>3. The API Gateway GET & POST routes are both connected to a specific Lambda 
                        (an AWS managed &#39;serverless&#39; compute service) function. This function 
                        (which can be written in a variety of languages) fetches the count and adds a count to the AWS DynamoDB 
                        (a non-relational database) table</li>
                        <li className='mt-2'>4. Lambda receiving POST requests adds a visitor count to the DynamoDB table</li>
                        <li className='mt-2'>5. Lambda  receiving GET requests fetches the visitor count from the DynamoDB table</li>
                        <li className='mt-2'>6. API Gateway then retrieves this data from Lambda and sends it to the codes script</li>
                        <li className='mt-2'>7. The visitor count code completes the script and the count is displayed to the user</li>
                    </ul>
                </Typography>
            </div>
        </div>
    )
}