import {Box, Header} from 'components';
import React from 'react';
import {StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';

import {ApiNotConnectedView} from './views/ApiNotConnectedView';

const Content = () => {
  return <ApiNotConnectedView />;
};

export const ErrorScreen = () => {
  return (
    <Box flex={1} alignItems="center" backgroundColor="mainBackground">
      <Box
        flex={1}
        paddingTop="m"
        paddingBottom="m"
        alignSelf="stretch"
        accessibilityElementsHidden={false}
        importantForAccessibility="no-hide-descendants"
      >
        <SafeAreaView>
          <Header />
          <Animated.View style={[styles.card]}>
            <Content />
          </Animated.View>
        </SafeAreaView>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 12,
  },
});
