import { useEffect, useState } from "react";
import { app } from "../data/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail,
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
};

const useAuth = () => {
  const auth = getAuth(app);
  const [uid, setUid] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        setUid(user.uid);
        sessionStorage.setItem("uid", user.uid);
      } else {
        setCurrentUser(null);
        setUid(null);
        sessionStorage.removeItem("uid");
      }
    });
  }, [auth]);

  const createUser = async (email, password, displayName) => {
    let response = responseTemplate;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        response.isCreateSuccess = true;
        response.user = userCredential.user;
        updateProfile(response.user, { displayName: displayName });
      })
      .catch((error) => {
        throw new Error(error.code);
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
        throw new Error(error.code);
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
        throw new Error(error.code);
      });

    return response;
  };

  const updateUserPassword = (newPassword) => {
    const auth = getAuth();
    const user = auth.currentUser;

    updatePassword(user, newPassword)
      .then(() => {
        return "Hasło zostało zmienione";
      })
      .catch((error) => {
        throw new Error(error.code);
      });
  };

  const sendResetEmail = async (email) => {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        return "E-mail z linkiem do resetowania hasła został wysłany";
      })
      .catch((error) => {
        throw new Error(error.code);
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        return "Nastąpiło wylogowanie";
      })
      .catch((error) => {
        throw new Error(error.code);
      });
  };

  return {
    uid,
    currentUser,
    createUser,
    loginWithEmail,
    loginWithGoogle,
    updateUserPassword,
    sendResetEmail,
    logout,
  };
};

export default useAuth;
