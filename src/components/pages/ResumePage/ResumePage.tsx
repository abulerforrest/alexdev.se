import React from "react";

import { autorun } from "mobx";

import {
	useObserver, 
	useLocalStore
} from "mobx-react";

import styled from "styled-components";

import { assets } from "./internal/assets";

import ResumePageController from "../../../controllers/ResumePageController";

import ActionIcons, { IconTypes, ActionIconsState } from "../../ActionIcons";

import PageLoader from "../../PageLoader";

import {
	IResumePageController
} from "../../../interfaces/ResumePageController";
import { device } from "../../../themes/mediaqueries";

const Link = ({ className, children, href }: HTMLAnchorElement | any) => (
	<a className={className} href={href}>
		{children}
	</a>
);

const div = ({ className }: HTMLDivElement | any) => (
	<div className={className} />
);

const span = ({ className }: HTMLSpanElement | any) => (
	<span className={className} />
);

const h1 = ({className, children}: HTMLHeadingElement | any) => {
	return <h1 className={className}>{children}</h1>;
}

const Root = styled.div`
	height: ${props => props.theme.resume.height};
	z-index: ${props => props.theme.resume.zIndex};
	box-shadow: ${props => props.theme.resume.boxShadow};
`;

const ResumeContainer = styled.div`
	display: flex;
	flex-shrink: 0;
	background-color: ${props => props.theme.resume.backgroundColor};
`;

const LeftSide = styled.div`
	width: 30px;
	min-height: ${props => props.theme.resume.height};
	background-color: ${props => props.theme.resume.palette.bgColorGrey};

	@media ${device.tabletP} {  
		width: 15px;
	}

	@media ${device.mobileL} {  
		width: 15px;
	}

	@media ${device.mobileS} {  
		width: 10px;
	}

`;

const LeftGreen = styled.div`
	width: 100%;
	height: 361px;
	margin-top: 428px;
	background-color: ${props => props.theme.resume.palette.bgColorGreen};
`;

const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: ${props => props.theme.resume.rightSideWidth};
	background-color: ${props => props.theme.resume.palette.bgColorGrey};

	@media ${device.tabletP} {  
		width: 270px;
	}

	@media ${device.mobileL} {
		width: 250px;
	}

	@media ${device.mobileS} {
		width: 140px;
	}

	@media ${device.mobileS2} {
		width: 110px;
	}
`;

const StyledIcon = styled(span)`
	width: ${props => props.size};
	height: ${props => props.size};
	background-size: ${props => props.size};
	background-image: url(${props => props.icon});

	@media ${device.tabletP} {  
		height: 50px;
		width: 50px;
		background-size: 50px;
	}

	@media ${device.mobileL} {  
		height: 50px;
		width: 50px;
		background-size: 50px;
	}

	@media ${device.mobileS} {  
		height: 30px;
		width: 30px;
		background-size: 30px;
	}
`;

const FollowMeLink = styled(Link)`
	font-size: 15px;
	margin-left: 20px;
	text-decoration: none;
	text-transform: lowercase;
	color: ${props => props.theme.resume.linkColor};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		margin-left: 15px;
		font-size: 14px;
	}

	@media ${device.mobileL} {  
		margin-left: 15px;
		font-size: 14px;
	}

	@media ${device.mobileS} {  
		font-size: 11px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 80px;
		margin-left: 10px;
	}

	@media ${device.mobileS2} {  
		font-size: 10px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 80px;
		margin-left: 10px;
	}
`;

const ProfilePicture = styled.div`
	margin-top: 55px;
	align-self: center;
	width: 300px;
	height: 300px;
	background-repeat: no-repeat;
	background-image: url(${assets.images.profilePic});
	background-size: contain;

	@media ${device.tabletP} {  
		width: 200px;
		height: 200px;
	}

	@media ${device.mobileL} {  
		width: 200px;
		height: 200px;
	}

	@media ${device.mobileS} {  
		width: 130px;
		height: 130px;
	}

	@media ${device.mobileS2} {  
		width: 110px;
		height: 110px;
	}

`;

const LogoSmall = styled.div`
	position: relative;
	padding-bottom: 18px;
	margin: -85px 0 0 650px;
	background-repeat: no-repeat;
	background-image: url(${assets.images.logoSmall});
	animation: ${props => props.theme.animationFocusIn};
	animation-delay: 0.2s;
	width: ${props => props.theme.resume.logoSmallSize};
	height: ${props => props.theme.resume.logoSmallSize};
	background-size: ${props => props.theme.resume.logoSmallSize};

	@media ${device.laptop} {  
		margin: -85px 0 0 570px;
	}

	@media ${device.tabletP} {
		width: 55px;
		height: 55px;
		position: absolute;
		background-size: 55px 55px;
		margin: -70px 0 0 340px;
	}

	@media ${device.mobileL} {
		width: 45px;
		height: 45px;
		position: absolute;
		background-size: 45px 45px;
		margin: -60px 0 0 320px;
	}

	@media ${device.mobileS} {
		width: 35px;
		height: 35px;
		position: absolute;
		background-size: 35px 35px;
		margin: -40px 0 0 155px;
	}

	@media ${device.mobileS2} {
		width: 30px;
		height: 30px;
		position: absolute;
		background-size: 30px 30px;
		margin: -36px 0 0 135px;
	}

	@media ${device.mobileS3} {
		width: 35px;
		height: 35px;
		background-size: 35px 35px;
		position: absolute;
		margin: -46px 0 0 200px;
	}

