const theme = {
    colorWhiteDark: 'hsl(0, 0%, 96%)',
    colorWhite: 'hsl(0, 0%, 99%)',
    colorGreyLight: 'hsl(0, 0%, 35%)',
    colorGrey: 'hsl(0, 0%, 30%)',
    colorGreyDark: 'hsl(0, 0%, 20%)',
    colorGreyDarker: 'hsl(0, 0%, 15%)',
    colorBlack: 'hsl(0, 0%, 10%)',
    colorRed: 'hsl(0, 100%, 60%)',
}

export const lightTheme = {
    ...theme,
    colorBackground: theme.colorWhite,
    colorHeader: theme.colorGreyDark,
    colorFont: theme.colorGreyDarker,
    boxShadow: theme.colorGrey,
    colorReset: theme.colorGreyLight,
}

export const darkTheme = {
    ...theme,
    colorBackground: theme.colorGreyDark,
    colorHeader: theme.colorWhiteDark,
    colorFont: theme.colorWhite,
    boxShadow: theme.colorWhite,
    colorReset: theme.colorWhite,
}
