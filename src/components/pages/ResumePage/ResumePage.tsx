
import * as React from "react";
import { observer } from "mobx-react";

import styled from "styled-components";

import codingIcon from "../../../assets/png/coding_icon.png";
import travellingIcon from "../../../assets/png/travelling_icon.png";

const Root = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: scroll;
`;

const ResumeContainer = styled.div`
	display: flex;
	flex-shrink: 0;
	margin-left: 200px;
	margin-right: 400px;
	background-color: white;
	width: 1200px;
	height: 4000px;
`;

const LeftSide = styled.div`
	background-color: #E9E9E9;
	width: 30px;
	height: 4000px;
`;

const LeftGreen = styled.div`
	margin-top: 310px;
	background-color: #DAF5D6;
	width: 100%;
	height: 365px;
`;

const RightSide = styled.div`
	background-color: #E9E9E9;
	margin-left: auto;
	width: 400px;
	height: 4000px;
`;

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	width: 750px;
	margin: 30px 40px 0 40px;
`;

const Heading = styled.h1`
	font-size: 26px;
	color: rgba(0, 0, 0, .65);
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	letter-spacing: 4px;
	width: 89vh;
	line-height: 65px;
	border-bottom: 1px solid #000;
`;

const PositionHeading = styled.h1`
	display: flex;
	margin-right: auto;
	font-size: 19px;
	color: rgba(0, 0, 0, .65);
	font-family: 'Arial';
	text-transform: uppercase;
	letter-spacing: 1px;
	line-height: 25px;
	border-bottom: 1px solid #000;
`;

const TextBlob = styled.div`
	font-family: Arial;
	font-size: 16px;
	width: 710px;
	word-spacing: 4px;
	line-height: 30px;
`;

const InfoSquare = styled.div`
	font-size: 60px;
	margin-top: 60px;
	height 300px;
	width: 650px;
	padding: 30px 0 30px 60px; 
	letter-spacing: 18px;
	text-transform: uppercase;
	font-family: 'Nunito Sans', sans-serif;
	background-color: #99D3DF;
	color: rgba(0, 0, 0, 0.6);
	line-height: 70px;
`;

const PositionHeadingContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const PositionDateExtension = styled.div`
	display: flex;
	position: relative;
	white-space: nowrap;
	width: 300px;
	border-top: 1px solid #000;
	border-bottom: 1px solid #000;
	font-family: Arial;
	font-size: 12px;
	text-transform: uppercase;
	height: 30px;
	display: flex;
	align-items: center;
	margin-left: auto;
`;

const PositionDate = styled.div`
	position: relative;
	right: 60px;
	margin-top: 10px;
	border-top-left-radius: 50%;
	border-bottom-left-radius: 50%;
	border-top: 1px solid #000;
	border-bottom: 1px solid #000;
	font-family: Arial;
	font-size: 12px;
	text-transform: uppercase;
	width: 20px;
	height: 30px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	border-left: 2px solid #000;
	margin-left: auto;
`;

const TitleBox = styled.div`
	letter-spacing: 6px;
	line-height: normal;
	background: #fff;
	width: 100%;
	margin-top: 20px;
	color: rgba(0, 0, 0, 0.7);
	font-family: Arial;
	font-size: 20px;
	display: flex;
	padding-left: 20px;
	padding-top: 12px;
	padding-bottom: 10px;
	width: 400px;
	align-items: center;
`;

const PositionQuickInfo = styled.div`
	font-family: Arial;
	color: #8C8B8B;
	text-transform: italic;
	font-size: 17px;
	margin-bottom: 20px;
`;

const ReferenceContactInfo = styled.div`
	font-family: Arial;
	color: #8C8B8B;
	text-transform: italic;
	font-size: 17px;
	margin-top: 30px;
`;

const SeperatorHorizontal = styled.div`
	width: 100wh;
	height: 20px;
	background-color: #99D3DF;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const SeperatorVertical = styled.div`
	height: 100wh;
	width: 15px;
	background-color: #99D3DF;
	margin-top: 20px;
`;

const Reference = styled.div`
	display: flex;
	flex-direction: column;
