/* import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

interface ArchiDatePickersProps {
    value: Dayjs | null;
    setValue: (value: Dayjs | null) => void;
}

function ArchiDatePickers({
    value,
    setValue,
}:ArchiDatePickersProps) {
    const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'DatePicker',
                    'MobileDatePicker',
                    'DesktopDatePicker',
                    'StaticDatePicker',
                ]}
            >
                <DemoItem label="Desktop variant">
                    <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
                <DemoItem label="Mobile variant">
                    <MobileDatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
                <DemoItem label="Responsive variant">
                    <DatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
                <DemoItem label="Static variant">
                    <StaticDatePicker defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
export default ArchiDatePickers; */

function ArchiDatePickers() {
    return (
        null
    )
}
export default ArchiDatePickers;