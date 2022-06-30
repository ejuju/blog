import { browser } from '$app/env';
import { writable, type Writable } from 'svelte/store';

export interface Theme {
    bodyCssClass: string;
    name: string;
}


// Available themes
export const darkTheme: Theme = { bodyCssClass: "dark", name: "dark" }
export const lightTheme: Theme = { bodyCssClass: "light", name: "light" }

// All available themes
export const availableThemes: Theme[] = [
    darkTheme,
    lightTheme,
]

function getInitialTheme(): Theme {
    if (!browser) return darkTheme

    // check local storage
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme !== null) {
        return JSON.parse(storedTheme)
    }

    // return light theme if current time is day time
    const currHourOfTheDay = new Date().getHours()
    return (currHourOfTheDay > 7 && currHourOfTheDay < 19) ? lightTheme : darkTheme
}

// globally accessible state
export const theme: Writable<Theme> = writable(getInitialTheme());

// update body class name when theme is updated
theme.subscribe((curr) => {
    if (!browser) return

    document.body.className = curr?.bodyCssClass
})
