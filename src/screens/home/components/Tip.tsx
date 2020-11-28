import React from 'react';
import {Box, ButtonSingleLine, Icon, Text} from 'components';
import {Linking} from 'react-native';
import {useI18n} from 'locale';

export const Tip = () => {
  const i18n = useI18n();
  return (
    <Box backgroundColor="green2" borderRadius={10} paddingVertical="m" marginTop="m" marginBottom="m">
      <Box flexDirection="row" paddingLeft="s" paddingRight="m">
        <Box flex={0} paddingTop="xxs" marginRight="xxs">
          <Icon name="icon-light-bulb" size={40} />
        </Box>
        <Box flex={1}>
          <Text>
            <Text fontWeight="bold">{i18n.translate('Home.DiagnosedView.Tip.Title')}</Text>
            <Text>
              Vous pouvez vous préparer pour l’appel de la Santé publique sur le site Web des résultats du test.
            </Text>
          </Text>
        </Box>
      </Box>

      <Box paddingHorizontal="m" paddingTop="s">
        <ButtonSingleLine
          text="Site des résultats du test"
          variant="thinFlatNeutralGrey"
          externalLink
          onPress={() => Linking.openURL(`https://nema.gov.mn`)}
        />
      </Box>
    </Box>
  );
};
