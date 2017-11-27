import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-native-maps';
import { Image } from 'react-native';

import styles from '../styles';

const Avatar = ({ data: { title, description, image, coordinates } }) => (
  <Marker
    coordinate={coordinates}
    title={title}
    description={description}
  >
    <Image
      style={styles.avatar}
      source={{ uri: image }}
    />
  </Marker>
);

Avatar.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    coordinates: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default Avatar;
