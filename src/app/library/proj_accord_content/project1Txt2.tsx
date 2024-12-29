import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const MechanicToCloudTxt2 = () => {
    return (
        <div className="flex flex-col gap-4 sm:w-fit max-w-[130ch]">
            <div className="flex justify-center flex-col w-fit bg-none">
                <Typography component='div' sx={{ marginBottom: 2, fontFamily: 'platypi', color: 'rgb(var(--textColorLight))'  }}>
                    <ul className='mt-3'>
                        <li>1. Users attempt to access the website via their browser</li>
                        <li className='mt-2'>2. The sites domain and routing (A, NS, SOA Records) are set-up via Route 53. 
                        These will then point to my CloudFront (CF) distribution (AWS&#39;s Content Delivery Network)</li>
                        <li className='mt-2'><ArrowRightIcon/>2.1. In order to gain the S (Secure) in HTTPS, AWS Certificate Manager 
                        is required to validate both www. and non-www. versions of the domain. It provides the SSL/TLS 
                        certificates for CF</li>
                        <li className='mt-2'>3. The routing is then connected to my CF distribution. CF handles 
                        requests and forwards them to the origin, being the S3 (Simple Storage Service) bucket</li>
                        <li className='mt-2'>4. Using the Origin Access Control (OAC) method via CF, 
                        this will allow CF to gain access to the S3 bucket containing the static files for the site. 
                        <strong> But with one critical difference</strong> compared to just using CF without the OAC; 
                        keeping the S3 bucket access private, only allowing specific access for the CF distribution 
                        (via a Bucket Policy)</li>
                        <li className='mt-2'>5. The S3 bucket containing the static web files then allows CF access</li>
                        <li className='mt-2'>6. CF caches the site&#39;s static files on-demand in its global network 
                        of edge locations, providing faster access for users worldwide by serving files from the 
                        closest edge location</li>
                        <li className='mt-2'>7. Users can now access the site</li>
                    </ul>
                </Typography>
            </div>
        </div>
    )
}