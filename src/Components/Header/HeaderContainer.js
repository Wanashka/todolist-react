import { Header } from './Header';
import { connect } from 'react-redux';
import { openModalCreateTask } from '../Redux/modalWindowReducer';

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { openModalCreateTask })(Header);
