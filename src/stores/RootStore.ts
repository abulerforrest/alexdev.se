import { IServices } from "../services/createServices";
import { PDFStore } from "./PDFStore";

export class RootStore {

	public readonly services: IServices;
	public readonly pdfStore: PDFStore;

	constructor(services: IServices) {

		this.services = services;
		this.pdfStore = new PDFStore(this);

	}

}