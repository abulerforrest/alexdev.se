import {
    IMenuItem, IMenuChildren, MenuItemType
} from "../MenuItems";

import {
    INavBarController
} from "../NavBarController";

import { IUrl } from "../../internal/utils";

export interface IMenuItemController {
	model: IMenuItem
    parentCtrl: INavBarController

    hasSelectedOption: boolean
    validateURL: (href: string) => IUrl
    childHasSiblings: (child: IMenuChildren) => boolean
    isCurrentChild: (childId: number) => boolean
    isSelected: (itemId: number, itemType: MenuItemType, itemParentId: number, itemRootId: number) => boolean
}

export interface IMenuItemCtrlValues extends IMenuItemController {
    hasSelectedOption: boolean
    validateURL: (href: string) => IUrl
    childHasSiblings: (child: IMenuChildren) => boolean
    isCurrentChild: (childId: number) => boolean
    isSelected: (itemId: number, itemType: MenuItemType, itemParentId: number, itemRootId: number) => boolean
}
