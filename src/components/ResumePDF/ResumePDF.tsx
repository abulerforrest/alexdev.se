
import * as React from "react";

import {
	Font,
	Text,
	Document,
	StyleSheet
} from '@react-pdf/renderer';

import externalFonts from "./internal/fonts";

import styled from '@react-pdf/styled-components';

// icon assets
import phoneIcon from "../../assets/png/phone.png";
import emailIcon from "../../assets/png/email.png";
import addressIcon from "../../assets/png/address.png";

import ghIcon from "../../assets/png/gh.png";
import fbIcon from "../../assets/png/fb.png";
import inIcon from "../../assets/png/in.png";

import webIcon from "../../assets/png/web_icon.png";
import codingIcon from "../../assets/png/coding_icon.png";
import runningIcon from "../../assets/png/running_icon.png";
import composingIcon from "../../assets/png/composing_icon.png";
import travellingIcon from "../../assets/png/travelling_icon.png";

// image assets
import logoSmall from "../../assets/png/a.png";
import profilePic from "../../assets/png/profile_pic.png";

const styles = StyleSheet.create({
    underline: {
        marginTop: 10,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#767676",
        borderBottomStyle: "solid"
    },
    underlineLight: {
        marginTop: 10,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#9c9c9c",
        borderBottomStyle: "solid"
    },
    marginTopSpace: {
        marginTop: 20
    }
});

// load external fonts
externalFonts.map(font => {
	return (
		Font.register(
			{
				family: font.family,
				src: font.src
			}
		)
	)
});

const ResumeContainer = styled.Page`
    display: flex;
	flex-shrink: 0;
    flex-direction: row;
    width: 595px;
	background-color: #ffffff;
`;

const LeftSide = styled.View`
	width: 15px;
	height: 1683px;
	background-color: #e9e9e9;
`;

const LeftGreen = styled.View`
	width: 100%;
	height: 165px;
	margin-top: 147px;
	background-color: #daf5d6;
`;

const RightSide = styled.View`
	display: flex;
	flex-direction: column;
    justify-content: flex-start;
    width: 200px;
    height: 1683px;
	padding-top: 10px;
	background-color: #e9e9e9;
`;

const RightHeading = styled.Text`
	display: flex;
	align-items: center;
	position: relative;
	left: -1px;
	height: 35px;
	width: 200px;
	color: #2c5a6a;
	font-size: 12px;
	margin-top: 11px;
	letter-spacing: 3px;
	font-family: "Nunito";
    padding: 10px 0 0 20px;
	text-transform: uppercase;
    background-color: #99d3df;
`;

const MainContent = styled.View`
	display: flex;
    flex-direction: column;
    width: 350px;
	margin: 30px 20px 0 20px;
`;

const TextBlob = styled.Text`
	color: #4a4a4a;
    font-size: 8.5px;
    font-family: Roboto;
    line-height: 1.8px;
`;

const Heading = styled.Text`
	color: #585858;
	font-size: 14px;
	letter-spacing: 3px;
	font-family: "Montserrat";
	text-transform: uppercase;
`;

const ContinuedWrapper = styled.Text`
    display: flex;
    align-self: flex-end;
    color: #585858;
    font-size: 11px;
    margin-top: -15px;
    font-family: "Roboto";
`;

const ContinuedText = styled.Text`
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const InfoSquare = styled.View`
	height 200px;
	width: 350px;
	margin: 15px 0 15px 0;
    padding: 10px 0 10px 40px; 
	background-color: #99d3df;
`;

const InfoSquareLabel = styled.Text`
	color: #3a575e;
    font-size: 27px;
    font-family: Nunito;
    margin-bottom: -6px;
    letter-spacing: 10px;
    text-transform: uppercase;
`;

const TitleBox = styled.View`
	display: flex;
    width: 270px;
	background: #ffffff;
	margin: 10px 0 10px 0;
	padding: 10px 0 8px 10px;
`;

const TitleBoxText = styled.Text`
	color: #4a4a4a;
	font-size: 10px;
    font-family: Roboto;
    letter-spacing: 3px;
	text-transform: uppercase;
`;

const LogoSmall = styled.Image`
	width: 38px;
	height: 38px;
    padding: 2px;
    position: absolute;
	margin: -18px 0 0 310px;
`;

const ProfilePicture = styled.Image`
	padding: 1px;
    width: 140px;
	height: 140px;
    margin-left: -8px;
	align-self: center;
`;

const IconWrapper = styled.View`
	display: flex;
    align-items: center;
    width: 26px;
	height: 26px;
    border-radius: 50;
    margin-right: 15px;
	justify-content: center;
    background-color: #ffffff;
