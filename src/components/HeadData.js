const HeadData = (props) => {
    const { data } = props;
    let totalTime = 0;
    let totalRequest = data.length;
    let totalInteraction = 0;

    data.forEach(element => {
        totalInteraction += (element.clicks + element.scrolls + element.submissions);
        totalTime += element.time_spent
    });
    return (<div className="container">
        <div className="row ">
            <div className="col-lg-11 d-flex justify-content-between mx-auto p-0">
                <div className="col-md-4  px-4 py-3  d-flex flex-column justify-content-around ">
                    <p className="fs-4 fw-bold mb-3 p-0">Total Requests</p>
                    <div className="d-flex align-items-center justify-content-around" style={{ position: "relative" }}>
                        <h3 className="col-6">{totalRequest}</h3>
                        <div className="col-6" style={{ overflow: "hidden" }}>
                            <img style={{
                                width: "80%", objectFit: "cover",
                            }} src="https://cdn-icons-png.freepik.com/256/7190/7190751.png?ga=GA1.1.297605992.1719897031&semt=ais_hybrid" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4  px-4 py-3  d-flex flex-column justify-content-around ">
                    <p className="fs-4 fw-bold mb-3 p-0">Total Interactions</p>
                    <div className="d-flex align-items-center justify-content-around" style={{ position: "relative" }}>
                        <h3 className="col-6">{totalInteraction}</h3>
                        <div className="col-6" style={{ overflow: "hidden" }}>
                            <img style={{
                                width: "80%", objectFit: "cover",
                            }} src="https://cdn-icons-png.freepik.com/256/17009/17009352.png?ga=GA1.1.297605992.1719897031&semt=ais_hybrid" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4  px-4 py-3 d-flex flex-column justify-content-around">
                    <p className="fs-4 fw-bold mb-3 p-0">Total TimeSpent</p>
                    <div className="d-flex align-items-center justify-content-around" style={{ position: "relative" }}>
                        <h3 className="col-6">{totalTime}s</h3>
                        <div className="col-6" style={{ overflow: "hidden" }}>
                            <img style={{
                                width: "80%", objectFit: "cover"
                            }} src="https://cdn-icons-png.freepik.com/256/9167/9167960.png?ga=GA1.1.297605992.1719897031&semt=ais_hybrid" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>)
}
export default HeadData;