import {addMessageActionCreator, updateMessageActionCreator} from "../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../hoc/withAuthNavigate";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateMessage: (text) => {
            dispatch(updateMessageActionCreator(text))
        }
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthNavigate
)(Dialogs)