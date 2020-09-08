import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        number: state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);
 

/*
export default class extends Component {
      = {number :store.getState().number};
    constructor(props) {
      super(props);
      store.subscribe(function(){
        this.setState({number:store.getState().number});
      }.bind(this))
    }
    render() {
        return <DisplayNumber number = {this.state.number}></DisplayNumber>
    }
}
*/