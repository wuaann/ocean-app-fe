
import {getTimes} from "../../utils";

function Profile() {






        const specificTimeString = getTimes("2023-01-28T08:45:01.262Z");



    return (
        <>
            <div className={"h-screen bg-black"}>
                <p className={"text-amber-100 text-center pt-5 text-2xl"}>{specificTimeString}</p>
            </div>
        </>
    );
}

export default Profile;