`;

const ContactInfoRow = styled.div`
	display: flex;
	flex-direction: row;
	height: 50px;
	padding-top: 30px;
	padding-left: 25px;

	@media ${device.mobileS} {  
		padding-left: 15px;
	}

	@media ${device.mobileS2} {  
		padding-left: 10px;
		padding-top: 25px;
	}

`;

const ContactInfoIcon = styled(span)`
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	margin-right: 30px;
	border-radius: 50%;
	background-position: center;
	background-repeat: no-repeat;
	background-image: url(${props => props.icon});
	background-color: ${props => props.theme.white};

	@media ${device.tabletP} {  
		margin-right: 20px;
		width: 40px;
		height: 40px;
	}

	@media ${device.mobileL} {  
		margin-right: 15px;
		width: 35px;
		height: 35px;
	}

	@media ${device.mobileS} {  
		display: none;
	}
`;

const ContactInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContactInfoHeading = styled.div`
	font-size: 19px;
	font-weight: bold;
	margin-bottom: 10px;
	text-transform: uppercase;
	font-family: ${props => props.theme.resume.primaryFont};
	color: ${props => props.theme.resume.palette.darkBlack};

	@media ${device.tabletP} {  
		font-size: 15px;
	}

	@media ${device.mobileL} {  
		font-size: 15px;
	}

	@media ${device.mobileS} {  
		margin-bottom: 5px;
		font-size: 11px;
	}

	@media ${device.mobileS2} {  
		margin-bottom: 5px;
		font-size: 10px;
	}
`;

const ContactInfoBread = styled.div`
	font-size: 17px;
	line-height: 24px;
	color: ${props => props.theme.resume.palette.greyAlt2};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 13px;
	}

	@media ${device.mobileL} {  
		font-size: 13px;
	}

	@media ${device.mobileS} {  
		line-height: 16px;
		font-size: 12px;
	}

	@media ${device.mobileS2} {  
		line-height: 15px;
		font-size: 10px;
	}
`;

const EducationRow = styled.div`
	display: flex;
	flex-direction: column;
	margin: 30px 0 25px 40px;
	color: ${props => props.theme.resume.palette.greyAlt};

	@media ${device.tabletP} {  
		margin-left: 30px;
	}

	@media ${device.mobileL} {  
		margin-left: 30px;
	}

	@media ${device.mobileS} {  
		margin-left: 15px;
	}

	@media ${device.mobileS2} {  
		margin: 20px 0 25px 10px;
	}
`;

const EducationLabel = styled.div`
	font-size: 19px;
	font-weight: bold;
	margin-bottom: 13px;
	text-transform: uppercase;
	color: ${props => props.theme.resume.palette.darkBlack};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 15px;
	}

	@media ${device.mobileL} {  
		font-size: 14px;
		max-width: 190px;
	}

	@media ${device.mobileS} {  
		font-size: 12px;
		max-width: 100px;
	}

	@media ${device.mobileS2} {  
		font-size: 11px;
		max-width: 80px;
	}

`;

const EducationSubLabel = styled.div`
	font-size: 17px;
	margin-bottom: 20px;
	text-transform: uppercase;
	color: ${props => props.theme.resume.palette.greyAlt2};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 14px;
		max-width: 200px;
	}

	@media ${device.mobileL} {  
		font-size: 14px;
		max-width: 200px;
	}

	@media ${device.mobileS} {  
		font-size: 11px;
		max-width: 110px;
	}

	@media ${device.mobileS2} {  
		font-size: 10px;
		max-width: 90px;
	}
`;

const EducationDescription = styled.div`
	font-size: 17px;
	font-style: italic;
	color: ${props => props.theme.resume.palette.grey};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 14px;
	}

	@media ${device.mobileL} {  
		font-size: 14px;
		max-width: 200px;
	}

	@media ${device.mobileS} {  
		font-size: 11px;
		width: 100px;
	}

	@media ${device.mobileS2} {  
		font-size: 10px;
		max-width: 90px;
	}
