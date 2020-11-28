import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, Header, Icon, IconName } from 'components';

interface BaseHomeViewProps {
  children?: React.ReactNode;
  iconName?: IconName;
  testID?: string;
}
const { width } = Dimensions.get("screen")
export const BaseHomeView = ({ children, iconName, testID }: BaseHomeViewProps) => {
  return (
    <>
      <SafeAreaView edges={['top']}>
        <Header />
      </SafeAreaView>
      <ScrollView
        alwaysBounceVertical={false}
        style={styles.scrollView}
        testID={testID}
        contentContainerStyle={styles.scrollContainer}
      >
        <SafeAreaView edges={['left', 'right']}>
          <Box width="100%" justifyContent="flex-start" marginBottom="-l">
            <Box style={{ ...styles.primaryIcon }}>
              <Icon name={iconName}
                height={165} width={width - 40} />
            </Box>
          </Box>
          <Box
            width="100%"
            flex={1}
            alignItems="flex-start"
            justifyContent="flex-start"
            paddingHorizontal="m"
            marginBottom="l"
          >
            {children}
          </Box>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  primaryIcon: { alignSelf: "center", marginHorizontal: 20, marginBottom: 30 },
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
});
