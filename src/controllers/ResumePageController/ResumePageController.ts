import { observable, action } from "mobx";
import { RootStore } from "../../stores/RootStore";

import {
	IResumePageController
} from "../../interfaces/ResumePageController";

import {
    ActionIconTypes
} from "../../components/ActionIcons";

export class ResumePageController implements IResumePageController {

    private readonly rootStore: RootStore;

    @observable public scrollTop: boolean = true;

    @observable public isLoadingPDF: boolean = false;
    @observable public isLoadingPage: boolean = false;

    @observable public currentPage: string = "";
    @observable public currentActionIcon: ActionIconTypes = null!;
    
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        
        this.load();
    }

    @action
    public setScrollTop(isScrolling: boolean) : void {
        this.scrollTop = isScrolling;
    }

    @action
    public setPageLoading(isLoading: boolean) : void {
        this.isLoadingPage = isLoading;
    }


    @action
    public async getPDFBlob(): Promise<any> {

        this.isLoadingPDF = true;

        try {
            await this.rootStore.pdfStore.loadPDFBlob();
            return this.rootStore.pdfStore.pdfBlob;
        }
        catch(error) {

        }
        finally {
            this.isLoadingPDF = false;
        }
    }

    private async load() : Promise<void> {
        
        this.setPageLoading(true);
        
		try {
            
         }
		catch(error) {

		}
		finally {

		}
	}
    
    @action
    public setCurrentPage(page: string) : void {
        this.currentPage = page;
    }

    @action
    private setCurrentActionIcon(type: ActionIconTypes) : void {
        this.currentActionIcon = type;
    }

    @action
    public downloadPDF(filename: string, type: ActionIconTypes) : void {
        this.setCurrentActionIcon(type);

		this.getPDFBlob().then(response => {
			let url = window.URL.createObjectURL(response);
			let a = document.createElement("a");
			a.href = url;
			a.download = `${filename}.pdf`;
			a.click();
		});
    }

    @action
    public async printPDF(type: ActionIconTypes) : Promise<void> {
        this.setCurrentActionIcon(type);

        await this.getPDFBlob().then(response => {
            let url = window.URL.createObjectURL(response);
            let a = document.createElement("a");
            a.href = url;
            a.click();
        });
    }

}

export default ResumePageController;