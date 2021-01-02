import React from "react";

export type MenuItemType = "parent" | "child" | "sibling";

export interface IMenuLinkProps {
	children: React.ReactNode
	className?: string
	onClick?: (href: string, id: number, parentID: number, rootID: number, title: string) => void
	onMouseEnter?: () => void
}

export interface IMenuItem {
	title: string
	id: number
	type: MenuItemType
	items: IMenuChildren[]
}

export interface IMenuItems {
	[index: number]: {
		title: string
		id: number
		type: MenuItemType
		items: IMenuChildren[]
	}
}

export interface IMenuSiblingTags {
	title: string
	color: string
}

export interface IMenuSiblings {
	id: number
	title: string
	type: MenuItemType
	tags: IMenuSiblingTags[]
	href: string
	parentID: number
	rootID: number
}

export interface IMenuChildren {
	id: number
	title: string
	type: MenuItemType
	items: IMenuSiblings[]
	href: string
	parentID: number
	rootID: number
}