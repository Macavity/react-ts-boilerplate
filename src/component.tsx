
import React from "react";

interface IProps {

}

interface IState {

}

export default class BoilerplateComponent extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
    }

    render() {

        return (
            <div>
                Component Content
            </div>);
    }
}