`;

const StyledIcon = styled.Image`
	width: 13px;
	height: 13px;
    padding: 1px;
`;

const StyledIconInterest = styled.Image`
	width: 43px;
	height: 43px;
	padding: 1px;
`;

const ContactInfoWrapper = styled.View`
	display: flex;
    flex-direction: column;
`;

const SeperatorLarge = styled.View`
    height: 17px;
    display: block;
`;

const SeperatorSmall = styled.View`
    height: 13px;
    display: block;
`;

const SeperatorMini = styled.View`
    height: 7px;
    display: block;
`;

const ContactInfoRow = styled.View`
	display: flex;
	flex-direction: row;
    height: 30px;
	color: #141414;
    padding-left: 20px;
`;

const ContactInfoHeading = styled.Text`
	color: #494949;
	font-size: 10px;
    margin-bottom: 5px;
	font-family: "RobotoBold";
    text-transform: uppercase;
`;

const ContactInfoBread = styled.Text`
    display: flex;
    flex-direction: column;
    color: #646464;
	font-size: 9px;
	font-family: "Roboto";
`;

const EducationRow = styled.View`
	display: flex;
	flex-direction: column;
    width: 150px;
    color: #707070;
    margin-left: 20px;

`;

const EducationLabel = styled.Text`
	color: #494949;
	font-size: 10px;
	margin-bottom: 10px;
    font-family: "RobotoBold";
    text-transform: uppercase;
`;

const EducationSubLabel = styled.Text`
	width: 150px;
	font-size: 9px;
    margin-bottom: 9.5px;
	text-transform: uppercase;
`;

const EducationDescription = styled.Text`
	width: 150px;
	color: #898989;
	font-size: 9px;
    font-family: "RobotoItalic";
`;

const SkillsWrapper = styled.View`
	display: flex;
	flex-direction: column;
	margin: 20px 0 0 20px;
`;

const SkillsLabel = styled.Text`
	color: #6b6b6b;
	display: block;
	font-size: 9px;
	font-family: "Roboto";
    text-transform: uppercase;
`;

const Meter = styled.View`
	height: 4px;
	width: 150px;
	margin: 6px 0 15px 0;
	background-color: #ffffff;
`;

const MeterValueJavascript = styled.View`
	width: 90%;
	height: 4px;
	background-color: #8bbad6;
`;

const MeterValueNode = styled.View`
	width: 70%;
	height: 4px;
	background-color: #8bbad6;
`;

const MeterValueReact = styled.View`
	width: 96%;
	height: 4px;
	background-color: #8bbad6;
`;

const MeterValueMobxRedux = styled.View`
	width: 73%;
	height: 4px;
	background-color: #8bbad6;
`;

const MeterValueVSCode = styled.View`
	width: 86%;
	height: 4px;
	background-color: #8bbad6;
`;

const PositionHeading = styled.Text`
	display: flex;
	color: #585858;
	font-size: 10px;
	margin-right: auto;
	letter-spacing: 0.6pt;
	font-family: "RobotoBold";
	text-transform: uppercase;
	border-bottom: 1px solid #000;
`;

const PositionHeadingContainer = styled.View`
    display: flex;
    flex-direction: row;
	justify-content: space-between;
`;

const PositionDateExtension = styled.Text`
	display: flex;
	align-items: center;
    padding: 4px;
    width: 100px;
    height: 30px;
    font-size: 7px;
    color: #4a4a4a;
	position: relative;
	white-space: nowrap;
    font-family: "Roboto";
    margin: 5px 0 0 auto;
	text-transform: uppercase;
`;

const PositionDate = styled.Text`
	width: 65px;
	height: 18px;
    margin-top: 5px;
	padding: 5px 0 2px 6px;
    border: 1px solid #646464;
    border-top-left-radius: 50;
	border-bottom-left-radius: 50;
    border-right: none;
`;

const SeperatorHorizontal = styled.View`
	width: 350px;
	height: 10px;
	margin: 10px 0 10px 0;
	background-color: #99D3DF;
`;

const PositionQuickInfo = styled.Text`
	color: #8C8B8B;
    margin-top: -5px;
	font-size: 9.5px;
	margin-bottom: 10px;
    font-family: "RobotoItalic";
`;

const ExpertiseRow = styled.View`
    display: flex;
	flex-direction: column;
	margin: 0 0 7px 20px;
`;

const ExpertiseLabel = styled.Text`
	color: #585858;
    font-size: 9px;
	font-family: "Roboto";
