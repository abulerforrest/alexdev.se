import React from "react";

import { useLocalStore } from "mobx-react";

import { 
    PDFStore,
    IPDFStore
} from "../stores/PDFStore";

import { 
    DataStore
} from "../stores/DataStore";

import {
    INavBarController
} from "../interfaces/NavBarController";

import NavBarController from "../controllers/NavBarController";

interface IStoreContext {
    pdfStore: IPDFStore
    navBarController: INavBarController
}

export const storeContext = React.createContext<IStoreContext>(null!);

export const StoreProvider: React.FC = ({ children }) => {

    const dataStore = useLocalStore(DataStore);

    const navBar: INavBarController = NavBarController(dataStore);
    
    const pdfStore = useLocalStore(PDFStore);

    const navBarController = useLocalStore(() => navBar);

    return (
        <storeContext.Provider value={{
            pdfStore,
            navBarController
        }}>
            
                {children}           
        </storeContext.Provider>
    );

};