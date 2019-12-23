import { IObservableValue, IObservable } from "mobx";

export interface IPDFService {
    loadPDF: () => Promise<Blob>
}