`;

const EducationDescriptionExtra = styled.Text`
	font-size: 10px;
	font-family: "RobotoItalic";
`;

const Reference = styled.View`
	display: flex;
	flex-direction: column;
`;

const ReferencesBlob = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	margin: 25px 40px 0 0;
`;

const ReferenceName = styled.Text`
	color: #4a4a4a;
	font-size: 12px;
	margin-bottom: 1px;
	font-family: RobotoBold;
	text-transform: uppercase;
`;

const ReferenceTitle = styled.View`
    display: flex;
    flex-direction: column;
`;

const ReferenceContactInfo = styled.Text`
	color: #8c8b8b;
	font-size: 10px;
	margin-top: 15px;
	font-family: RobotoItalic;
`;

const SeperatorVertical = styled.View`
    width: 7px;
    height: 100px;
	background-color: #99d3df;
`;

const ReferenceTitleText = styled.Text`
	color: #4a4a4a;
	font-size: 10px;
	margin-bottom: 2px;
	font-family: "Roboto";
`;

const ReferenceCompanyText = styled.Text`
    color: #4a4a4a;
    font-size: 10px;
	font-family: "RobotoBold";
`;

const FollowMeWrapper = styled.View`
    display: flex;
	padding-left: 20px;
	flex-direction: column;
`;

const FollowMeRow = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 23px;
`;

const FollowMeLink = styled.Text`
	color: #707070;
	font-size: 8px;
	margin-left: 15px;
	font-family: "Roboto";
	text-transform: lowercase;
`;

const Interests = styled.View`
	display: flex;
    flex-direction: row;
	justify-content: space-between;
	width: 350px;
	margin-top: 20px;
`;

const InterestIconText = styled.Text`
	color: #b6b6b6;
	font-size: 8px;
	margin-top: 9.5px;
	font-family: "RobotoBold";
    text-transform: uppercase;
`;

const InterestIcon = styled.View`
    display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 60px;
    margin-top: -4px;
`;

const FacebookIcon = styled.Image`
	display: flex;
	width: 12px;
	height: 12px;
	opacity: .95;
`;

const GithubIcon = styled.Image`
	display: flex;
    width: 12px;
	height: 12px;
	margin-top: 1px;
`;

const LinkedInIcon = styled.Image`
	display: flex;
    width: 12px;
	height: 12px;
	opacity: .95;
