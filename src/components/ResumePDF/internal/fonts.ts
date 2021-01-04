interface IExternalFonts {
    family: string
    src: string
}

const externalFonts: IExternalFonts[] = [
    {
        family: "SourceCodeProLight",
        src: "assets/fonts/SourceCodePro-ExtraLight.ttf"
    },
    {
        family: "Montserrat",
        src: "assets/fonts/Montserrat-Bold.ttf"
    },
    {
        family: "ArialBold",
        src: "assets/fonts/Arial-Bold.ttf"
    },
    {
        family: "ArialItalic",
        src: "assets/fonts/Arial-Italic.ttf"
    },
    {
        family: "Arial",
        src: "assets/fonts/Arial.ttf"
    },
    {
        family: "Nunito",
        src: "assets/fonts/NunitoSans-ExtraBold.ttf"
    }
]

export default externalFonts;