import {Link} from "react-router-dom"

const Header = (props) => {
    return (<header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <span class="mdc-top-app-bar__title"><Link to="/">Bookmarkd</Link></span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        </section>
        </div>
    </header>
    )
}

export default Header;