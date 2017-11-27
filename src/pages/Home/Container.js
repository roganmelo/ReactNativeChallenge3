import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import MapView from 'react-native-maps';

import Avatar from './components/Avatar';
import Modal from './components/Modal';

import styles from './styles';

export default class Home extends Component {
  static propTypes = {
    modalOpened: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(Avatar.propTypes.data).isRequired,
    setCoordinates: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired
  };

  onMapPress = ({ nativeEvent }) => {
    this.props.setCoordinates(nativeEvent.coordinate);
    this.props.toggleModal();
  }

  render = () => {
    const { modalOpened, users, toggleModal, addUser } = this.props;

    return (
      <View style={styles.map}>
        <MapView
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031
          }}
          onLongPress={this.onMapPress}
          style={styles.map}
        >
          <For each='user' of={users}>
            <Avatar key={user.id} data={user} />
          </For>
        </MapView>

        <Modal
          opened={modalOpened}
          toggle={toggleModal}
          add={addUser}
        />
      </View>
    );
  }
}
