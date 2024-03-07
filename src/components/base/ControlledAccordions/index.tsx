import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionsList } from './types';

interface ControlledAccordionsProps {
    accordiansList: AccordionsList[];
    className?: string;
}

function ControlledAccordions({
    accordiansList,
    className
}: ControlledAccordionsProps) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className='my-0'>
            {
                accordiansList.map((item: AccordionsList, index: number) => {
                    return (
                        <Accordion key={index} expanded={expanded === `panel${index + 5}`} onChange={handleChange(`panel${index + 5}`)} className={`my-0 ${(index === accordiansList.length - 1) ? (`border-0 rounded-3xl`) : `border-b-[0.5px]`} border-t-0 border-x-0 border-gray-400 border-solid shadow-none`}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`panel${index + 5}bh-content`}
                                id={`panel${index + 5}bh-header`}
                                className={`${className} border-none shadow-none pt-4 ${expanded === `panel${index + 5}` ? `pb-0` : `pb-4`}`}
                            >
                                <div>
                                    <h3 className="text-gray-800 font-medium text-2xl my-0">{item.title}</h3>
                                    <p className="text-gray-500 font-medium text-md mb-0 mt-1 ml-0">{item.overview}</p>
                                </div>
                            </AccordionSummary>

                            <AccordionDetails className='m-0 border-none shadow-none p-6 py-4'>
                                {item.content}
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    );
}
export default ControlledAccordions;