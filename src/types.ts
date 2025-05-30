import { JSX } from "react";

export interface IWork {
    title: string;
    description: string;
    imageSrc: string;
    bullets: IWorkBullet[]
}

export interface IWorkBullet {
    title: string;
    description: string;
    icon: JSX.Element;
}