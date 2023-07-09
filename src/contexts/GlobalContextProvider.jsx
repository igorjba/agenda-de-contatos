import useGlobalContextProvider from "../hooks/useGlobalContextProvider";
import GlobalContext from "./GlobalContext";

const GlobalContextProvider = (props) => {
    const valuesProvider = useGlobalContextProvider();

    return (
        <GlobalContext.Provider value={valuesProvider}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
