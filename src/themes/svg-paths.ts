interface svgIconsProps {
    d: string
    viewBox: string
}

interface svgObjectProps {
    download: svgIconsProps
    print: svgIconsProps
}

export const svgIcons: svgObjectProps = {
    download: {
        d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z",
        viewBox: "0 0 24 24"
    },
    print: {
        d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z",
        viewBox: "0 0 24 24"
    }
}