import { createRoot } from "react-dom/client";
import ContactBook from "./ContactBook";
import { Provider } from "react-redux";
import store from './store/store';  


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
<Provider store={store}>
<ContactBook/>
</Provider>

);
