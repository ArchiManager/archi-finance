import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export const logout = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
        await signOut(auth)
            .then(() => {
                // Sign-out successful.
                return true;
            })
            .catch((error) => {
                // An error happened.
                return false;
            });
    } else {
        return false;
    }

    return false;
};
