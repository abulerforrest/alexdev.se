import React from 'react';

import { useLocalStore } from 'mobx-react';

import { 
    PDFStore,
    IPDFStore
} from '../stores/PDFStore';

export const pdfStoreContext = React.createContext<IPDFStore>(null!);

export const StoreProvider: React.FC = ({ children }) => {
    
    const store = useLocalStore(PDFStore);

    return (
        <pdfStoreContext.Provider value={store}>
            {children}
        </pdfStoreContext.Provider>
    );

};

export default StoreProvider;