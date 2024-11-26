import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps, accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ThemeProvider } from '@mui/system';
import homeTheme from '@/app/styles/homeTheme';
import { MechanicToCloudTxt } from '../library/projectTxt1';
import ProjectOneGrow from './project_img_growers/ProjectImgs1';
import ProjectTwoGrow from './project_img_growers/ProjectImgs2';
import { Tbc } from '../library/projectTxt2';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&::before': {
            display: 'none',
        },
    }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
        flexDirection: 'row-reverse',
        backgroundColor: 'rgba(249, 4, 4, 1)',
        borderRadius: '16px',

        [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
            {
            transform: 'rotate(90deg)',
            },
        [`& .${accordionSummaryClasses.content}`]: {
            marginLeft: theme.spacing(1),
        },
        ...theme.applyStyles('dark', {
            // backgroundColor: 'rgba(255, 255, 255, .20)',
        }),
    }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    fontFamily: 'platypi',
    
    }));


export default function ProjectAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='w-[86svw] rounded-xl'>
            <ThemeProvider theme={homeTheme}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
            className='rounded-xl'>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <h2 className='font-platypi'>Mechanic to Cloud</h2>
                </AccordionSummary>

                <AccordionDetails className='flex flex-col'>
                    
                        <MechanicToCloudTxt />
                        <div className='mt-3'>
                            <ProjectOneGrow />
                        </div>
                    
                </AccordionDetails>

            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
             className='rounded-xl'>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">

                    <h2 className='font-platypi'>TBA</h2>
                    
                </AccordionSummary>

                <AccordionDetails>

                        <Tbc />
                        <div className='mt-3'>
                            <ProjectTwoGrow />
                        </div>

                </AccordionDetails>
            </Accordion>
            </ThemeProvider>
        </div>
    );
}