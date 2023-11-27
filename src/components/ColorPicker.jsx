import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import RNColorPicker from 'react-native-wheel-color-picker';

const {height, width} = Dimensions.get('window');

class ColorPicker extends Component {
  state = {
    currentColor: '#00FF00',
    swatchesOnly: false,
    swatchesLast: false,
    swatchesEnabled: true,
    disc: false,
  };

  onColorChange = color => {
    this.setState({currentColor: color});
  };

  onColorChangeComplete = color => {
    console.log('Color Change Complete:', color);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Color Picker</Text>
        <View style={styles.pickerContainer}>
          <RNColorPicker
            ref={r => {
              this.picker = r;
            }}
            color={this.state.currentColor}
            swatchesOnly={this.state.swatchesOnly}
            onColorChange={this.onColorChange}
            onColorChangeComplete={this.onColorChangeComplete}
            thumbSize={40}
            sliderSize={40}
            noSnap={true}
            row={false}
            swatchesLast={this.state.swatchesLast}
            swatches={this.state.swatchesEnabled}
            discrete={this.state.disc}
          />
        </View>
        <Text style={styles.text}>
          Color Code: {this.state.currentColor.toUpperCase()}
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: height,
  },
  text: {color: '#000', fontSize: 18, padding: 10},
  pickerContainer: {
    width: '90%',
    height: height * 0.75,
  },
};

export default ColorPicker;
