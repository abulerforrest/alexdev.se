import { IObservableValue } from "mobx";

import {
    IconTypes
} from "../../components/ActionIcons";

export enum controllIconTypes {
    DOWNLOAD,
    PRINT
}

export interface IResumePageControllerValues {
    currentPage: IObservableValue<string>
    scrollTop:  IObservableValue<boolean>
    isLoadingPage: IObservableValue<boolean>
    isLoadingPDF: IObservableValue<boolean>
    currentActionIcon: IObservableValue<IconTypes>
}

export interface IResumePageControllerActions {
    setPageLoading: (isLoading: boolean) => void
    setScrollTop: (isScrolling: boolean) => void

    getPDFBlob: () => Promise<IObservableValue<Blob> | undefined>
    setCurrentPage: (page: string) => void
    
    printPDF: (type: IconTypes) => void
    downloadPDF: (filename: string, type: IconTypes) => void

    setCurrentActionIcon: (type: IconTypes) => void
}

export interface IResumePageController {
    values: IResumePageControllerValues
    actions: IResumePageControllerActions
}