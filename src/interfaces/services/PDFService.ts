export interface IPDFService {
    loadPDF: () => Promise<Blob>
}