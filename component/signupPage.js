import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import Background from '../Background';
import backgroundImage from '../assets/back.jpg';

const GetSignupPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onTextChanged = (text, type) => {
    if (type === 'username') {
      setUsername(text);
    } else if (type === 'password') {
      setPassword(text);
    } else if (type === 'confirmPassword') {
      setConfirmPassword(text);
    }
  };

  const handleSignupPress = () => {
    if (confirmPassword === password) {
      console.log('Signup Completed:', { username, password });
      navigation.navigate('Login');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <Background source={backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Signup Page</Text>
        <View style={styles.outerInputBox}>
          <TextInput
            placeholder="Enter your Username"
            value={username}
            onChangeText={(text) => onTextChanged(text, 'username')}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter your Password"
            value={password}
            onChangeText={(text) => onTextChanged(text, 'password')}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChangeText={(text) => onTextChanged(text, 'confirmPassword')}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity
            onPress={handleSignupPress}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default GetSignupPage;
