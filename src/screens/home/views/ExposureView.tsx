import React from 'react';
import {useI18n} from 'locale';
import {Text} from 'components';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';
import {ExposedHelpButton} from 'components/ExposedHelpButton';

import {BaseHomeView} from '../components/BaseHomeView';

// import {ExposureDateView} from './ExposureDateView';
// import {ClearExposureView} from './ClearExposureView';

const ExposureText = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  const i18n = useI18n();
  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);

  return (
    <>
      <Text focusRef={autoFocusRef} variant="bodyTitle2" color="darkText" marginBottom="m" accessibilityRole="header">
        {i18n.translate('Home.ExposureDetected.Title')}
      </Text>
      <Text marginBottom="m" variant="smallText" color="lightText">
        {i18n.translate('Home.ExposureDetected.Body1')}
      </Text>
      {/* <ExposureDateView /> */}

      <Text variant="bodyTitle2" marginBottom="m" color="darkText" accessibilityRole="header">
        {i18n.translate('Home.ExposureDetected.Title2')}
      </Text>

      <Text marginBottom="m" variant="bodyDescription" color="lightText">
        {i18n.translate('Home.ExposureDetected.Body2')}
      </Text>
    </>
  );
};

export const ExposureView = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  return (
    <BaseHomeView iconName="contact-image" testID="exposure">
      <ExposureText isBottomSheetExpanded={isBottomSheetExpanded} />
      <ExposedHelpButton />
      {/* <ClearExposureView /> */}
    </BaseHomeView>
  );
};
