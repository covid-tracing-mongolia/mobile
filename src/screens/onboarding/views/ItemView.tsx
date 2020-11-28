import React, {ReactNode} from 'react';
import {StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {Box, Text} from 'components';
import {useI18n} from 'locale';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';

import {onboardingData, OnboardingKey} from '../OnboardingContent';

export interface ItemViewProps {
  item: OnboardingKey;
  image?: ImageSourcePropType;
  altText?: string;
  header: string;
  isActive: boolean;
  children?: ReactNode;
}

export const ItemView = ({item, image, isActive, altText, header, children}: ItemViewProps) => {
  const i18n = useI18n();
  const autoFocusRef = useAccessibilityAutoFocus(isActive);

  return (
    <>
      <Text focusRef={autoFocusRef} marginBottom="s" marginTop="s" color="darkText">
        <Text fontSize={24} fontWeight="bold" color="infoBlockNeutralText">
          {[i18n.translate('Onboarding.Step'), onboardingData.indexOf(item) + 1].join(' ')}
        </Text>
        {[i18n.translate('Onboarding.Of'), onboardingData.length].join('')}
      </Text>
      {image ? (
        <Box marginTop="xxxs" marginBottom="l">
          <Image accessible style={styles.image} source={image} accessibilityLabel={altText} />
        </Box>
      ) : null}

      <Text variant="bodyTitle" color="headerText" marginBottom="l" accessibilityRole="header">
        {header}
      </Text>
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
