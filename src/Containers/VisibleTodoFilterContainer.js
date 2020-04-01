import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Actions/actions';
import VisibleTodoFilter from '../Components/VisibleTodoFilter';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoFilter)