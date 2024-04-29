"use client";
import ArchiPieChart from "@/charts/ArchiPieChart";

const ReceivableBody = () => {
    let categories = [
        {
            "id": 1,
            "name": "Architectural Projects",
            "description": "This is the description of category 1",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 2,
            "name": "Interior Design Projects",
            "description": "This is the description of category 2",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 3,
            "name": "Interior Execution Projects",
            "description": "This is the description of category 3",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 4,
            "name": "Construction Projects",
            "description": "This is the description of category 4",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 5,
            "name": "Landscape Projects",
            "description": "This is the description of category 3",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 6,
            "name": "Urban Projects",
            "description": "This is the description of category 4",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 7,
            "name": "Urban Projects",
            "description": "This is the description of category 4",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 8,
            "name": "Landscape Projects",
            "description": "This is the description of category 3",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 9,
            "name": "Urban Projects",
            "description": "This is the description of category 4",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        }
    ];

    return (
        <div className="mt-6 h-full">
            {/*             On mouse scroll move the scrollbar by 50% of the width of the container */}
            <div className="media-scroller gap-4 h-auto"
                onWheel={(e) => {
                    e.currentTarget.scrollLeft += (e.deltaY / 2);
                    e.preventDefault();
                }}
            >
                {
                    categories.map((category, index) => (
                        <div className="media-element" key={index}>
                            <div>
                                <div className="rounded-lg h-28 bg-white flex flex-col justify-center">
                                    <h4 className="text-center text-primary text-xl font-medium">
                                        {category.name}
                                    </h4>
                                    <h1 className="text-5xl text-blue-600 text-center font-mono">
                                        {88}
                                    </h1>
                                </div>
                                <div className="w-full">
                                    <div className="mt-4 shadow-md h-auto bg-white w-full">
                                        <h5 className="text-2xl text-center pt-6 pb-4">Projects List</h5>
                                        <div key={index} className="p-2 flex flex-col">
                                            <div className="grid grid-cols-3 bg-indigo-700 rounded-tl-md rounded-tr-md text-white px-3 py-5 mb-4">
                                                <h5 className="text-lg text-left font-bold">Project</h5>
                                                <p className="text-lg text-left font-bold">R.Amount</p>
                                                <p className="text-lg text-left font-bold ml-3">Status</p>
                                            </div>
                                            <div className="overflow-y-auto h-[40vh] px-3">
                                                {
                                                    [{
                                                        "name": "Project 1",
                                                        "amount": "1000",
                                                        "status": "active"
                                                    },
                                                    {
                                                        "name": "Project 2",
                                                        "amount": "2000",
                                                        "status": "progress"
                                                    },
                                                    {
                                                        "name": "Project 3",
                                                        "amount": "3000",
                                                        "status": "done"
                                                    },
                                                    {
                                                        "name": "Project 4",
                                                        "amount": "4000",
                                                        "status": "active"
                                                    },
                                                    {
                                                        "name": "Project 5",
                                                        "amount": "5000",
                                                        "status": "progress"
                                                    },
                                                    {
                                                        "name": "Project 6",
                                                        "amount": "6000",
                                                        "status": "done"
                                                    },
                                                    {
                                                        "name": "Project 7",
                                                        "amount": "7000",
                                                        "status": "active"
                                                    },
                                                    {
                                                        "name": "Project 8",
                                                        "amount": "8000",
                                                        "status": "progress"
                                                    },
                                                    {
                                                        "name": "Project 9",
                                                        "amount": "9000",
                                                        "status": "done"
                                                    },
                                                    {
                                                        "name": "Project 10",
                                                        "amount": "10000",
                                                        "status": "active"
                                                    },
                                                    {
                                                        "name": "Project 11",
                                                        "amount": "11000",
                                                        "status": "progress"
                                                    },
                                                    {
                                                        "name": "Project 12",
                                                        "amount": "12000",
                                                        "status": "done"
                                                    },
                                                    {
                                                        "name": "Project 13",
                                                        "amount": "13000",
                                                        "status": "active"
                                                    },
                                                    {
                                                        "name": "Project 14",
                                                        "amount": "14000",
                                                        "status": "progress"
                                                    },
                                                    {
                                                        "name": "Project 15",
                                                        "amount": "15000",
                                                        "status": "done"
                                                    },
                                                    {
                                                        "name": "Project 16",
                                                        "amount": "16000",
                                                        "status": "active"
                                                    },
                                                    {
                                                        "name": "Project 17",
                                                        "amount": "17000",
                                                        "status": "progress"
                                                    },
                                                    {
                                                        "name": "Project 18",
                                                        "amount": "18000",
                                                        "status": "done"
                                                    },
                                                    {
                                                        "name": "Project 19",
                                                        "amount": "19000",
                                                        "status": "active"
                                                    },
                                                    {
                                                        "name": "Project 20",
                                                        "amount": "20000",
                                                        "status": "progress"
                                                    }].map((project, index) => {
                                                        return (
                                                            <div key={index} className="grid grid-cols-3">
                                                                <p className="text-lg">{project.name}</p>
                                                                <p className="text-lg text-center">{project.amount}</p>
                                                                <div className="grid grid-cols-3 gap-4">
                                                                    <div className={`${project.status == "active" ? ("bg-green-500") : (project.status == "progress") ? ("bg-yellow-500") : (project.status == "done") ? ("bg-red-500") : ("bg-white")} text-white w-6 h-6 mr-1 rounded-full`} />
                                                                    <div className={`${project.status == "active" ? ("bg-green-500") : (project.status == "progress") ? ("bg-yellow-500") : (project.status == "done") ? ("bg-red-500") : ("bg-white")} text-white w-6 h-6 mr-1 rounded-full`} />
                                                                    <div className={`${project.status == "active" ? ("bg-green-500") : (project.status == "progress") ? ("bg-yellow-500") : (project.status == "done") ? ("bg-red-500") : ("bg-white")} text-white w-6 h-6 rounded-full`} />
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-96">
                                    <ArchiPieChart />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ReceivableBody;
