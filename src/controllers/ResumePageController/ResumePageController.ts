import React from "react";

import {
    action,
    observable,
    IObservableValue
} from "mobx";

import {
    IconTypes
} from "../../components/ActionIcons";

import {
    IResumePageController,
    IResumePageControllerValues,
    IResumePageControllerActions
} from "../../interfaces/ResumePageController";

import {
    storeContext
} from "../../contexts";

import {
    IPDFStore
} from "../../stores/PDFStore";

const ResumePageController = (): IResumePageController => {

    const pdfStore: IPDFStore = React.useContext(storeContext).pdfStore;

    const observableValues: IResumePageControllerValues = {
        currentPage: observable.box(""),
        scrollTop: observable.box(true),
        isLoadingPage: observable.box(true),
        isLoadingPDF: observable.box(false),
        currentActionIcon: observable.box(IconTypes.PRINT)
    }

    const setScrollTop = action((isScrolling: boolean) => {
        observableValues.scrollTop.set(isScrolling);
    });

    const setPageLoading = action((isLoading: boolean) => {
        observableValues.isLoadingPage.set(isLoading);
    });

    const getPDFBlob = action(async (): Promise<IObservableValue<Blob> | undefined> => {
        observableValues.isLoadingPDF.set(true);

        try {
            await pdfStore.loadPDFBlob();
            return pdfStore.pdfBlob.get();
        }
        catch(error) {
            console.error(error)
        }
        finally {
            observableValues.isLoadingPDF.set(false);
        }
    });

    const setCurrentPage = action((page: string) => {
        observableValues.currentPage.set(page);
    });

    const setCurrentActionIcon = action((type: IconTypes) => {
        observableValues.currentActionIcon.set(type);
    });

    const downloadPDF = action(async (filename: string, type: IconTypes): Promise<void> => {
        observableValues.currentActionIcon.set(type);
  
        try {
            await getPDFBlob().then(response => {
                let url = window.URL.createObjectURL(response);
                let a = document.createElement("a");
                a.href = url;
                a.download = `${filename}.pdf`;
                a.click();
            });
        }

        catch(error) {
            console.error(error);
        }
    });

    const printPDF = action(async (type: IconTypes): Promise<void> => {

        observableValues.currentActionIcon.set(type);

        try {
            await getPDFBlob().then(response => {
                let url = window.URL.createObjectURL(response);
                let a = document.createElement("a");
                a.href = url;
                a.click();
            });
        }
        catch(error) {
            console.error(error);
        }
    });

    const actions: IResumePageControllerActions = {
        printPDF: printPDF,
        getPDFBlob: getPDFBlob,
        downloadPDF: downloadPDF,
        setScrollTop: setScrollTop,
        setPageLoading: setPageLoading,
        setCurrentPage: setCurrentPage,
        setCurrentActionIcon: setCurrentActionIcon
    }

    return {
        actions: actions,
        values: observableValues
    }
}

export default ResumePageController;