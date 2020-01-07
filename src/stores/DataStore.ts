import {
    action,
    observable,
    ObservableMap
} from "mobx";

import { createServices } from "../services/createServices";

import { IMenuItem, IMenuItems } from "../interfaces/MenuItems";

import MenuItemsModel from "../models/MenuItemModel";

type NavDataMap = ObservableMap<IMenuItem, IMenuItem>

export interface IDataStore {
    navData: NavDataMap
    fetchNavData: () => Promise<IMenuItems>
    getMenuItems: () => IterableIterator<IMenuItem>
}

const navData: NavDataMap = observable.map();

export const DataStore = () => {
    const { dataService } = createServices();

    const store: IDataStore = {
        navData: navData,
        fetchNavData: action(async (): Promise<any> => {
            const getData: IMenuItems = await dataService.getNavData();

            for(const menuitem in getData) {
                const item: IMenuItem = getData[menuitem];
                navData.set(item, MenuItemsModel(item));
            }
        }),
        getMenuItems: action((): IterableIterator<IMenuItem> => {
            return navData.values();
        })
    };
    return store;
};