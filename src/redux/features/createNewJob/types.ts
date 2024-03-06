import { ControlledRadioButtonsGroupOptionsType } from "@components/base/ControlledRadioButtonsGroup/types";

export interface JobAttachment {
    id: number;
    title: string;
    url: string;
}

export interface JobState {
    id: number;
    title: string;
    skills: string[];
    scope: ControlledRadioButtonsGroupOptionsType;
    duration: ControlledRadioButtonsGroupOptionsType;
    experience: ControlledRadioButtonsGroupOptionsType;
    isContractToHire: boolean;
    hourlyRate: {
        min: number;
        max: number;
    };
    fixedPrice: number;
    description: string;
    attachments: JobAttachment[];
}