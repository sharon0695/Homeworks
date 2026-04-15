import { createContext, useState, type ReactNode } from "react";
import {NaryTree} from "../models/NaryTree";  

interface TreeContextType {
    tree: NaryTree<string> | null
    addNode: (parent: string, value: string) => void
}

const TreeContext = createContext<TreeContextType | null>(null);

const TreeProvider = ({ children }: { children: ReactNode }) => {
    const [tree, setTree] = useState(new NaryTree<string>());
    const addNode = (parent: string, value: string) => {       
        tree.insert(parent, value);
        setTree(Object.create(Object.getPrototypeOf(tree), Object.getOwnPropertyDescriptors(tree))); 
    };

    return (
        <TreeContext.Provider value={{ tree, addNode }}>
            {children}
        </TreeContext.Provider>
    )
}

export {TreeContext, TreeProvider};