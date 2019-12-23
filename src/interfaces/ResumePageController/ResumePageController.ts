import { ObservableMap, IObservableValue } from "mobx";

import {
    ActionIconTypes
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
    currentActionIcon: IObservableValue<ActionIconTypes>
}

export interface IResumePageControllerActions {
    setPageLoading: (isLoading: boolean) => void
    setScrollTop: (isScrolling: boolean) => void

    getPDFBlob: () => Promise<IObservableValue<Blob> | undefined>
    setCurrentPage: (page: string) => void
    
    printPDF: (type: ActionIconTypes) => void
    downloadPDF: (filename: string, type: ActionIconTypes) => void

    setCurrentActionIcon: (type: ActionIconTypes) => void
}

export interface IResumePageController {
    values: IResumePageControllerValues
    actions: IResumePageControllerActions
}