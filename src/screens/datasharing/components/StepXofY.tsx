import React from 'react';
import {Text} from 'components';
import {useI18n} from 'locale';

export interface StepXofYProps {
  currentStep: number;
  totalSteps?: number;
}

export const StepXofY = ({currentStep, totalSteps = 3}: StepXofYProps) => {
  const i18n = useI18n();
  return (
    <Text marginBottom="s">
      <Text marginBottom="xs" variant="bodySubTitle" color="greyLightBlue1">
        {i18n.translate('DataUpload.StepXofY', {x: currentStep, y: totalSteps})}
      </Text>
      <Text marginBottom="xs" variant="smallTextBold" color="greyLightBlue1">
        /{currentStep}
      </Text>
    </Text>
  );
};
