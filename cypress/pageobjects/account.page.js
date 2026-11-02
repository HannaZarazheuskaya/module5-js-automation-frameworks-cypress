import Page from './page.js';
import { Header } from "./components/index.js";

class AccountPage extends Page {
    constructor() {
        super('/account');
    }

    get header() {
        return Header;
    }
}

export default new AccountPage();