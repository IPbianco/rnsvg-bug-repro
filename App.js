/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Svg, Text as SvgText} from 'react-native-svg';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View style={styles.normalTextSection}>
        <Text style={styles.title}>******** React Native Text ********</Text>
        <Text style={[styles.text, {fontFamily: 'RyoGothicPlusN-EL'}]}>
          RyoGothicPlusN-EL
        </Text>
        <Text style={[styles.text, {fontFamily: 'RyoGothicPlusN-Light'}]}>
          RyoGothicPlusN-Light
        </Text>
        <Text style={[styles.text, {fontFamily: 'RyoGothicPlusN-Regular'}]}>
          RyoGothicPlusN-Regular
        </Text>
        <Text style={[styles.text, {fontFamily: 'RyoGothicPlusN-Heavy'}]}>
          RyoGothicPlusN-Heavy
        </Text>
        <Text style={[styles.text, {fontFamily: 'RyoGothicPlusN-Regular'}]}>
          November
        </Text>
      </View>
      <View style={styles.svgTextSection}>
        <Text style={styles.title}>******** SVG Text ********</Text>
        <Svg height="60" width="400">
          <SvgText
            fill="black"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="RyoGothicPlusN-EL">
            RyoGothicPlusN-EL
          </SvgText>
        </Svg>
        <Svg height="60" width="400">
          <SvgText
            fill="black"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="RyoGothicPlusN-Light">
            RyoGothicPlusN-Light
          </SvgText>
        </Svg>
        <Svg height="60" width="400">
          <SvgText
            fill="black"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="RyoGothicPlusN-Regular">
            RyoGothicPlusN-Regular
          </SvgText>
        </Svg>
        <Svg height="60" width="400">
          <SvgText
            fill="black"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="RyoGothicPlusN-Heavy">
            RyoGothicPlusN-Heavy
          </SvgText>
        </Svg>
        <Svg height="60" width="400">
          <SvgText
            fill="black"
            x="20"
            y="50"
            fontSize={20}
            fontFamily="RyoGothicPlusN-Regular">
            November
          </SvgText>
        </Svg>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'green',
    paddingLeft: 20,
    fontSize: 20,
  },
  normalTextSection: {
    marginTop: 40,
    alignItems: 'flex-start',
  },
  svgTextSection: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  text: {
    padding: 20,
    fontSize: 20,
  },
});

export default App;
