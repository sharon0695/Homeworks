import { useState } from "react";
import { DoublyLinkedList } from "../utils/DoublyLinkedList";

const mockedPages = [
    "Home",
    "About",
    "Services",
    "Contact",
]

const history = new DoublyLinkedList();
mockedPages.forEach(page => history.append(page));

export default function DoublyLinkedBrowser() {
    const [ currentPage, setCurrentPage] = useState(history.getCurrent());

    const handleNext = () => setCurrentPage(history.next());
    const handlePrev = () => setCurrentPage(history.prev());
    const handleReset = () => {
        history.reset();
        setCurrentPage(history.getCurrent());
    }

    return (
        <div>
            <h2> Current Page: {currentPage} </h2>
            <button onClick={handlePrev}> Previous Page </button>
            <button onClick={handleNext}> Next Page </button>
            <button onClick={handleReset}> Reset History </button>
        </div>
    )
}