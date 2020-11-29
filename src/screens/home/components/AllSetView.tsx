import React from 'react';
import {Text, TextMultiline} from 'components';
import {useAccessibilityAutoFocus} from 'shared/useAccessibilityAutoFocus';

export const AllSetView = ({
  isBottomSheetExpanded,
  titleText,
  bodyText,
  testID,
}: {
  isBottomSheetExpanded: boolean;
  titleText: string;
  bodyText: string;
  testID?: string;
}) => {
  const autoFocusRef = useAccessibilityAutoFocus(!isBottomSheetExpanded);
  return (
    <>
      <Text
        testID={testID}
        focusRef={autoFocusRef}
        variant="bodyTitle"
        color="darkText"
        marginBottom="m"
        accessibilityRole="header"
      >
        {titleText}
      </Text>
      <TextMultiline color="lightText" variant="bodyDescription" text={bodyText} marginBottom="m" />
    </>
  );
};
