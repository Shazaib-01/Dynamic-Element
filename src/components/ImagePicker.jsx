import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, Dimensions} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const { width, height } = Dimensions.get('window')

const PickImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.error('User cancelled camera');
      } else if (response.error) {
        console.error('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Image and Camera component</Text>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{width, height: height / 3}}
          resizeMode="contain"
        />
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonStyle} onPress={openImagePicker}>
          <Text style={styles.textStyle}>Choose from device</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={handleCameraLaunch}>
          <Text style={styles.textStyle}>Open Camera</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#0496C7',
    borderRadius: 6,
    paddingVertical: 12,
    marginVertical: 34,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10
  },
  line: {
    height: 1,
    width,
    backgroundColor: '#747474',
  },
};

export default PickImage;
