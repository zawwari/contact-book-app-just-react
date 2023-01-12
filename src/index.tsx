import { createRoot } from "react-dom/client";
import ContactBook from "./contact-book";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<ContactBook />);
