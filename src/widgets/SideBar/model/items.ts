import React from "react";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";

export interface SideItemType {
    path: (typeof RoutePath)[keyof typeof RoutePath];
    text: string;
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SideBarItemsList: SideItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: "widgets.side-bar.main-page",
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: "widgets.side-bar.about-page",
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: "widgets.side-bar.profile-page",
        authOnly: true,
    },
];
