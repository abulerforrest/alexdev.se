import { PDFService } from "./PDFService";

import {
	IPDFService
} from "../interfaces/services";

export interface IServices {
	pdfService: IPDFService
}

export const createServices = (): IServices => {

	return {
		pdfService: PDFService()
	}

};