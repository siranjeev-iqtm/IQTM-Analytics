import NavBar from "./NavBar";
const Profile = () => {
    return (<>
        <NavBar />
        <div className="container d-flex flex-column px-5 main" style={{
            marginTop: "11vh"
        }}>
            <h2>My Account</h2>
            <p>
                {/* Change your operator name, add your profile picture, change your email address and password and adjust your region so that your time zone will be displayed correctly. */}
            </p>
            <h4>Personal Details</h4>
            <div className="row flex my-3">
                <img style={{
                    width: "200px"
                }} src="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg" />
                <h5> Name : UserName</h5>
                <h5>
                    Email : abc@gmail.com
                </h5>

            </div>
        </div>
    </>)
};
export default Profile;