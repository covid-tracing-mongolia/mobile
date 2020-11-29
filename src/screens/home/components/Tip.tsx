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
          <Text color="bodyTextWhite" variant="bodyTitle" fontWeight="bold">
            {i18n.translate('Home.DiagnosedView.Tip.Title')}
          </Text>
          <Text marginTop="s" color="bodyTextWhite" variant="bodyDescription">
            Та доорх сайтаас COVID-19 халдварын талаар дэлгэрэнгүй мэдээлэл авах боломжтой
          </Text>
        </Box>
      </Box>

      <Box paddingHorizontal="m" paddingTop="s">
        <ButtonSingleLine
          text="Тусламж авах"
          variant="thinFlatNeutralGrey"
          externalLink
          onPress={() => Linking.openURL(`https://covid19.mohs.mn`)}
        />
      </Box>
    </Box>
  );
};
