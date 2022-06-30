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

// globally accessible state
export const theme: Writable<Theme> = writable(darkTheme);

// update body class name when theme is updated
theme.subscribe((curr) => {
    if (browser) document.body.className = curr?.bodyCssClass
})
