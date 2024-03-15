import ArchiButton from "@/components/base/ArchiButton";

const ReceivableHeader = () => {
    return (
        <div className="flex w-full flex-row justify-between">
            <h1 className="text-3xl">
            Projects Finance  Receivable
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
                    variant="contained"
                    customStyles={true}
                    className="rounded-2xl text-base bg-white text-indigo-800 hover:bg-gray-200 focus:ring-indigo-900"
                />

                <ArchiButton
                    text="ATC"
                    variant="contained"
                    customStyles={true}
                    className="rounded-2xl text-base bg-white text-indigo-800 hover:bg-gray-200 focus:ring-indigo-900"
                />
                <ArchiButton
                    text="FURNITURE"
                    variant="contained"
                    customStyles={true}
                    className="rounded-2xl text-base bg-white text-indigo-800 hover:bg-gray-200 focus:ring-indigo-900"
                />
            </div>
        </div>
    )
}
export default ReceivableHeader;