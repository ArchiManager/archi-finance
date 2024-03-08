import ArchiButton from "@/components/base/ArchiButton";

const DashboardHeader = () => {
    return (
        <div className="flex w-full flex-row justify-between">
            <h1 className="text-3xl">
                Finance Reports
            </h1>
            <div className="flex flex-row justify-between gap-3">
                <ArchiButton
                    text="All Summary"
                    variant="outlined"
                    customStyles={true}
                    className="rounded-2xl text-base bg-indigo-800 text-white hover:bg-indigo-900 focus:ring-indigo-900"
                />

                <ArchiButton
                    text="ARA"
                    variant="contained"
                    customStyles={true}
                    className="rounded-2xl text-base bg-white text-indigo-800 hover:bg-gray-200 focus:ring-indigo-900"
                />

                <ArchiButton
                    text="ARICS"
                    variant="outlined"
                    customStyles={true}
                    className="rounded-2xl text-base bg-white text-indigo-800 hover:bg-gray-200 focus:ring-indigo-900"
                />

                <ArchiButton
                    text="All Summary"
                    variant="outlined"
                    customStyles={true}
                    className="rounded-2xl text-base bg-white text-indigo-800 hover:bg-gray-200 focus:ring-indigo-900"
                />
            </div>
        </div>
    )
}
export default DashboardHeader;