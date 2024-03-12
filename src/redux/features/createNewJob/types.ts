
export interface JobAttachment {
    id: number;
    title: string;
    url: string;
}

export interface JobState {
    id: number;
    title: string;
    skills: string[];
    scope: string;
    duration: number;
    experience: number;
    isContractToHire: boolean;
    hourlyRate: {
        min: number;
        max: number;
    };
    fixedPrice: number;
    description: string;
    attachments: JobAttachment[];
}