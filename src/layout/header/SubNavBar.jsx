
const SubNavBar = () => {
    const list = [
        {
            name: "Dashboard"
        },
        {
            name: "InPlay"
        },
        {
            name: "Running Market Analysis"
        },
        {
            name: "Report",
            children: [
                {
                    list: "Account Statement"
                },
                {
                    list: "Profit & Loss"
                },
                {
                    list: "Bet History"
                },
                {
                    list: "Match Pnl"
                }
            ]
        },
        {
            name: "Check Casino Result",

        },
        {
            name: "Casino Games"
        }
    ]



    return (
        <div className="sub-navbar">
            <ul className="list">
                {
                    list?.map((item) => {

                        return (

                            <li key={item?.name} className={`list-tag ${item?.children?.length ? "report" : ""}`}>{item?.name}
                                <div className={item?.children?.length ? "drop-list" : ""}>
                                    <ul>
                                        {item?.children?.map((list) => <li className="sub-list">{list?.list}</li>)}

                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SubNavBar