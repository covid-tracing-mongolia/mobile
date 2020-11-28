import {useI18n} from 'locale';
import {Box, ButtonSingleLine, Text} from 'components';
import React, {useCallback} from 'react';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';
import {captureException} from 'shared/log';
import {Linking} from 'react-native';

import {BaseHomeView} from '../components/BaseHomeView';

export const UnknownProblemView = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  const i18n = useI18n();

  const onHelp = useCallback(() => {
    Linking.openURL(i18n.translate('Info.HelpUrl')).catch(error => captureException('An error occurred', error));
  }, [i18n]);

  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);
  return (
    <BaseHomeView iconName="error-icon" testID="unknownProblem">
      <Text focusRef={autoFocusRef} variant="bodyTitle" color="darkText" marginBottom="m" accessibilityRole="header">
        {i18n.translate('Home.UnknownProblem.Title')}
      </Text>
      <Text marginBottom="m" variant="bodyDescription" color="lightText">
        {i18n.translate('Home.UnknownProblem.Body')}
      </Text>
      <Box alignSelf="stretch" marginBottom="m" marginTop="l">
        <ButtonSingleLine
          text={i18n.translate('Home.UnknownProblem.CTA')}
          variant="danger50Flat"
          externalLink
          onPress={onHelp}
        />
      </Box>
    </BaseHomeView>
  );
};
