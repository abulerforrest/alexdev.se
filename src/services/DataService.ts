import {
    IDataService
} from "../interfaces/services/DataService";

import { IMenuItems } from "../interfaces/MenuItems";

import {
    menuItems
} from "../data/navData";

export const DataService = () => {
    const service: IDataService = {
        async getNavData(): Promise<IMenuItems> {

            const navBarData: IMenuItems = menuItems;

            return navBarData;
        }
    }
    return service;
}