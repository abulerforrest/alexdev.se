import {
    action,
    observable
} from "mobx";

import { createServices } from "../services/createServices";

export interface IPDFStore {
    pdfBlob: any
    loadPDFBlob: () => Promise<void>
}

export const PDFStore = () => {
    const { pdfService } = createServices();

    const store: IPDFStore = {
        pdfBlob: observable.box(new Blob()),
        loadPDFBlob: action(async (): Promise<void> => {
            const getPDF: Blob = await pdfService.loadPDF();
            store.pdfBlob.set(getPDF);
        }),
    };
    return store;
};