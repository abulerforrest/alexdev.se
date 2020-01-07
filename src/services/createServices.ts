import { PDFService } from "./PDFService";
import { DataService } from "./DataService";

import {
	IPDFService,
	IDataService
} from "../interfaces/services";

export interface IServices {
	pdfService: IPDFService
	dataService: IDataService
}

export const createServices = (): IServices => {
	return {
		pdfService: PDFService(),
		dataService: DataService()
	}
};