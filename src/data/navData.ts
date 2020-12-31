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
						href: "https://github.com/abulerforrest/wordrazer"
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
						href: "https://github.com/abulerforrest/retrocomputer-words-api"
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
						href: "https://open.spotify.com/album/0AmWzEjEsncdcao2fhgZEi"
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
						href: "https://open.spotify.com/album/4IIWMBurkg55ICSK6l3N2E"
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
						href: "https://open.spotify.com/album/4TPBVt5qwpe1wYELvmRGrl"
					}
				]
			},
			{
				id: 0,
				rootID: 2,
				parentID: 2,
				title: "EPs",
				type: "child",
				href: "",
				items: [
					{
						title: "Zalza vs. The World 1",
						id: 0,
						rootID: 2,
						parentID: 0,
						type: "sibling",
						tags: [
							{title: "8-bit", color: "#F88D56"}
						],
						href: "https://open.spotify.com/album/7pWx1v7B8aDhp9jvDZKZkU"
					},
					{
						title: "Zalza vs. The World 2",
						id: 0,
						rootID: 2,
						parentID: 0,
						type: "sibling",
						tags: [
							{title: "8-bit", color: "#F88D56"}
						],
						href: "https://open.spotify.com/album/466RvAB4NohJ8pTyCUiv1b"
					},
					{
						title: "Zalza vs. The World 3",
						id: 2,
						rootID: 2,
						parentID: 0,
						type: "sibling",
						tags: [
							{title: "8-bit", color: "#F88D56"}
						],
						href: "https://open.spotify.com/album/3LY4oAqavJbael8afI29Rj"
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
/*			{
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
					title: "My background",
					type: "sibling",
					tags: [],
					href: ""
				}]
			},
*/
			{
				id: 0,
				rootID: 3,
				parentID: 3,
				title: "Drop me an email",
				type: "child",
				href: "alexander@buler-forrest.se",
				items: []
			}
		],
	}
];