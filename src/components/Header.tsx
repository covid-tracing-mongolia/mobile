import React, { useCallback } from 'react';
import { TouchableWithoutFeedback, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useI18n } from 'locale';
import { TEST_MODE } from 'env';

import { Box } from './Box';
import { Icon } from './Icon';

export interface HeaderProps {
  isOverlay?: boolean;
}

const BasicHeader = () => {
  const i18n = useI18n();
  return (
    <Box maxHeight={30} flexDirection="row" alignItems="center" justifyContent="center">
      {i18n.locale === 'mn' ? <Icon size={200} name="home-header" /> : <Icon size={129} name="covid-alert-en" />}
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
