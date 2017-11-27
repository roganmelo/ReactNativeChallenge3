import { StyleSheet } from 'react-native';
import { colors, fonts } from 'assets/styles';

export default StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: colors.white
  },
  modal: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  },
  modalContent: {
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 5
  },
  modalTitle: {
    marginBottom: 20,
    fontSize: fonts.large,
    fontWeight: 'bold',
    color: colors.text.dark
  },
  modalInputContatiner: {
    flexDirection: 'row'
  },
  modalInput: {
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 5
  },
  buttons: {
    flexDirection: 'row'
  },
  cancelButton: {
    flex: 1,
    marginRight: 15
  },
  saveButton: {
    flex: 1
  }
});
