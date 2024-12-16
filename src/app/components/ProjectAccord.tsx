import * as React from 'react';
import { useEffect } from 'react';
import { Grow, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps, accordionSummaryClasses } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ThemeProvider } from '@mui/system';
import homeTheme from '../styles/homeTheme';
import { MechanicToCloudTxt } from '@/app/library/proj_accord_content/projectTxt1';
import ProjectOne from './project_img_growers/ProjectImgs1';
import ProjectTwo from './project_img_growers/ProjectImgs2';
import { Tbc } from '@/app/library/proj_accord_content/projectTxt2';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        border: `1px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 'none',
        },
        marginTop: '0.1px',
        background: 'rgba(255, 255, 255, 0.8)', 
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)', 
        '&.Mui-expanded': {
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
        },
        '&::before': {
        background: 'none',
        },
    }));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
    ))(({ theme }) => ({
        flexDirection: 'row-reverse',
        borderRadius: '16px',
        color: 'rgb(var(--foreground))',
        background: '#ffffff',
        '&.Mui-expanded': {
        background: 'rgba(255, 255, 255, 0.8)', 
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', 
    },
        [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
            {
            transform: 'rotate(90deg)',
            },
        [`& .${accordionSummaryClasses.content}`]: {
            marginLeft: theme.spacing(1),
        },
        ...theme.applyStyles('dark', {
        }),
    }));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    fontFamily: 'platypi',
    
    }));


const ProjectAccordions = () => {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='w-[86svw] rounded-xl'>
            <ThemeProvider theme={homeTheme}>
            <Accordion onChange={handleChange('panel1')} 
            className='rounded-xl'>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <h2 className='font-platypi'>Mechanic to Cloud - work in progess <HourglassTopIcon/></h2>
                </AccordionSummary>

                <AccordionDetails className='flex flex-col'>
                    
                        <MechanicToCloudTxt />
                        <div className='mt-3 min-h-full sm:min-h-full'>
                            <ProjectOne />
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
                        <div className='mt-3 min-h-full sm:min-h-full'>
                            <ProjectTwo />
                        </div>

                </AccordionDetails>
            </Accordion>
            </ThemeProvider>
        </div>
    );
}

export default function GrowProjAcc() {
        // Set animation to false before component mount:
        const [checked, setChecked] = React.useState(false)

        // Trigger animation on mount:
        useEffect(() => {
            setChecked(true)
        },[])
    
        return (
            <>
            <Box 
                sx={{ 
                    height: 'auto', 
                    minHeight: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'absolute',
                    zIndex: -10,
                }}
            ></Box>
            <Grow
            in={checked}
            timeout={2000}
            style={{ transformOrigin: 'center center' }}
            >
                <div>
                    <ProjectAccordions />
                </div>
                
            </Grow>
            </>
        );
}
