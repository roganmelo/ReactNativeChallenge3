import { connect } from 'react-redux';
import { Modal, User } from './ducks';

const mapStateToProps = ({ home }) => ({
  modalOpened: home.get('modalOpened'),
  users: home.get('users')
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(Modal.toggle()),
  setCoordinates: coordinates => dispatch(User.setCoordinates(coordinates)),
  addUser: name => dispatch(User.search(name))
});

export default connect(mapStateToProps, mapDispatchToProps);
