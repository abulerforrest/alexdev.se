import { IMenuItems } from "../interfaces/MenuItems";

export const menuItems: IMenuItems = [
	{
		title: "Projects",
		id: 0,
		type: "parent",
		items: [
			{
				id: 0,
				rootID: 0,
				parentID: 0,
				title: "Code",
				type: "child",
				href: "",
				items: [
					{
						id: 0,
						rootID: 0,
						parentID: 0,
						title: "Wordrazer",
						type: "sibling",
						tags: [
							{title: "game", color: "#F519D5"},
							{title: "js", color: "#F88D56"},
							{title: "github", color: "#F88D56"}
						],
						href: "/wordrazer"
					},
					{ 
						id: 1,
						rootID: 0,
						parentID: 0,
						title: "RetroComputer Words API",
						type: "sibling",
						tags: [
							{title: "api", color: "#F519D5"},
							{title: "express", color: "#F88D56"},
							{title: "github", color: "#F88D56"}
						],
						href: "/retrocomputer-words-api"
					}
				]
			}
		],
	},
	{
		title: "Resumé",
		id: 1,
		type: "parent",
		items: [
			{
				id: 0,
				rootID: 1,
				parentID: 1,
				title: "View my CV/Resumé",
				type: "child",
				href: "/resume",
				items: []
			},
			{
				id: 1,
				rootID: 1,
				parentID: 1,
				title: "test",
				type: "child",
				href: "",
				items: []
			}
		],
	},
	{
		title: "Music",
		id: 2,
		type: "parent",
		items: [
			{
				id: 0,
				rootID: 2,
				parentID: 2,
				title: "Albums",
				type: "child",
				href: "",
				items: [
					{
						title: "Out Of Memory",
						id: 0,
						rootID: 2,
						parentID: 0,
						type: "sibling",
						tags: [
							{title: "Retrowave", color: "#F519D5"}
						],
						href: "/out-of-memory"
					},
					{
						title: "Superposition",
						id: 1,
						rootID: 2,
						parentID: 0,
						type: "sibling",
						tags: [
							{title: "8-bit", color: "#F88D56"}
						],
						href: "http://www.google.com"
					},
					{
						title: "Back to the chipland",
						id: 2,
						rootID: 2,
						parentID: 0,
						type: "sibling",
						tags: [
							{title: "8-bit", color: "#F88D56"}
						],
						href: "/back-to-the-chipland"
					}
				]
			},
			{
				id: 1,
				rootID: 2,
				parentID: 0,
				title: "Soundtracks",
				type: "child",
				href: "",
				items: [
					{
						title: "12345678",
						id: 0,
						rootID: 2,
						parentID: 1,
						type: "sibling",
						tags: [
							{title: "8-bit", color: "#F88D56"}
						],
						href: ""
					}
				]
			}
		],
	},
	{
		title: "Contact",
		id: 3,
		type: "parent",
		items: [
			{
				id: 0,
				rootID: 3,
				parentID: 3,
				title: "About me",
				type: "child",
				href: "",
				items: [					{ 
					id: 0,
					rootID: 3,
					parentID: 0,
					title: "send me an email",
					type: "sibling",
					tags: [],
					href: ""
				}]
			},
			{
				id: 1,
				rootID: 3,
				parentID: 3,
				title: "Disclaimer",
				type: "child",
				href: "",
				items: []
			}
		],
	}
];