import {ReactNode} from "react";

export interface NavigationItem {
    href: string;
    label: string;
}

export interface VideoItem {
    item: {
        title: string;
        description: string;
        videoURL: string;
    }
}

export interface FaqProps {
    children: ReactNode;
}
