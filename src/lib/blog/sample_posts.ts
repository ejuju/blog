import type { Post } from "./post";

export const samplePosts: Post[] = [
    {
        title: "I'm a test post",
        shortDescription: "Hey, I am just a test post. Do not learn anything from me.",
        tags: ["test", "users-should-not-be-seeing-this"],
        date: new Date(),
    },
    {
        title: "You are a test post",
        shortDescription: "Bla bla bla",
        tags: ["test", "software engineering", "sample", "programming"],
        date: new Date(),
    },
    {
        title: "Oui oui le cwoissant",
        shortDescription: "Oh la la bonjour, omelette du fromage",
        tags: ["test", "software engineering", "sample", "programming"],
        date: new Date(),
    },
];