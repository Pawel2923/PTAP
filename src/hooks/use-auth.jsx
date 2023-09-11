import { useEffect, useState } from "react";
import { app } from "../data/firebase";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";

const responseTemplate = {
    user: null,
    isLogged: false,
    isCreateSuccess: false,
}

const useAuth = () => {
	const auth = getAuth(app);
	const [uid, setUid] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUid(user.uid);
			} else {
				setUid(null);
				console.log("user is logged out");
			}
		});
	}, [auth]);

	const createUser = async (email, password) => {
        let response = responseTemplate;
		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
                response.isCreateSuccess = true;
                response.user = userCredential.user;
			})
			.catch((error) => {
                throw new Error(error);
            });

		return response;
	};

	const loginWithEmail = async (email, password) => {
        let response = responseTemplate;
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
                response.isLogged = true;
                response.user = userCredential.user;
			})
			.catch((error) => {
                throw new Error(error);
            });
		return response;
	};

	const loginWithGoogle = async (email = "") => {
        let response = responseTemplate;
		const provider = new GoogleAuthProvider();

		if (email.length >= 3) {
			provider.setCustomParameters({
				login_hint: email,
			});
		}

		await signInWithPopup(auth, provider)
			.then((userCredential) => {
                response.isLogged = true;
                response.user = userCredential.user;
			})
			.catch((error) => {
                throw new Error(error);
            });

		return response;
	};

	const logout = async () => {
		signOut(auth)
			.then(() => {
				console.log("Signed out successfully");
			})
			.catch((error) => {
                throw new Error(error);
            });
	};

	return { uid, createUser, loginWithEmail, loginWithGoogle, logout };
};

export default useAuth;
