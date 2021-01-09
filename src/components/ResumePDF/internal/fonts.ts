import SourceCodeProExtraLight from "../../../assets/fonts/SourceCodePro-ExtraLight.ttf"
import MontserratBold from "../../../assets/fonts/Montserrat-Bold.ttf"
import RobotoRegular from "../../../assets/fonts/Roboto-Regular.ttf"
import RobotoItalic from "../../../assets/fonts/Roboto-Italic.ttf"
import RobotoBold from "../../../assets/fonts/Roboto-Bold.ttf"
import NunitoExtraBold from "../../../assets/fonts/NunitoSans-ExtraBold.ttf"

interface IFonts {
    family: string
    src: string
}

const externalFonts: IFonts[] = [
    {
        family: "SourceCodeProLight",
        src: SourceCodeProExtraLight
    },
    {
        family: "Montserrat",
        src: MontserratBold
    },
    {
        family: "Roboto",
        src: RobotoRegular
    },
    {
        family: "RobotoItalic",
        src: RobotoItalic
    },
    {
        family: "RobotoBold",
        src: RobotoBold
    },
    {
        family: "Nunito",
        src: NunitoExtraBold
    }
]

export default externalFonts;