import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, Icon, IconName} from 'components';

import BackgroundSvg from '../../../assets/homescreen-status-background.svg';

interface BaseHomeViewProps {
  children?: React.ReactNode;
  iconName?: IconName;
  testID?: string;
}
export const BaseHomeView = ({children, iconName, testID}: BaseHomeViewProps) => {
  return (
    <>
      <ScrollView
        alwaysBounceVertical={false}
        style={styles.scrollView}
        testID={testID}
        contentContainerStyle={styles.scrollContainer}
      >
        <SafeAreaView edges={['left', 'right']} style={{width: '100%'}}>
          <View style={styles.iconContainer}>
            <BackgroundSvg
              height="105%"
              width="105%"
              style={{
                position: 'absolute',
              }}
            />
            <View style={{marginTop: 23, marginBottom: 36}}>
              <Icon name={iconName} width={120} height={120} />
            </View>
          </View>
          <Box
            width="100%"
            flex={1}
            alignItems="flex-start"
            justifyContent="flex-start"
            paddingHorizontal="m"
            marginBottom="l"
            marginTop="l"
          >
            {children}
          </Box>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  primaryIcon: {alignSelf: 'center', marginHorizontal: 20, marginBottom: 30},
  scrollContainerWithAnimation: {
    marginTop: -100,
  },
  scrollView: {
    height: '100%',
  },
  scrollContainer: {
    maxWidth: 600,
    alignItems: 'flex-start',
  },
  iconContainer: {
    borderRadius: 13,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