`;

const EducationDescriptionExtra = styled.div`
	font-size: 17px;
	font-style: italic;
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 14px;
		max-width: 220px;
	}

	@media ${device.mobileL} {  
		font-size: 14px;
		max-width: 220px;
	}

	@media ${device.mobileS} {  
		font-size: 11px;
		max-width: 100px;
	}

	@media ${device.mobileS2} {  
		font-size: 10px;
		max-width: 90px;
	}
`;

const ExpertiseRow = styled.div`
	display: flex;
	flex-direction: column;
	margin: 30px 0 25px 40px;

	@media ${device.tabletP} {  
		margin: 30px 0 25px 40px;
	}

	@media ${device.mobileL} {  
		margin: 30px 0 25px 40px;
	}

	@media ${device.mobileS} {  
		margin: 25px 0 15px 15px;
	}

	@media ${device.mobileS2} {  
		margin: 25px 0 20px 10px;
	}
`;

const ExpertiseLabel = styled.li`
	font-size: 17px;
	color: ${props => props.theme.resume.linkColor};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 15px;
	}

	@media ${device.mobileL} {  
		font-size: 15px;
	}

	@media ${device.mobileS} {  
		font-size: 11px;
		max-width: 100px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;		
	}

	@media ${device.mobileS2} {  
		font-size: 10px;
		max-width: 90px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;		
	}
`;

const RightHeading = styled.div`
	display: flex;
	align-items: center;
	left: -1px;
	height: 75px;
	width: 411px;
	font-size: 23px;
	margin-top: 20px;
	position: relative;
	padding-left: 40px;
	letter-spacing: 5px;
	text-transform: uppercase;
	color: ${props => props.theme.resume.palette.blackAlt2};
	font-family: ${props => props.theme.resume.secondaryFont};
	background-color: ${props => props.theme.resume.palette.softBlue};

	@media ${device.tabletP} {
		width: 231px;
		font-size: 20px;
		height: 65px;
	}

	@media ${device.mobileL} {
		width: 211px;
		font-size: 20px;
		height: 65px;
	}

	@media ${device.mobileS} {
		width: 126px;
		padding-left: 15px;
		font-size: 14px;
		height: 65px;
		letter-spacing: 3.5px;
	}

	@media ${device.mobileS2} {
		width: 101px;
		padding-left: 10px;
		font-size: 11px;
		height: 45px;
		letter-spacing: 3.5px;
	}
`;

const SkillsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 40px 0 0 40px;

	@media ${device.tabletP} {
		margin-left: 25px;
	}

	@media ${device.mobileL} {
		margin-left: 25px;
	}

	@media ${device.mobileS} {
		margin: 20px 0 0 25px;
	}

	@media ${device.mobileS} {
		margin: 10px 0 0 15px;
	}
`;

const SkillsLabel = styled.p`
	text-transform: uppercase;
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 13px;
	}

	@media ${device.mobileL} {
		font-size: 13px;
	}

	@media ${device.mobileS} {
		font-size: 10px;
		width: 100px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	@media ${device.mobileS2} {
		font-size: 9px;
	}
`;

const Meter = styled.div`
	height: 9px;
	width: 380px;
	margin: 0 0 20px 0;
	background-color: ${props => props.theme.white};

	@media ${device.tabletP} {  
		width: 220px;
	}

	@media ${device.mobileL} {
		width: 200px;
	}

	@media ${device.mobileS} {
		width: 110px;
	}

	@media ${device.mobileS2} {
		width: 70px;
	}
`;

const MeterValue = styled(div)`
	height: 9px;
	width: ${props => props.percent};
	background-color: ${props => props.theme.resume.palette.blue};
`;

const MainContent = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 750px;
	margin: 90px 40px 0 40px;

	@media ${device.laptop} {  
		max-width: 650px;
	}

	@media ${device.tabletP} {  
		max-width: 400px;
		margin: 90px 20px 0 20px;
	}

	@media ${device.mobileL} {
		max-width: 370px;
		margin: 90px 20px 0 20px;
	}

	@media ${device.mobileS} {
		max-width: 190px;
		margin: 90px 20px 0 10px;
	}

	@media ${device.mobileS2} {
		max-width: 180px;
		margin: 50px 10px 0 10px;
	}

	@media ${device.mobileS3} {
		max-width: 240px;
		margin: 50px 10px 0 10px;
	}

}
`;

const PositionHeading = styled.h1`
	font-size: 19px;
	line-height: 25px;
	margin-right: auto;
	letter-spacing: 1px;
	text-transform: uppercase;
	color: ${props => props.theme.resume.palette.black};
	border-bottom: 1px solid ${props => props.theme.black};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {  
		font-size: 17px;
		max-width: 300px;
	}

	@media ${device.mobileL} {
		font-size: 17px;
		max-width: 300px;
	}

	@media ${device.mobileS} {
		font-size: 13px;
		max-width: 110px;
		line-height: 18px;
	}

	@media ${device.mobileS2} {
		font-size: 13px;
		max-width: 100px;
		line-height: 18px;
	}

	@media ${device.mobileS3} {
		font-size: 16px;
		max-width: 130px;
	}

