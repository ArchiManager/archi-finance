import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

interface LinearProgressWithLabelProps extends LinearProgressProps {
    value: number;
    showlabel?: boolean;
}

function LinearProgressWithLabel(props: LinearProgressWithLabelProps) {
    const { value, showlabel = true } = props;
    return (
        <div className={`flex items-center`}>
            <div className={`w-full ${showlabel && 'mr-1'}`}>
                <LinearProgress variant="determinate" {...props} />
            </div>
            {(showlabel) && (
                <div className='min-w-[35px]'>
                    <h4 className='text-gray-500 font-light my-0 ml-2'>
                        {`${Math.round(
                            value,
                        )}%`}
                    </h4>
                </div>
            )}
        </div>
    );
}
export default LinearProgressWithLabel;