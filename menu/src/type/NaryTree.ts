import type { ComponentType } from "react";

export class TreeNode {
  titulo: string;
  link: string;
  component: ComponentType;
  children: TreeNode[];

  constructor(
    titulo: string,
    link: string,
    component: ComponentType,
    children: TreeNode[] = []
  ) {
    this.titulo = titulo;
    this.link = link;
    this.component = component;
    this.children = children;
  }

  addChild(child: TreeNode) {
    this.children.push(child);
  }
}