`;

const TextBlob = styled.div`
	max-width: 710px;
	font-size: 16px;
	word-spacing: 2px;
	line-height: 30px;
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.laptop} {  
		max-width: 610px;
	}

	@media ${device.tabletP} {  
		font-size: 13px;
		line-height: 25px;
	}

	@media ${device.mobileL} {
		font-size: 13px;
		line-height: 25px;
	}

	@media ${device.mobileS} {
		font-size: 11px;
		line-height: 22px;
	}

	@media ${device.mobileS2} {
		font-size: 10px;
		line-height: 20px;
	}
`;

const InfoSquare = styled.div`
	height 300px;
	width: 650px;
	font-size: 60px;
	margin-top: 60px;
	line-height: 70px;
	letter-spacing: 18px;
	padding: 30px 0 30px 60px; 
	text-transform: uppercase;
	color: ${props => props.theme.resume.palette.lightBlue};
	font-family: ${props => props.theme.resume.secondaryFont};
	background-color: ${props => props.theme.resume.palette.softBlue};

	@media ${device.laptop} {  
		max-width: 590px;
		padding: 30px 0 30px 60px; 
	}

	@media ${device.tabletP} {  
		line-height: 60px;
		height 260px;
		font-size: 40px;
		letter-spacing: 12px;
		max-width: 370px;
		padding: 20px 0 20px 30px; 
		word-wrap: break-word;
	}

	@media ${device.mobileL} {
		line-height: 60px;
		height 260px;
		font-size: 33px;
		letter-spacing: 12px;
		max-width: 340px;
		padding: 20px 0 20px 30px; 
		word-wrap: break-word;
	}

	@media ${device.mobileS} {
		line-height: 45px;
		height 220px;
		font-size: 23px;
		letter-spacing: 5px;
		margin-bottom: 15px;
		max-width: 180px;
		padding: 10px 0 10px 15px; 
		word-wrap: break-word;
	}
	@media ${device.mobileS2} {
		line-height: 35px;
		height 200px;
		font-size: 22px;
		letter-spacing: 4px;
		margin-bottom: 20px;
		max-width: 160px;
		padding: 10px 0 5px 15px; 
		word-wrap: break-word;
	}
`;

const PositionHeadingContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const PositionDateExtension = styled.div`
	display: flex;
	align-items: center;
	width: 300px;
	height: 30px;
	font-size: 10px;
	margin-left: auto;
	position: relative;
	white-space: nowrap;
	text-transform: uppercase;
	border-top: 1px solid ${props => props.theme.black};
	border-bottom: 1px solid ${props => props.theme.black};
	font-family: ${props => props.theme.resume.primaryFont};


	@media ${device.mobileS2} {  
		font-size: 7px;
		height: 26px;
	}

	@media ${device.mobileS} {  
		font-size: 7px;
		height: 26px;
	}
`;

const PositionDate = styled.div`
	display: flex;
	align-items: center;
	width: 20px;
	height: 30px;
	right: 58px;
	position: relative;
	padding-left: 10px;
	margin: 10px 0 0 auto;
	text-transform: uppercase;
	border-top-left-radius: 50%;
	border-bottom-left-radius: 50%;
	border-top: 1px solid ${props => props.theme.black};
	border-left: 2px solid ${props => props.theme.black};
	border-bottom: 1px solid ${props => props.theme.black};

	@media ${device.tabletP} {  
		right: 64px;
	}

	@media ${device.mobileS2} {  
		right: 58px;
		height: 26px;
		right: 34px;
	}

	@media ${device.mobileS} {  
		right: 58px;
		height: 26px;
		right: 34px;
	}
`;

const TitleBox = styled.div`
	display: flex;
	align-items: center;
	width: 500px;
	font-size: 17px;
	margin-top: 20px;
	letter-spacing: 6px;
	line-height: normal;
	padding: 18px 0 13px 20px;
	background: ${props => props.theme.white};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {
		padding-left: 16px;  
		width: 320px;
	}

	@media ${device.mobileL} {  
		padding-left: 10px;  
		width: 300px;
		font-size: 15px;
	}

	@media ${device.mobileS} {  
		padding: 10px 0 7px 10px;
		width: 155px;
		letter-spacing: 3px;
		font-size: 8px;
		margin-top: 10px;
	}

	@media ${device.mobileS2} {  
		padding: 6px 0 6px 6px;
		width: 140px;
		letter-spacing: 2px;
		font-size: 8.5px;
	}
