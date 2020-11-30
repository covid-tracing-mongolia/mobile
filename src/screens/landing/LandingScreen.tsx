import React, {useCallback} from 'react';
import {Image, StyleSheet} from 'react-native';
import {useStorage} from 'services/StorageService';
import {Box, Button} from 'components';
import {useI18n} from 'locale';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const LandingScreen = () => {
  const i18n = useI18n();
  const navigation = useNavigation();
  const {setLocale} = useStorage();
  const toggle = useCallback(
    (newLocale: 'en' | 'mn') => () => {
      setLocale(newLocale);
      navigation.reset({
        index: -1,
        routes: [{name: 'OnboardingNavigator'}],
      });
    },
    [navigation, setLocale],
  );
  return (
    <SafeAreaView style={styles.flex}>
      <Box flex={1} marginBottom="s" style={{...styles.imageBackround}}>
        <Box flex={1} justifyContent="flex-start" alignItems="center" paddingTop="s">
          <Image
            resizeMethod="scale"
            style={{...styles.imagePad}}
            accessible
            accessibilityLabel={i18n.translate('Landing.AltText')}
            source={require('assets/landing-screen.png')}
          />
        </Box>
        <Box style={styles.overlay} paddingVertical="m">
          <Box paddingHorizontal="m">
            <Button
              testID="frButton"
              onPress={toggle('mn')}
              text="Монгол"
              variant="bigFlatNeutralGrey"
              flagIcon="mongolia-flag"
            />
          </Box>

          <Box paddingHorizontal="m" marginTop="s" marginBottom="s">
            <Button
              testID="enButton"
              onPress={toggle('en')}
              text="English"
              variant="bigFlatNeutralGrey"
              flagIcon="america-flag"
            />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -50,
  },
  imageBackround: {
    backgroundColor: '#F5F9FF',
  },
  imagePad: {flex: 1, width: '100%'},
  overlay: {
    backgroundColor: '#FFFFFF',
  },
});
