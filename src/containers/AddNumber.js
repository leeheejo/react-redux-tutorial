import AddNumber from "../components/AddNumber"
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return{
        onClick: 
            function(size){
                dispatch({type : 'INCREMENT', size : size});
            }.bind(this)
        
    }
}
export default connect(null, mapDispatchToProps)(AddNumber);
// https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e
/*
export default class extends Component{
    render() {
        return<AddNumber onClick= {
            function(size){
                store.dispatch({type : 'INCREMENT', size : size});
            }.bind(this)
        }></AddNumber>
    }
}
*/