`;

const PositionQuickInfo = styled.div`
	font-size: 17px;
	font-style: italic;
	margin-bottom: 20px;
	font-family: ${props => props.theme.resume.primaryFont};
	color: ${props => props.theme.resume.palette.lightGrey};

	@media ${device.tabletP} {  
		font-size: 14px;
		max-width: 300px;
	}

	@media ${device.mobileL} {  
		font-size: 14px;
		max-width: 300px;
	}

	@media ${device.mobileS} {  
		font-size: 11px;
		max-width: 300px;
	}

	@media ${device.mobileS2} {  
		font-size: 10px;
		max-width: 280px;
	}
`;

const ReferenceContactInfo = styled.div`
	font-size: 17px;
	margin-top: 30px;
	font-style: italic;
	font-family: ${props => props.theme.resume.primaryFont};
	color: ${props => props.theme.resume.palette.lightGrey};

	@media ${device.tabletP} {  
		font-size: 13px;
	}

	@media ${device.mobileL} {  
		font-size: 13px;
	}

	@media ${device.mobileS} {  
		font-size: 13px;
	}
`;

const SeperatorHorizontal = styled.div`
	min-width: 100%;
	height: 20px;
	margin: 20px 0 20px 0;
	background-color: ${props => props.theme.resume.palette.softBlue};

	@media ${device.laptop} {  
		max-width: 630px;
	}
`;

const SeperatorVertical = styled.div`
	width: 15px;
	height: 100wh;
	margin-top: 20px;
	background-color: ${props => props.theme.resume.palette.softBlue};

	@media ${device.tabletP} {  
		margin-top: 16px;
		height: 150px;
	}

	@media ${device.mobileL} {  
		margin-top: 16px;
		height: 150px;
	}

	@media ${device.mobileS} {  
		margin-top: 16px;
		margin-bottom: 26px;
		height: 20px;
		visibility: hidden;
	}

`;

const Reference = styled.div`
	display: flex;
	flex-direction: column;
`;

const ReferencesBlob = styled.div`
	display: flex;
	width: 100wh;
	height: 200px;
	margin: 30px 80px 100px 0;
	justify-content: space-between;

	@media ${device.tabletP} {  
		width: 400px;
	}

	@media ${device.mobileL} {  
		width: 400px;
	}

	@media ${device.mobileS} { 
		flex-direction: column;
		width: 300px;
		margin: 0 80px 80px 0;
	}
	
	@media ${device.desktopL} {
		width: 350px;
	}
`;

const ReferenceName = styled.p`
	font-size: 22px;
	font-weight: bold;
	margin-bottom: 4px;
	text-transform: uppercase;
	color: ${props => props.theme.resume.palette.black};
	font-family: ${props 	=> props.theme.resume.primaryFont};

	@media ${device.tabletP} {
		font-size: 16px;
	}

	@media ${device.mobileL} {
		font-size: 16px;
	}

	@media ${device.mobileS} {
		font-size: 14px;
	}

	@media ${device.desktopL} {
		font-size: 15px;
	}
`;

const ReferenceTitle = styled.p`
	margin: 0;
	font-size: 19px;
	color: ${props => props.theme.resume.palette.blackAlt};
	font-family: ${props => props.theme.resume.primaryFont};

	@media ${device.tabletP} {
		font-size: 15px;
	}

	@media ${device.mobileL} {
		font-size: 15px;
	}

	@media ${device.mobileS} {
		font-size: 14px;
	}

	@media ${device.desktopL} {
		font-size: 14px;
		width: 140px;
	}
`;

const InterestsWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 720px;
	margin-top: 40px;
	justify-content: space-between;
	color: ${props => props.theme.resume.palette.silver};

	@media ${device.laptop} {  
		width: 650px;
	}

	@media ${device.tabletP} {  
		width: 400px;
		margin-top: 20px;
		font-size: 13px;
	}

	@media ${device.mobileL} {
		width: 400px;
		margin-top: 20px;
		font-size: 13px;
	}

	@media ${device.mobileS} {
		width: 200px;
		margin-top: 20px;
		font-size: 7px;
	}

	@media ${device.desktopL} {
		width: 370px;
	}
`;

const InterestIcon = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100px;
	font-weight: bold;
	text-transform: uppercase;
	font-family: ${props => props.theme.resume.primaryFont};
`;

const FollowMeIcon = styled(div)`
	background-repeat: no-repeat;
	background-image: url(${props => props.icon});
	background-size: ${props => props.size? props.size: 24}px;
	width: ${props => props.size? props.size: 24}px;
	height: ${props => props.size? props.size: 24}px;
	opacity: ${props => props.opacity? props.opacity: props.theme.defaultOpacity};
	margin-top: ${props => props.marginTop? props.marginTop: props.theme.defaultMargin}px;

	@media ${device.mobileS2} {  
		height: 18px;
		width: 18px;
		background-size: 18px;
	}

	@media ${device.mobileS} {  
		height: 18px;
		width: 18px;
		background-size: 18px;
	}
