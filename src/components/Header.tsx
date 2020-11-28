import React, {useCallback} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TEST_MODE} from 'env';

import {Box} from './Box';
import {Icon} from './Icon';
import {Text} from './Text';

export interface HeaderProps {
  isOverlay?: boolean;
}

const BasicHeader = () => {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="center">
      <Icon width={21} height={24} name="header-logo" />
      <Text color="headerText" style={{marginLeft: 10}} variant="header">
        COVID Tracing Mongolia
      </Text>
    </Box>
  );
};

export const Header = () => {
  const navigation = useNavigation();
  const onLogoPress = useCallback(() => {
    navigation.navigate('TestScreen');
  }, [navigation]);

  if (TEST_MODE) {
    return (
      <TouchableWithoutFeedback onPress={onLogoPress} testID="headerButton">
        {BasicHeader()}
      </TouchableWithoutFeedback>
    );
  }
  return <BasicHeader />;
};
