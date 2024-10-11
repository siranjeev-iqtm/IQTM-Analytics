import { useState } from "react";
const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [isTogglerClicked, setIsTogglerClicked] = useState(true);
    const [btnName, setBtnName] = useState("Log-in");
    const opennavipanel = () => {
        setIsNavOpen(!isNavOpen);
        setIsTogglerClicked(!isTogglerClicked);
    }

    return (<>
        <div className={isTogglerClicked ? 'clicked toggle' : 'toggle'}
            id="toggler" onClick={opennavipanel}>
            <div></div>
        </div>
        <div className="nav py-3 px-4">

            <div className=" d-flex align-items-center h-100 ">
                <p className="me-4 text-decoration-none text-light fs-5" to="/"> username
                    <i class="fa-solid fa-user fs-3  ms-3"></i></p>
            </div>
        </div>


        <div className={isNavOpen ? 'active sideBar flex-column d-flex' : 'd-flex flex-column sideBar'}>

            <h3 className="text-center py-4 pb-3">IQ TechMax</h3>
            <p className="text-center fs-5 p-0 fw-bold " style={{ color: "gray" }}>Menu</p>
            <div className="d-flex flex-column  mx-3  px-1">
                <p className="text-decoration-none  px-3 py-1 text-dark" to="/"><i class="fa-solid fa-table-columns mx-2"></i> Dashboard</p>
                {/* <Link className=" text-decoration-none px-3 py-1 text-dark" to="/profile"><i class="fa-solid fa-camera-retro mx-2"></i>Face Detect</Link> */}

            </div>
            {/* <Link className="me-4 text-decoration-none text-light" to="/">CRMs</Link> */}
            {/* <div className="login-btn d-flex flex-column pb-3">
                <p className="text-center fs-5 p-0 fw-bold" style={{ color: "gray" }}>Preferences</p>
                <div className="d-flex flex-column  mx-3  px-1">
                    <Link className="text-decoration-none px-3 py-1 text-dark" to="/"><i class="fa-solid fa-table-columns mx-2"></i> Theme</Link>
                    <Link className=" text-decoration-none px-3 py-1 text-dark" to="/profile"><i class="fa-solid fa-rocket mx-2"></i> Log in</Link>
                </div>
            </div> */}
        </div>
    </>)
}
export default NavBar;
