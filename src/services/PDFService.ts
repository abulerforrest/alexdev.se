import { pdf } from '@react-pdf/renderer';

import ResumePDF from "../components/ResumePDF";

import {
    IPDFService
} from "../interfaces/services";

export const PDFService = () => {
    const service: IPDFService = {
        async loadPDF(): Promise<Blob> {

            let pdfBlob: Blob = new Blob();

            pdfBlob = await pdf(ResumePDF as JSX.Element).toBlob();

            return pdfBlob;
        }
    }
    return service;
}