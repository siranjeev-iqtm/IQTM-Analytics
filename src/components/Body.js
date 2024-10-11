import { useEffect, useState } from "react";
import TimeSpent from "./TimeSpent";
import UserActions from "./UserActions";
import EventsStackedBar from "./EventsStackedBar";
import BrowserUsed from "./BrowserUsed";
import NavBar from "./NavBar";

import HeadData from "./HeadData";
import Map from "./Map";
const Body = () => {
    const [usersAct, setUsersAct] = useState([]);
    useEffect(() => {

        fetData();
    }, []);


    async function fetData() {
        const data = await fetch('https://iqtm-analytics.onrender.com/trackings');
        const json = await data.json();
        setUsersAct(json.data);
    };

    if (usersAct.length == 0) {
        return (<div className="container text-center" style={{
            marginTop: "10%",
        }}>
            <div className="loading"></div>
        </div>);
    }

    return (<>
        <NavBar />
        <div className="container main" style={{
            marginTop: "10vh",
        }}>
            <h2 className="mb-5 text-left ps-4"> Analytics For IQ TechMax</h2>
            <div className="row justify-content-around">
                <HeadData data={usersAct} />
                <TimeSpent data={usersAct} />
                <UserActions data={usersAct} />
                <EventsStackedBar data={usersAct} />
                <BrowserUsed data={usersAct} />
                <Map />
            </div></div ></>);
}
export default Body;