import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal as RNModal, TouchableWithoutFeedback, TextInput } from 'react-native';

import { t } from 'services';
import { Text, Button } from 'components';

import styles from '../styles';

export default class Modal extends Component {
  static propTypes = {
    opened: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  state = { name: '' };

  add = () => {
    this.props.add(this.state.name);
    this.setState({ name: '' });
    this.props.toggle();
  }

  render = () => {
    const { opened, toggle } = this.props;

    return (
      <RNModal
        animationType='fade'
        transparent
        visible={opened}
      >
        <TouchableWithoutFeedback onPress={toggle}>
          <View style={styles.modal}>
            <TouchableWithoutFeedback onPress={e => e.preventDefault()}>
              <View style={styles.modalContent}>
                <Text phrase='ADD_NEW' style={styles.modalTitle} />
                <View style={styles.modalInputContatiner}>
                  <TextInput
                    underlineColorAndroid='transparent'
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder={t('GITHUB_USER')}
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                    style={styles.modalInput}
                  />
                </View>
                <View style={styles.buttons}>
                  <Button
                    phrase='CANCEL'
                    onPress={toggle}
                    style={styles.cancelButton}
                  />
                  <Button
                    success
                    phrase='SAVE'
                    onPress={this.add}
                    style={styles.saveButton}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </RNModal>
    );
  }
}
