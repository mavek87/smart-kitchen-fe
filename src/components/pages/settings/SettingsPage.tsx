import {useSelector} from "react-redux";
import {RootState} from "../../../state/store.ts";

export default function SettingsPage() {
    const authUser = useSelector((state: RootState) => state.authUserState)

    const username = authUser?.username || '';
    const email = authUser?.email || '';

    return (
        <>
            <h2>Settings</h2>
            <br/>
            <fieldset>
                <label>Username</label>
                <input value={username} readOnly/>
            </fieldset>
            <fieldset>
                <label>Email</label>
                <input value={email} readOnly/>
            </fieldset>
        </>
    );
}