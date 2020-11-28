import React from 'react';
import {useTheme} from '@shopify/restyle';
import {
  Platform,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
  AccessibilityRole,
} from 'react-native';
import {Theme} from 'shared/theme';
import {useI18n} from 'locale';

import {Box} from './Box';
import {Ripple} from './Ripple';
import {Icon} from './Icon';
import {Text} from './Text';

export interface InfoButtonProps {
  title?: string;
  text?: string;
  onPress: () => void;
  variant: keyof Theme['buttonVariants'];
  color?: keyof Theme['colors'];
  disabled?: boolean;
  loading?: boolean;
  externalLink?: boolean;
  internalLink?: boolean;
}

export const InfoButton = ({
  title,
  text,
  onPress,
  variant,
  color: buttonColorName,
  disabled,
  loading,
  externalLink,
  internalLink,
}: InfoButtonProps) => {
  const i18n = useI18n();
  const theme = useTheme<Theme>();
  const variantProps = theme.buttonVariants[variant];
  const disabledProps = disabled ? variantProps.disabled || {} : {};
  const themedStyles = {...variantProps, ...disabledProps};
  const {borderWidth, height} = (themedStyles as unknown) as TextStyle & ViewStyle;
  const textColor = themedStyles.textColor;
  const buttonColor = buttonColorName && theme.colors[buttonColorName];

  const onPressHandler = loading ? () => {} : onPress;
  const externalLinkProps = externalLink
    ? {
        accessibilityLabel: text,
        accessibilityHint: i18n.translate('Home.ExternalLinkHint'),
        accessibilityRole: 'link' as AccessibilityRole,
      }
    : {};
  const borderRadius = 13;

  const boxStyle = {
    shadowColor: buttonColor,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 3,

    padding: 14,
  };

  const content = (
    <Box
      borderRadius={borderRadius}
      style={{
        minHeight: height,
        borderWidth,
        borderColor: buttonColor,
        backgroundColor: Platform.OS === 'ios' ? buttonColor : undefined,

        ...boxStyle,
      }}
      flexDirection="row"
    >
      {loading ? (
        <ActivityIndicator color={textColor} size="large" />
      ) : (
        <>
          <Box>
            <Text variant="menuItemTitle" fontWeight="bold" color="bodyTitleWhite" marginBottom="s">
              {title}
            </Text>
            <Text variant="menuItemTitle" color="bodyTextWhite">
              {text}
            </Text>
          </Box>
          <Box style={{...styles.chevronOffset}}>
            {externalLink && <Icon name="icon-external-arrow-light" />}
            {internalLink && <Icon size={25} name="icon-chevron-white" />}
          </Box>
        </>
      )}
    </Box>
  );

  const accessibilityProps = {
    accessibilityRole: 'button' as 'button',
    accessibilityState: {disabled},
    ...externalLinkProps,
  };

  if (Platform.OS === 'android') {
    return (
      <Ripple
        disabled={disabled}
        onPress={onPressHandler}
        backgroundColor={buttonColor}
        borderRadius={borderRadius}
        {...accessibilityProps}
      >
        {content}
      </Ripple>
    );
  }
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPressHandler} disabled={disabled} {...accessibilityProps}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  stretch: {
    alignSelf: 'stretch',
  },
  chevronOffset: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});
