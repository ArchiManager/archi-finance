"use client";

import ArchiInput from "@/components/base/ArchiInput";
import ArchiToggleButton from "@/components/base/AricsToggleButton";
import { useState } from "react";

function CreateProjectPage() {
    const [businessType, setBusinessType] = useState<string>("");

    return (
        <div className="rounded-md bg-white py-10 px-12 mx-36 mt-6">
            <h1 className="text-3xl text-primary font-bold text-center">Create Project</h1>

            <div className="flex flex-col gap-4 my-8 justify-center">
                <div className="w-full">
                    <ArchiToggleButton
                        label="Business Type"
                        step={1}
                        value={businessType}
                        onChange={(event, newAlignment) => setBusinessType(newAlignment as string)}
                        list={[
                            { value: "ara", label: "ARA" },
                            { value: "arics", label: "ARICS" },
                            { value: "atc", label: "ARC" },
                            { value: "furniture", label: "Furniture" }
                        ]}
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={2}
                        id="projectName"
                        placeholder="Please enter a name for your project (required)"
                        required
                        fullWidth={true}
                        label="Project Name"
                        variant="outlined"
                        className="my-0 mt-3"
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={3}
                        id="projectDescription"
                        placeholder="Please enter a description for your project (optional)"
                        required
                        fullWidth={true}
                        label="Project Description"
                        multiline={true}
                        variant="outlined"
                        type="text"
                        className="m-0"
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={4}
                        id="clientName"
                        placeholder="Please enter client name (required)"
                        required
                        fullWidth={true}
                        label="Client Name"
                        variant="outlined"
                        className="my-0 mt-3"
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={5}
                        id="projectCode"
                        placeholder="Please enter project code (required)"
                        required
                        fullWidth={true}
                        label="Project Code"
                        variant="outlined"
                        className="my-0 mt-3"
                        type={"number"}
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={5}
                        id="projectCode"
                        placeholder="Please enter project code (required)"
                        required
                        fullWidth={true}
                        label="Project Code"
                        variant="outlined"
                        className="my-0 mt-3"
                    />
                </div>
            </div>
        </div>
    );
}
export default CreateProjectPage;