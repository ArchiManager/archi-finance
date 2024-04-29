"use client";

import ArchiInput from "@/components/base/ArchiInput";
import ArchiSelectDropdown from "@/components/base/ArchiSelectDropdown";
import ArchiToggleButton from "@/components/base/AricsToggleButton";
import { useState } from "react";
import { serviceTypeList } from "./data";

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
                        step={4}
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
                        id="projectSize"
                        placeholder="Please enter project size (required)"
                        required
                        fullWidth={true}
                        label="Project Size"
                        variant="outlined"
                        className="my-0 mt-3"
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={6}
                        id="projectScale"
                        placeholder="Please enter project scale (required)"
                        required
                        fullWidth={true}
                        label="Project Scale"
                        variant="outlined"
                        className="my-0 mt-3"
                    />
                </div>

                <div className="w-full">
                    <ArchiSelectDropdown
                        step={7}
                        value={""}
                        label="Service Type"
                        onChange={(event) => console.log(event)}
                        data={serviceTypeList}
                        helperText="Please select project status"
                        fullWidth={true}
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={8}
                        id="projectAmount"
                        placeholder="Please enter project amount (required)"
                        required
                        fullWidth={true}
                        label="Project Amount"
                        variant="outlined"
                        className="my-0 mt-3"
                        type={"number"}
                    />
                </div>

                <div className="w-full">
                    <ArchiInput
                        step={9}
                        id="projectDetails"
                        placeholder="Please enter a description for your project (optional)"
                        required
                        fullWidth={true}
                        label="Project Details"
                        multiline={true}
                        variant="outlined"
                        type="text"
                        className="m-0"
                    />
                </div>
            </div>
        </div>
    );
}
export default CreateProjectPage;