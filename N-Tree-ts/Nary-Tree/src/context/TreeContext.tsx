import { createContext, useState, type ReactNode } from "react";
import {NaryTree} from "../models/NaryTree";  

interface TreeContextType {
    tree: NaryTree<string> | null
    addNode: (parent: string | null, value: string) => void
}

const TreeContext = createContext<TreeContextType | null>(null);

const TreeProvider = ({ children }: { children: ReactNode }) => {
    const [tree, setTree] = useState(new NaryTree<string>());
    const addNode = (parent: string | null, value: string) => {       
        const newTree = tree.clone()
        newTree.insert(parent, value)
        setTree(newTree)
    };

    return (
        <TreeContext.Provider value={{ tree, addNode }}>
            {children}
        </TreeContext.Provider>
    )
}

export {TreeContext, TreeProvider};