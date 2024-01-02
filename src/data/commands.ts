import { JSXElement } from "solid-js";
import { Help } from "../components/Help";
import { DateComponent } from "../components/Date";
import { Contact } from "../components/Contact";
import { WhoAmI } from "../components/WhoAmI";

export type Command = {
    name: string;
    aliases?: string[];
    component: () => JSXElement;
}

export const commands: Command[] = [
    {
        name: 'help',
        component: Help
    },
    {
        name: 'whoami',
        component: WhoAmI,
    },
    {
        name: 'contact',
        component: Contact
    },
    {
        name: 'touch',
        component: Help
    },
    {
        name: 'date',
        component: DateComponent
    }
]