
interface IProps {
    prop1:string;
}

interface IState {
    visible?:boolean;
}

export default class BoilerplateComponent extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);

        this.state = {
            visible: true
        }
    }

    render() {

        return (
            <div>
                Component Content
            </div>
        );
    }
}