`;

const FollowMeWrapper = styled.div`
	padding: 30px 0 0 25px;

	@media ${device.mobileS} {  
		padding: 20px 0 0 15px;
	}

	@media ${device.mobileS2} {  
		padding: 30px 0 0 15px;
	}

`;

const FollowMeRow = styled.div`
	display: flex;
	align-items: center;
	height: 45px;

	@media ${device.mobileS} {  
		height: 40px;
	}

`;

const VerticalSpacing = styled.div`
	height: 40px;

	@media ${device.tabletP} {  
		height: 30px;
	}

	@media ${device.mobileL} {  
		height: 30px;
	}

	@media ${device.mobileS} {  
		height: 30px;
	}

	@media ${device.mobileS2} {  
		height: 20px;
	}
`;

const Heading = styled(h1)`
	width: 720px;
	font-size: 26px;
	line-height: 65px;
	letter-spacing: 4px;
	text-transform: uppercase;
	color: ${props => props.theme.resume.palette.black};
	font-family: ${props => props.theme.resume.altFont};
	border-bottom: 1px solid ${props => props.borderColor};
	animation: ${props => props.theme.animationBorderGrow};
	animation-delay: 0.6s;

	@media ${device.tabletP} {  
		font-size: 20px;
		line-height: 45px;
	}

	@media ${device.mobileL} {  
		font-size: 20px;
		line-height: 45px;
	}

	@media ${device.mobileS} {  
		font-size: 17px;
		line-height: 24px;
	}

	@media ${device.mobileS2} {  
		font-size: 13px;
		line-height: 24px;
	}

	@media ${device.mobileS3} {  
		font-size: 17px;
		line-height: 24px;
	}

	`;

const renderControlIcons = (controller: IResumePageController) => {
	
	let actionIconsState: ActionIconsState = "visible";

	const { values, actions } = controller;

    if(!values.scrollTop.get()) {
        actionIconsState = "hidden"
	} 
	else if(values.isLoadingPDF.get()) {
		actionIconsState = "loading"
	}

	const icons = [
		{
			type: IconTypes.PRINT,
			src: () => actions.printPDF(IconTypes.PRINT)
		},
		{
			type: IconTypes.DOWNLOAD,
			src: () => actions.downloadPDF("CV_Resume_Alexander_Buler_Forrest", IconTypes.DOWNLOAD)
		}
	]

	return (
		<ActionIcons
			icons={icons}
			spinnerColor="#5fbacd"
			state={actionIconsState}
			isLoading={values.isLoadingPDF.get()}
			iconSize={30}
			currentIcon={values.currentActionIcon.get()}
		/>
	);

}

const renderResume = (controller: IResumePageController) => {

	const { icons } = assets;

	return (
		<Root id="resume">
			<ResumeContainer>
				<LeftSide>
					<LeftGreen />
				</LeftSide>
				<MainContent>
					{renderControlIcons(controller)}
					<Heading borderColor="#000000">
						Profile
						<LogoSmall />
					</Heading>
					<TextBlob>
						I love creative projects with a focus on problem solving and like to challenge myself to come up with new ideas. I’m a driven and ambitious perfectionist and I enjoy learning new things and meeting new people. I have a very strong interest in web solutions and I’m a team player who enjoys working dynamically in a creative team.
					</TextBlob>
					<InfoSquare>
						Alexander<br />
						Bulér<br />
						Forrest
						<TitleBox>
							Frontend Developer
						</TitleBox>
					</InfoSquare>
					<Heading
						borderColor="#000000"
					>
						Work Experience
					</Heading>
					<PositionHeadingContainer>
						<PositionHeading>
							Frontend Developer
						</PositionHeading>
						<PositionDate>
							<PositionDateExtension>FEB ’19 - TODAY</PositionDateExtension>
						</PositionDate>
					</PositionHeadingContainer>
					<PositionQuickInfo>
						ISTAFF SYSTEMS AB | Alströmergatan 39 Stockholm
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
						HIVE STREAMING AB | Fatbursgatan 1 Stockholm
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
						OOYALA AB | Sankt Eriksgatan 46C Stockholm
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
						BINERO AB / ONLINE GROUP Lindhagensgatan 126 Stockholm
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
						FS DATA AB | Sundstorget 2 Helsingborg
					</PositionQuickInfo>
					<TextBlob>
						Provided technical support via Phone / Helpdesk. I also created web design according to consultancy assignments and as well created graphical design for fsdata.se. The job involved daily troubleshooting in web pages, code and finding effective solutions to problems that arise. It gave me knowledge in HTML, CSS, Javascript, SSH/Linux, VPS and Dedicated servers, Apache/IIS and FTP/SFTP.
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
						STREAM INTERNATIONAL NORDIC AB | Rönnowsgatan 8 Helsingborg
					</PositionQuickInfo>
					<TextBlob>
						Received training on Dell's laptop products, component troubleshooting and customer support. I took about 25-40 customer calls a day. I quickly identified problems/errors, sent out new parts if needed and helped customers directly through Remote Desktop. We logged all calls in English and held a high standard in working in a rapid and structured manner.
					</TextBlob>
					<SeperatorHorizontal />
					<Heading borderColor="#b6b6b6">References</Heading>
					<ReferencesBlob>
						<Reference>
							<ReferenceName>Emmanuel Gomez</ReferenceName>
							<ReferenceTitle>
								Developer Team Lead
							</ReferenceTitle>
							<ReferenceTitle>
								<b>IStaff Systems AB</b>
							</ReferenceTitle>
							<ReferenceContactInfo>Phone: +46(0)790772268</ReferenceContactInfo>
						</Reference>
						<SeperatorVertical />
						<Reference>
							<ReferenceName>Niklas Nilsson</ReferenceName>
							<ReferenceTitle>
								Technical Product Specialist
							</ReferenceTitle>
							<ReferenceTitle>
								<b>TV4</b>
							</ReferenceTitle>
							<ReferenceContactInfo>Phone: +46(0)736549255</ReferenceContactInfo>
						</Reference>
					</ReferencesBlob>
					<Heading borderColor="#b6b6b6">Interests</Heading>
					<InterestsWrapper>
						<InterestIcon>
							<StyledIcon
								size="60px"
								icon={icons.codingIcon}
							/>
							<p>Coding</p>
						</InterestIcon>
						<InterestIcon>
							<StyledIcon
								size="60px"
								icon={icons.travellingIcon}
							/>
							<p>Travelling</p>
						</InterestIcon>
						<InterestIcon>
						<StyledIcon
							size="60px"
							icon={icons.runningIcon}
						/>
							<p>Running</p>
						</InterestIcon>
						<InterestIcon>
						<StyledIcon
							size="60px"
							icon={icons.composingIcon}
						/>
							<p>Composing</p>
						</InterestIcon>
						<InterestIcon>
						<StyledIcon
							size="60px"
							icon={icons.webIcon}
						/>
							<p>WEB</p>
						</InterestIcon>
					</InterestsWrapper>
				</MainContent>
				<RightSide>
					<ProfilePicture/>
					<RightHeading>Contacts</RightHeading>
					<ContactInfoRow>
						<ContactInfoIcon icon={icons.phoneIcon}/>
						<ContactInfoWrapper>
							<ContactInfoHeading>
								Phone
							</ContactInfoHeading>
							<ContactInfoBread>
								+46 739 85 91 90
							</ContactInfoBread>
						</ContactInfoWrapper>
					</ContactInfoRow>
					<ContactInfoRow>
						<ContactInfoIcon icon={icons.emailIcon} />
						<ContactInfoWrapper>
							<ContactInfoHeading>
								EMAIL
							</ContactInfoHeading>
							<ContactInfoBread>
								alex@alexdev.se
							</ContactInfoBread>
						</ContactInfoWrapper>
					</ContactInfoRow>
					<ContactInfoRow>
						<ContactInfoIcon icon={icons.addressIcon} />
						<ContactInfoWrapper>
							<ContactInfoHeading>
								ADDRESS
							</ContactInfoHeading>
							<ContactInfoBread>
								ESSINGERINGEN 9, 112 64<br />
								STOCKHOLM
							</ContactInfoBread>
						</ContactInfoWrapper>
					</ContactInfoRow>
					<VerticalSpacing />
					<RightHeading>Education</RightHeading>
					<EducationRow>
						<EducationLabel>Music Engineering</EducationLabel>
						<EducationSubLabel>KALMAR UNIVERSITY / TEKNIKUM - 2002 - 2004</EducationSubLabel>
						<EducationDescription>C++, VST plugins frameworks, algorithms, E-marketing and music application design</EducationDescription>
					</EducationRow>
					<EducationRow>
						<EducationLabel>NIKOLAI MUSIC PROGRAMME</EducationLabel>
						<EducationSubLabel>HIGH SCHOOL / HELSINGBORG – 1998 - 2001</EducationSubLabel>
						<EducationDescription>High school, Music aesthetical programme</EducationDescription>
					</EducationRow>
					<RightHeading>Skills</RightHeading>
					<SkillsWrapper>
						<SkillsLabel>Javascript</SkillsLabel>
						<Meter>
							<MeterValue percent="90%" />
						</Meter>
						<SkillsLabel>NODE.JS</SkillsLabel>
						<Meter>
							<MeterValue percent="70%" />
						</Meter>
						<SkillsLabel>React</SkillsLabel>
						<Meter>
							<MeterValue percent="96%" />
						</Meter>
						<SkillsLabel>MOBX / REDUX</SkillsLabel>
						<Meter>
							<MeterValue percent="73%" />
						</Meter>
						<SkillsLabel>Visual Studio Code</SkillsLabel>
						<Meter>
							<MeterValue percent="86%" />
						</Meter>
						<VerticalSpacing />
					</SkillsWrapper>
					<RightHeading>Expertise</RightHeading>
					<ExpertiseRow>
						<ExpertiseLabel>
							Web developing
						</ExpertiseLabel>
					</ExpertiseRow>
					<ExpertiseRow>
						<ExpertiseLabel>
							Web design
						</ExpertiseLabel>
					</ExpertiseRow>
					<ExpertiseRow>
						<ExpertiseLabel>
							E-Marketing
						</ExpertiseLabel>
					</ExpertiseRow>
					<ExpertiseRow>
						<ExpertiseLabel>
							Troubleshooting
						</ExpertiseLabel>
					</ExpertiseRow>
					<ExpertiseRow>
						<ExpertiseLabel>
							Ad-Tech / Video-Tech
						</ExpertiseLabel>
					</ExpertiseRow>
					<ExpertiseRow>
						<ExpertiseLabel>
							Hosting
						</ExpertiseLabel>
					</ExpertiseRow>
					<ExpertiseRow>
						<ExpertiseLabel>
							Social Media
						</ExpertiseLabel>
					</ExpertiseRow>
					<ExpertiseRow>
						<ExpertiseLabel>
							Music Production
						</ExpertiseLabel>
					</ExpertiseRow>
					<RightHeading>Extra</RightHeading>
					<EducationRow>
						<EducationLabel>SCHOLARSHIP IN MOVING IMAGE</EducationLabel>
						<EducationSubLabel>NIKOLAI SCHOOL / HELSINGBORG 2001</EducationSubLabel>
						<EducationDescriptionExtra>
							Got a scholarship in Moving Image classes for hard and innovative work in digital video editing.
						</EducationDescriptionExtra>
					</EducationRow>
					<EducationRow>
						<EducationLabel>RESPONSIBLE FOR FESTIVAL STAGE</EducationLabel>
						<EducationSubLabel>ROOKIE FESTIVAL / HULTSFRED 2003</EducationSubLabel>
						<EducationDescriptionExtra>
							I got the chance to work at the Rookie Festival being responsible for the stage and security.
						</EducationDescriptionExtra>
					</EducationRow>
					<EducationRow>
						<EducationLabel>LIFE GUARD TRAINING</EducationLabel>
						<EducationSubLabel>MALMÖ - 2005</EducationSubLabel>
						<EducationDescriptionExtra>
							Working at the Moltzau shipping company as a Jungman for two summers gave me Life Guard training and training in BA/Pyrotechnics.
						</EducationDescriptionExtra>
					</EducationRow>
					<VerticalSpacing />
					<RightHeading>Follow Me</RightHeading>
					<FollowMeWrapper>
						<FollowMeRow>
							<FollowMeIcon
								size={24}
								icon={icons.inIcon}
							/>
							<FollowMeLink
								href="https://linkedin.com/in/abulerforrest"
								target="_blank"
							>
								linkedin.com/in/abulerforrest
							</FollowMeLink>
						</FollowMeRow>
						<FollowMeRow>
							<FollowMeIcon
								size={24}
								icon={icons.fbIcon}
								opacity={0.95}
							/>
							<FollowMeLink
								href="https://facebook.com/abuler"
								target="_blank"
							>
								facebook.com/abuler
							</FollowMeLink>
						</FollowMeRow>
						<FollowMeRow>
							<FollowMeIcon
								size={26}
								icon={icons.ghIcon}
								opacity={0.95}
								marginTop={1}
							/>
							<FollowMeLink
								href="https://github.com/abulerforrest"
								target="_blank"
							>
								github.com/abulerforrest
							</FollowMeLink>						
						</FollowMeRow>
					</FollowMeWrapper>
				</RightSide>
			</ResumeContainer>
		</Root>
	);
}

const Resume = () => {

	const fetchController: IResumePageController = ResumePageController();

	const ctrl = useLocalStore(() => (fetchController));

		React.useEffect(
			() =>
			autorun(() => {

				// handle scroll event
				const onScroll = (event: any) => {

				const scrollY = event.currentTarget.scrollY;
		
				if(scrollY === 0) {
					ctrl.actions.setScrollTop(true);
				} else if(scrollY > 0 && ctrl.values.scrollTop.get() === true) {
					ctrl.actions.setScrollTop(false);
				}
		
			}		

			// page has mounted
			ctrl.actions.setPageLoading(false);
		
			window.addEventListener("scroll", (event) => onScroll(event), true);
		
			return function cleanup() {
				window.removeEventListener("scroll", onScroll);
			};
		}), [ctrl]
	);

	return useObserver(() => {

		return ( 
			<PageLoader
			isLoading={ctrl.values.isLoadingPage.get()}
			spinnerSize={80}
			>
				{renderResume(ctrl)}
			</PageLoader>
		);
	});
}

export default Resume;