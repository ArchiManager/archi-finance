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
            "name": "Interior Projects",
            "description": "This is the description of category 2",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 3,
            "name": "Landscape Projects",
            "description": "This is the description of category 3",
            "image": "https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400"
        },
        {
            "id": 4,
            "name": "Urban Projects",
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
        <div className="border border-red-500 border-solid">
            <div>
                <h2 className="section-title">Individual elements</h2>
                <div className="media-scroller snaps-inline">
                    {
                        categories.map((category, index) => (
                            <div className="media-element" key={index}>
                                <img src="https://images.unsplash.com/photo-1641353989082-9b15fa661805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MzM5ODcyOA&ixlib=rb-1.2.1&q=80&w=400" alt="" />
                                <p className="title">{category.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ReceivableBody;
