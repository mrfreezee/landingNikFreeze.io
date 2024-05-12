import { ThemeAction } from "./types";

export const setLightTheme = (): ThemeAction =>({
    type: 'light'
})

export const setDarkTheme = (): ThemeAction =>({
    type: 'dark'
})