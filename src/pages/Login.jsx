import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

const Login = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
			{isLoading && <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />}
            <main>
            
            </main>
        </>
    );
};

export default Login;