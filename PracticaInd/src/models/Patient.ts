import Stack from "./Stack";

export interface Patient {
    id: string
    name: string
    history: Stack<string>
}