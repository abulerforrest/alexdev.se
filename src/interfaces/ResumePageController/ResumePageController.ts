import { ActionIconTypes } from "../../components/ActionIcons";

export enum controllIconTypes {
    DOWNLOAD,
    PRINT
}

export interface IResumePageController {
    currentPage: string

    scrollTop: boolean
    isLoadingPDF: boolean
    isLoadingPage: boolean

    currentActionIcon: ActionIconTypes
    
    setPageLoading: (isLoading: boolean) => void
    setScrollTop: (isScrolling: boolean) => void

    getPDFBlob: () => Promise<Blob>
    setCurrentPage: (page: string) => void
    
    printPDF: (type: ActionIconTypes) => void
    downloadPDF: (filename: string, type: ActionIconTypes) => void
}