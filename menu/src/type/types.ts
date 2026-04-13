import type { ComponentType } from "react";

export interface MenuItemType {
    titulo: string
    link: string
    component: ComponentType
    children: MenuItemType[]
}