`;

const ReferencesBlob = styled.div`
	margin-top: 40px;
	margin-right: 80px;
	margin-bottom: 100px;
	display: flex;
	height: 200px;
	justify-content: space-between;
	width 100wh;
`;

const ReferenceName = styled.p`
	color: rgba(0, 0, 0, .75);
	font-family: Arial;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 22px;
	margin-bottom: 4px;
`;

const ReferenceTitle = styled.p`
	color: rgba(0, 0, 0, .75);
	font-family: Arial;
	font-size: 19px;
	margin: 0;
`;

const StyledIcon = styled.div`
	display: flex;
	width: 60px;
	height: 60px;
`;

const Interests = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	color: rgba(0, 0, 0, .35);
`;

const InterestIcon = styled.div`
	width: 100px;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-family: Arial;
	font-weight: bold;
`;


interface IResumePageProps {

}

@observer
class Resume extends React.Component<IResumePageProps> {

	constructor(props: any) {
		super(props);

	}

	render(): React.ReactNode {

		return (
			<Root>
				<ResumeContainer>
				<LeftSide>
					<LeftGreen />
				</LeftSide>
					<MainContent>
						<Heading>Profile</Heading>
						<TextBlob>
							I love creative projects with a focus on problem solving and like to challenge myself to come up with new ideas. I’m a driven and ambitious perfectionist and I enjoy learning new things and meeting new people. I have a very strong interest in web solutions and I’m a team player who enjoys working dynamically in a creative team.
						</TextBlob>
						<InfoSquare>
							Alexander<br/>
							Bulér<br/>
							Forrest
								<TitleBox>
									Frontend Developer
								</TitleBox>
						</InfoSquare>
						<Heading>Work Experience</Heading>
						<PositionHeadingContainer>
							<PositionHeading>
								Frontend Developer
							</PositionHeading>
							<PositionDate>
								<PositionDateExtension>FEB ’19 - TODAY</PositionDateExtension>
							</PositionDate>
						</PositionHeadingContainer>
						<PositionQuickInfo>
							<i>ISTAFF SYSTEMS AB | Alströmergatan 39 Stockholm</i>
						</PositionQuickInfo>
						<TextBlob>
							I work with their staffing system IStaff. We create each section of the system into a new platform using the React JS Javascript library. We use Typescript, Mobx, JSS, Docker and follow the Atomic File Pattern. I’ve created components from complete pages to modals, search inputs and date range pickers. We work closely and hold weekly standup meetings to highlight our progress.
						</TextBlob>
						<SeperatorHorizontal />
						<PositionHeadingContainer>
							<PositionHeading>
								Technical Support Engineer
							</PositionHeading>
							<PositionDate>
								<PositionDateExtension>MAY ’18 - NOV ’18</PositionDateExtension>
							</PositionDate>
						</PositionHeadingContainer>
						<PositionQuickInfo>
							<i>HIVE STREAMING AB | Fatbursgatan 1 Stockholm</i>
						</PositionQuickInfo>
						<TextBlob>
							I worked with supporting customers using Hive’s product. Hive enables friction free video streaming for corporate networks by utilizing the local network capacity (using P2P to minimize calls to the customers CDN). Tasks could be, simulating a live video event to test the capacity of the customers network and troubleshooting buffer issues. Integrations were with Microsoft Stream, SMB, and Teams.
						</TextBlob>
						<SeperatorHorizontal />
						<PositionHeadingContainer>
							<PositionHeading>
								Technical Support Engineer
							</PositionHeading>
							<PositionDate>
								<PositionDateExtension>JUN ’15 - MAY ’18</PositionDateExtension>
							</PositionDate>
						</PositionHeadingContainer>
						<PositionQuickInfo>
							<i>OOYALA AB | Sankt Eriksgatan 46C Stockholm</i>
						</PositionQuickInfo>
						<TextBlob>
							At Ooyala I worked with Ad serving for desktop and mobile devices, including products such as Pulse SSP (Programmatic advertising), Ooyala Pulse™ (Ad campaign delivery system), Backlot™ (CMS) and did troubleshooting of 3rd-party ad providers ad tags (Doubleclick, Brightcove response/requests), live stream support and content workflows. Tasks also included training sessions for customers and internally as well as coding internal tools in React and PHP.
						</TextBlob>
						<SeperatorHorizontal />
						<PositionHeadingContainer>
							<PositionHeading>
								Second-line Support Engineer
							</PositionHeading>
							<PositionDate>
								<PositionDateExtension>APR ’12 - JUN ’15</PositionDateExtension>
							</PositionDate>
						</PositionHeadingContainer>
						<PositionQuickInfo>
							<i>BINERO AB / ONLINE GROUP Lindhagensgatan 126 Stockholm</i>
						</PositionQuickInfo>
						<TextBlob>
							Binero is a web hosting company that has won prizes for best web service several years in a row. I can proudly say that I’ve held the highest score in terms of customer satisfaction. Since Binero was acquired by Online Group, I had the opportunity to work with several hosting infrastructures within the same concern which involved companies such as Crystone, Levonline and Space2u.
						</TextBlob>
						<SeperatorHorizontal />
						<PositionHeadingContainer>
							<PositionHeading>
								Support Engineer, Web Developer
							</PositionHeading>
							<PositionDate>
								<PositionDateExtension>SEP ’07 - MAR ’12</PositionDateExtension>
							</PositionDate>
						</PositionHeadingContainer>
						<PositionQuickInfo>
							<i>FS DATA AB | Sundstorget 2 Helsingborg</i>
						</PositionQuickInfo>
						<TextBlob>
							Provided technical support via Phone / Helpdesk. I also created web design according to consultancy assignments and as well created graphical design for fsdata.se. The job involved daily troubleshooting in web pages, code and ﬁnding effective solutions to problems that arised. It gave me knowledge in HTML, CSS, Javascript, SSH/Linux, VPS and Dedicated servers, Apache/IIS and FTP/SFTP.
						</TextBlob>
						<SeperatorHorizontal />
						<PositionHeadingContainer>
							<PositionHeading>
								Helpdesk Support Dell Laptop
							</PositionHeading>
							<PositionDate>
								<PositionDateExtension>2007 - 3 Months</PositionDateExtension>
							</PositionDate>
						</PositionHeadingContainer>
						<PositionQuickInfo>
							<i>STREAM INTERNATIONAL NORDIC AB | Rönnowsgatan 8 Helsingborg</i>
						</PositionQuickInfo>
						<TextBlob>
							Received training on Dell's laptop products, component troubleshooting and customer support. I took about 25-40 customer calls a day. I quickly identified problems/errors, sent out new parts if needed and helped customers directly through Remote Desktop. We logged all calls in English and held a high standard in working in a rapid and structured manner.
						</TextBlob>
						<SeperatorHorizontal />
						<Heading>References</Heading>
						<ReferencesBlob>
							<Reference>
								<ReferenceName>Emmanuel Gomez</ReferenceName>
								<ReferenceTitle>
									Developer Team Lead<br/>
									<b>IStaff Systems AB</b>
								</ReferenceTitle>
								<ReferenceContactInfo>Phone: +46(0)790772268</ReferenceContactInfo>
							</Reference>
							<SeperatorVertical />
							<Reference>
								<ReferenceName>Niklas Nilsson</ReferenceName>
								<ReferenceTitle>
									Technical Product Specialist<br/>
									<b>TV4</b>
								</ReferenceTitle>
								<ReferenceContactInfo>Phone: +46(0)736549255</ReferenceContactInfo>
							</Reference>
						</ReferencesBlob>
						<Heading>Interests</Heading>
						<Interests>
							<InterestIcon>
								<StyledIcon>
									<img src={codingIcon} />
								</StyledIcon>
								<p>Coding</p>
							</InterestIcon>
							<InterestIcon>
								<StyledIcon>
									<img src={travellingIcon} />
								</StyledIcon>
								<p>Travelling</p>
							</InterestIcon>
						</Interests>
					</MainContent>
					<RightSide />
				</ResumeContainer>
			</Root>
		);
	}

}

export default Resume;