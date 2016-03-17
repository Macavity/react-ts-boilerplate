///<reference path="../typings/browser.d.ts"/>

/*
 * ===================================
 * Import Modules
 * ===================================
 */
import BoilerplateComponent from "./BoilerplateComponent";

class App extends React.Component<any, any> {
    render() {

        let prop1 = "Text";

        return (
            <section>
                <BoilerplateComponent
                    prop1={prop1}
                />
            </section>
        );
    }
}

/*
 * Initialization Scripts
 */
document.addEventListener("DOMContentLoaded", function(event) {

    ReactDOM.render(
        <App/>,
        document.getElementById("app")
    );

});