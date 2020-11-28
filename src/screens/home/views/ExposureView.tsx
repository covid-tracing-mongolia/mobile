import React from 'react';
import { useI18n } from 'locale';
import { Text } from 'components';
import { useAccessibilityAutoFocus } from 'shared/useAccessibilityAutoFocus';
import { ExposedHelpButton } from 'components/ExposedHelpButton';

import { BaseHomeView } from '../components/BaseHomeView';

// import {ExposureDateView} from './ExposureDateView';
// import {ClearExposureView} from './ClearExposureView';

const ExposureText = ({ isBottomSheetExpanded }: { isBottomSheetExpanded: boolean }) => {
  const i18n = useI18n();
  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);

  return (
    <>
      <Text focusRef={autoFocusRef} color={"titleBlue"} variant="titleBlue" marginBottom="m" accessibilityRole="header">
        {i18n.translate('Home.ExposureDetected.Title')}
      </Text>
      <Text marginBottom="m">{i18n.translate('Home.ExposureDetected.Body1')}</Text>
      {/* <ExposureDateView /> */}

      <Text variant="bodyTitle" marginBottom="m" accessibilityRole="header">
        {i18n.translate('Home.ExposureDetected.Title2')}
      </Text>

      <Text marginBottom="m">{i18n.translate('Home.ExposureDetected.Body2')}</Text>
    </>
  );
};

export const ExposureView = ({ isBottomSheetExpanded }: { isBottomSheetExpanded: boolean }) => {
  return (
    <BaseHomeView iconName="contact-image" testID="exposure">
      <ExposureText isBottomSheetExpanded={isBottomSheetExpanded} />
      <ExposedHelpButton />
      {/* <ClearExposureView /> */}
    </BaseHomeView>
  );
};
