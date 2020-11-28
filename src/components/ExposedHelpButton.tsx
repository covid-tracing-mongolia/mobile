import React, { useCallback } from 'react';
import { Box, ButtonSingleLine } from 'components';
import { Linking } from 'react-native';
import { captureException } from 'shared/log';

export const ExposedHelpButton = () => {
  const onPress = useCallback(() => {
    Linking.openURL(`https://nema.gov.mn`).catch(error => captureException('An error occurred', error));
  }, []);

  // if (cta === '') {
  //   return <ErrorBox marginTop="m" />;
  // }

  return (
    <Box alignSelf="stretch" marginTop="s" marginBottom="m">
      <ButtonSingleLine
        text="Find out if you need to be testeds"
        variant="bigFlatPurple"
        externalLink
        onPress={onPress}
      />
    </Box>
  );
};
