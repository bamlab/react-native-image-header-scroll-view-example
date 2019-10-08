import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Animated from 'react-native-reanimated';

import {
  AnimatedScrollView,
  fixedContent,
  ScalingImageComponent,
} from 'react-native-scrollview-animation/src/index';

interface Props {}

class Twitter extends React.Component<Props> {
  renderHeader() {
    return <View style={{ flex: 1, alignSelf: 'stretch', backgroundColor: 'red' }} />;
  }
  render() {
    return (
      <AnimatedScrollView
        backgroundComponents={[
          fixedContent({
            render: this.renderHeader,
            minHeight: 200,
            maxHeight: 200,
          }),
        ]}
        foregroundComponents={[]}
        childrenComponents={[]}
        minHeight={0}
        maxHeight={0}
        bounces={false}
      >
        <View>
          <Image
            source={require('../assets/NZ.jpg')}
            style={{ height: 100, alignSelf: 'stretch' }}
          />
          <ScalingImageComponent
            image={require('../assets/cutecat.jpg')}
            minHeight={50}
            maxHeight={100}
            style={styles.containerStyle}
            imageStyle={styles.image}
          />
          <Text style={{ height: 20000 }}>Content</Text>
        </View>
      </AnimatedScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginLeft: 20,
  },
  image: {
    borderWidth: 2,
    borderColor: 'white',
  },
});
export default Twitter;
