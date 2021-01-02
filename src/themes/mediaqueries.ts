const size = {
    mobileS2: { minWidth: '320px', maxWidth: '568px' },
    mobileS: { minWidth: '320px', maxWidth: '480px' },
    mobileL: { minWidth: '481px', maxWidth: '767px' },
    tabletL: { minWidth: '768px', maxWidth: '1024px' },
    tabletP: { minWidth: '768px', maxWidth: '1024px' },
    laptop: { minWidth: '1025px', maxWidth: '1280px' },
    desktop: '1281px',
    desktopXS: { minWidth: '204px', maxWidth: '550px' },
    desktopS: { minWidth: '204px', maxWidth: '650px' }, 
    desktopL: { minWidth: '204px', maxWidth: '760px' },
}

export const device = {
    mobileS3: `only screen and (min-device-width: ${size.mobileS2.minWidth}) and (max-device-height: ${size.mobileS2.maxWidth}) and (orientation : landscape)`,
    mobileS2: `only screen and (min-device-width: ${size.mobileS2.minWidth}) and (max-device-height: ${size.mobileS2.maxWidth}) and (orientation : portrait)`,
    mobileS: `(min-width: ${size.mobileS.minWidth}) and (max-width: ${size.mobileS.maxWidth})`,
    mobileL: `(min-width: ${size.mobileL.minWidth}) and (max-width: ${size.mobileL.maxWidth})`,
    tabletL: `(min-width: ${size.tabletL.minWidth}) and (max-width: ${size.tabletL.maxWidth}) and (orientation: landscape)`,
    tabletP: `(min-width: ${size.tabletP.minWidth}) and (max-width: ${size.tabletP.maxWidth})`,
    laptop: `(min-width: ${size.laptop.minWidth}) and (max-width: ${size.laptop.maxWidth})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopXS: `(min-width: ${size.desktopXS.minWidth}) and (max-width: ${size.desktopXS.maxWidth})`,
    desktopS: `(min-width: ${size.desktopS.minWidth}) and (max-width: ${size.desktopS.maxWidth})`,
    desktopL: `(min-width: ${size.desktopL.minWidth}) and (max-width: ${size.desktopL.maxWidth})`
};