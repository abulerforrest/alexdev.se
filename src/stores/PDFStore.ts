import { RootStore } from "./RootStore";
import { observable } from "mobx";

export class PDFStore {

    @observable public pdfBlob: Blob = new Blob();

    private readonly rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    async loadPDFBlob() : Promise<void> {
        const getPDF = await this.rootStore.services.pdfService.loadPDF();
        this.pdfBlob = getPDF;
    }
}