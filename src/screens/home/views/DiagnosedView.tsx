import React from 'react';
import {useI18n} from 'locale';
import {Text} from 'components';
import {ExposureStatusType, useExposureStatus} from 'services/ExposureNotificationService';
import {getUploadDaysLeft} from 'shared/date-fns';
import {pluralizeKey} from 'shared/pluralization';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';
import {TEST_MODE} from 'env';

import {BaseHomeView} from '../components/BaseHomeView';
import {Tip} from '../components/Tip';

export const DiagnosedView = ({isBottomSheetExpanded}: {isBottomSheetExpanded: boolean}) => {
  const i18n = useI18n();
  const exposureStatus = useExposureStatus();
  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);

  let daysLeft: number;
  if (TEST_MODE && exposureStatus.type !== ExposureStatusType.Diagnosed) {
    daysLeft = 13;
  } else {
    if (exposureStatus.type !== ExposureStatusType.Diagnosed) return null;
    daysLeft = getUploadDaysLeft(exposureStatus.cycleEndsAt);
  }
  return (
    <BaseHomeView iconName="icon-diagnosed" testID="diagnosed">
      <Text focusRef={autoFocusRef} variant="bodyTitle" color="darkText" marginBottom="m" accessibilityRole="header">
        {i18n.translate('Home.DiagnosedView.Title')}
        {/* No exposure detected */}
      </Text>
      {daysLeft < 1 ? null : (
        <>
          <Text variant="bodyDescription" color="lightText" marginBottom="m">
            {i18n.translate(pluralizeKey('Home.DiagnosedView.Body1', daysLeft), {number: daysLeft})}
          </Text>
          <Text variant="bodyDescription" color="lightText" marginBottom="m">
            {i18n.translate('Home.DiagnosedView.Body2')}
          </Text>
          <Text variant="bodyDescription" color="lightText" marginBottom="m">
            {i18n.translate('Home.DiagnosedView.Body3')}
          </Text>
          <Tip />
        </>
      )}
    </BaseHomeView>
  );
};
