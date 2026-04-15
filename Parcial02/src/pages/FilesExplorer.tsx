import { useState } from "react";
import { type NodeType, TreeNode } from "../models/TreeNode";

type Props = {
    addNode: (
        name: string,
        type: NodeType,
        parentId: string | null
    ) => Promise<void>;
    treeNodes: TreeNode[];
};

const FilesExplorer = ({ addNode, treeNodes }: Props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState<NodeType>("folder");
    const [parentId, setParentId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError("El nombre es obligatorio");
            return;
        }

        try {
            await addNode(name, type, parentId);
            setName("");
            setType("folder");
            setParentId(null);
            setError(null);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const validParents = treeNodes.filter(n => n.type === "folder");

    return (
        <form onSubmit={handleSubmit} className="node-form">
            <h3>Crear Nodo</h3>

            {error && <p className="error">{error}</p>}

            <div className="form-group">
                <label>Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Tipo:</label>
                    <select
                        value={type}
                        onChange={e => setType(e.target.value as NodeType)}
                    >
                        <option value="folder">Carpeta</option>
                        <option value="file">Archivo</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Padre:</label>
                    <select
                        value={parentId || ""}
                        onChange={e =>
                            setParentId(e.target.value || null)
                        }
                    >
                        <option value=""></option>
                        {validParents.map(node => (
                            <option key={node.id} value={node.id}>
                                {node.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="form-actions">
                <button type="submit">Crear</button>
            </div>
        </form>
    );
};

export default FilesExplorer;