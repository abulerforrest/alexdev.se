import { pdf } from '@react-pdf/renderer';

import ResumePDF from "../components/ResumePDF";
import { IPDFService } from "../interfaces/services/PDFService";

export class PDFService implements IPDFService {
    public async loadPDF(): Promise<Blob> {

        let pdfBlob = null;

        pdfBlob = await pdf(ResumePDF as any).toBlob();

        return pdfBlob;
    }
}