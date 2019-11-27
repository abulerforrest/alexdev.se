interface IExternalFonts {
    family: string
    src: string
}

const externalFonts: IExternalFonts[] = [
    {
        family: "SourceCodeProLight",
        src: "http://www.alexdev.se/assets/fonts/SourceCodePro-ExtraLight.ttf"     
    },
    {
        family: "Montserrat",
        src: "http://www.alexdev.se/assets/fonts/Montserrat-Bold.ttf"     
    },
    {
        family: "ArialBold",
        src: "http://www.alexdev.se/assets/fonts/Arial-Bold.ttf"     
    },
    {
        family: "ArialItalic",
        src: "http://www.alexdev.se/assets/fonts/Arial-Italic.ttf"     
    },
    {
        family: "Arial",
        src: "http://www.alexdev.se/assets/fonts/Arial.ttf"     
    },
    {
        family: "Nunito",
        src: "http://www.alexdev.se/assets/fonts/NunitoSans-ExtraBold.ttf"     
    }
]

export default externalFonts;