`;

const ResumePDF = (
	<Document>
		<ResumeContainer size="A4" wrap={true}>
			<LeftSide>
				<LeftGreen />
			</LeftSide>
            <MainContent>
                <LogoSmall
                    src={logoSmall}
                />
                <Heading>
                    Profile
                </Heading>
                <Text style={styles.underline} />
                <TextBlob>
                    I love creative projects with a focus on problem solving and like to challenge myself to come up with new ideas. I’m a driven and ambitious perfectionist and I enjoy learning new things and meeting new people. I have a very strong interest in web solutions and I’m a team player who enjoys working dynamically in a creative team.
                </TextBlob>
                <InfoSquare>
                    <InfoSquareLabel>
                        Alexander
                    </InfoSquareLabel>
                    <InfoSquareLabel>
                        Bulér
                    </InfoSquareLabel>
                    <InfoSquareLabel>
                        Forrest
                    </InfoSquareLabel>
                    <TitleBox>
                        <TitleBoxText>
                            Frontend Developer
                        </TitleBoxText>
                    </TitleBox>
                </InfoSquare>
                <SeperatorMini />
                <Heading>
                    Work Experience
                </Heading>
                <Text style={styles.underline} />
				<PositionHeadingContainer>
					<PositionHeading style={styles.underline}>
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
					<PositionHeading style={styles.underline}>
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
                    I worked with supporting customers using Hive’s product. Hive enables friction free video streaming for corporate networks by utilizing the local network capacity (using P2P to minimize calls to the customers CDN). Tasks could be, simulating a live video event to test the capacity of the customers network and troubleshooting buffer issues. Integrations were with Microsoft Stream, SMB and Teams.
				</TextBlob>
				<SeperatorHorizontal />
				<PositionHeadingContainer>
                    <PositionHeading style={styles.underline}>
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
                <SeperatorLarge />
                <Heading style={styles.marginTopSpace}>
                    Work Experience
                </Heading>
                <ContinuedWrapper>(
                    <ContinuedText>Continued</ContinuedText>
                )
                </ContinuedWrapper>
                <Text style={styles.underline} />
				<PositionHeadingContainer>
                    <PositionHeading style={styles.underline}>
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
                    <PositionHeading style={styles.underline}>
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
                    <PositionHeading style={styles.underline}>
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
                <Heading style={styles.marginTopSpace}>
                    References
                </Heading>
                <Text style={styles.underlineLight} />
				<ReferencesBlob>
					<Reference>
						<ReferenceName>Emmanuel Gomez</ReferenceName>
						<ReferenceTitle>
							<ReferenceTitleText>
                                Developer Team Lead
                            </ReferenceTitleText>
                            <ReferenceCompanyText>
                                IStaff Systems AB
                            </ReferenceCompanyText>							
						</ReferenceTitle>
						<ReferenceContactInfo>Phone: +46(0)790772268</ReferenceContactInfo>
					</Reference>
					<SeperatorVertical />
					<Reference>
						<ReferenceName>Niklas Nilsson</ReferenceName>
						<ReferenceTitle>
                            <ReferenceTitleText>
                                Technical Product Specialist
                            </ReferenceTitleText>
                            <ReferenceCompanyText>
                                TV4
                            </ReferenceCompanyText>
						</ReferenceTitle>
						<ReferenceContactInfo>Phone: +46(0)736549255</ReferenceContactInfo>
					</Reference>
                </ReferencesBlob>
                <SeperatorSmall />
				<Heading>Interests</Heading>
                <Text style={styles.underlineLight} />
				<Interests>
					<InterestIcon>
						<StyledIconInterest src={codingIcon} />
						<InterestIconText>Coding</InterestIconText>
					</InterestIcon>
					<InterestIcon>
						<StyledIconInterest src={travellingIcon} />
						<InterestIconText>Travelling</InterestIconText>
					</InterestIcon>
					<InterestIcon>
						<StyledIconInterest src={runningIcon} />
						<InterestIconText>Running</InterestIconText>
					</InterestIcon>
					<InterestIcon>
						<StyledIconInterest src={composingIcon} />
                        <InterestIconText>Composing</InterestIconText>
					</InterestIcon>
					<InterestIcon>
						<StyledIconInterest src={webIcon} />
						<InterestIconText>WEB</InterestIconText>
					</InterestIcon>
				</Interests>
            </MainContent>
            <RightSide>
                <ProfilePicture
                    src={profilePic}
                />
                <RightHeading>Contacts</RightHeading>
                <SeperatorSmall />
                <ContactInfoRow>
                    <IconWrapper>
                        <StyledIcon src={phoneIcon} />
                    </IconWrapper>
                    <ContactInfoWrapper>
                        <ContactInfoHeading>Phone</ContactInfoHeading>
                        <ContactInfoBread>+46(0)739 85 91 90</ContactInfoBread>
                    </ContactInfoWrapper>
                </ContactInfoRow>
                <SeperatorSmall />
                <ContactInfoRow>
                    <IconWrapper>
                        <StyledIcon src={emailIcon} />
                    </IconWrapper>
                    <ContactInfoWrapper>
                        <ContactInfoHeading>Email</ContactInfoHeading>
                        <ContactInfoBread>alex@alexdev.se</ContactInfoBread>
                    </ContactInfoWrapper>
                </ContactInfoRow>
                <SeperatorSmall />
                <ContactInfoRow>
                    <IconWrapper>
                        <StyledIcon src={addressIcon} />
                    </IconWrapper>
                    <ContactInfoWrapper>
                        <ContactInfoHeading>Address</ContactInfoHeading>
                        <ContactInfoBread>
                            ESSINGERINGEN 9, 112 64
                        </ContactInfoBread>
                        <ContactInfoBread>
                            STOCKHOLM
                        </ContactInfoBread>
                    </ContactInfoWrapper>
                </ContactInfoRow>
                <SeperatorLarge />
                <RightHeading>Education</RightHeading>
                <SeperatorSmall />
				<EducationRow>
					<EducationLabel>Music Engineering</EducationLabel>
					<EducationSubLabel>KALMAR UNIVERSITY / TEKNIKUM - 2002 - 2004</EducationSubLabel>
					<EducationDescription>C++, VST plugins frameworks, algorithms, E-marketing and music application design</EducationDescription>
				</EducationRow>
                <SeperatorLarge />
				<EducationRow>
					<EducationLabel>NIKOLAI MUSIC PROGRAMME</EducationLabel>
					<EducationSubLabel>HIGH SCHOOL / HELSINGBORG – 1998 - 2001</EducationSubLabel>
					<EducationDescription>High school, Music aesthetical programme</EducationDescription>
				</EducationRow>
                <SeperatorSmall />
                <RightHeading>Skills</RightHeading>
				<SkillsWrapper>
					<SkillsLabel>Javascript</SkillsLabel>
					<Meter>
						<MeterValueJavascript/>
					</Meter>
					<SkillsLabel>NODE.JS</SkillsLabel>
					<Meter>
						<MeterValueNode/>
					</Meter>
					<SkillsLabel>React</SkillsLabel>
					<Meter>
						<MeterValueReact/>
					</Meter>
					<SkillsLabel>MOBX / REDUX</SkillsLabel>
					<Meter>
						<MeterValueMobxRedux/>
					</Meter>
					<SkillsLabel>Visual Studio Code</SkillsLabel>
					<Meter>
						<MeterValueVSCode/>
					</Meter>
				</SkillsWrapper>
                <SeperatorLarge/>
                <RightHeading>Expertise</RightHeading>
                <SeperatorLarge />
				<ExpertiseRow>
					<ExpertiseLabel>
					&bull;  Web developing
					</ExpertiseLabel>
				</ExpertiseRow>
                <SeperatorSmall />
				<ExpertiseRow>
					<ExpertiseLabel>
					&bull;  Web design
					</ExpertiseLabel>
				</ExpertiseRow>
                <SeperatorSmall />
				<ExpertiseRow>
					<ExpertiseLabel>
                    &bull;  E-Marketing
					</ExpertiseLabel>
				</ExpertiseRow>
                <SeperatorSmall />
				<ExpertiseRow>
					<ExpertiseLabel>
					&bull;  Troubleshooting
					</ExpertiseLabel>
				</ExpertiseRow>
                <SeperatorSmall />
				<ExpertiseRow>
					<ExpertiseLabel>
					&bull;  Ad-Tech / Video-Tech
					</ExpertiseLabel>
				</ExpertiseRow>
                <SeperatorSmall />
				<ExpertiseRow>
					<ExpertiseLabel>
					&bull;  Hosting
					</ExpertiseLabel>
				</ExpertiseRow>
                <SeperatorSmall />
				<ExpertiseRow>
					<ExpertiseLabel>
					&bull;  Social Media
					</ExpertiseLabel>
				</ExpertiseRow>
                <SeperatorSmall />
				<ExpertiseRow>
					<ExpertiseLabel>
					&bull;  Music Production
					</ExpertiseLabel>
				</ExpertiseRow>
				<RightHeading>Extra</RightHeading>
                <SeperatorLarge />
				<EducationRow>
					<EducationLabel>SCHOLARSHIP IN MOVING IMAGE</EducationLabel>
					<EducationSubLabel>NIKOLAI SCHOOL / HELSINGBORG 2001</EducationSubLabel>
					<EducationDescriptionExtra>Got a scholarship in Moving Image classes for hard and innovative work in digital video editing.</EducationDescriptionExtra>
				</EducationRow>
                <SeperatorLarge />
				<EducationRow>
					<EducationLabel>RESPONSIBLE FOR FESTIVAL STAGE</EducationLabel>
					<EducationSubLabel>ROOKIE FESTIVAL / HULTSFRED 2003</EducationSubLabel>
					<EducationDescriptionExtra>I got the chance to work at the Rookie Festival being responsible for the stage and security.
					</EducationDescriptionExtra>
				</EducationRow>
                <SeperatorLarge />
				<EducationRow>
					<EducationLabel>LIFE GUARD TRAINING</EducationLabel>
					<EducationSubLabel>MALMÖ - 2005</EducationSubLabel>
					<EducationDescriptionExtra>Working at the Moltzau shipping company as a Jungman for two summers gave me Life Guard training and training in BA/Pyrotechnics.
					</EducationDescriptionExtra>
				</EducationRow>
                <SeperatorLarge />
                <RightHeading>Follow Me</RightHeading>
                <SeperatorSmall />
				<FollowMeWrapper>
                    <FollowMeRow>
                        <LinkedInIcon src={inIcon} />
                        <FollowMeLink>linkedin.com/in/abulerforrest</FollowMeLink>
                    </FollowMeRow>
                    <FollowMeRow>
                        <FacebookIcon src={fbIcon} />
                        <FollowMeLink>facebook.com/abuler</FollowMeLink>
                    </FollowMeRow>
                    <FollowMeRow>
                        <GithubIcon src={ghIcon} />
                        <FollowMeLink>github.com/abulerforrest</FollowMeLink>
                    </FollowMeRow>
				</FollowMeWrapper>
            </RightSide>
        </ResumeContainer>
    </Document>
);

export default ResumePDF;