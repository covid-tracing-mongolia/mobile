import React, {useCallback, useState} from 'react';

import {Box} from './Box';
import {TextInput} from './TextInput';

export interface CodeInputProps {
  value: string;
  onChange: (value: string) => void;
  accessibilityLabel: string;
}

export const CodeInput = ({value, onChange, accessibilityLabel}: CodeInputProps) => {
  const onChangeTrimmed = useCallback(text => onChange(text.trim()), [onChange]);
  const [isFocus, setIsFocus] = useState(false);
  const onFocus = useCallback(() => setIsFocus(true), []);
  const onBlur = useCallback(() => setIsFocus(false), []);

  return (
    <>
      <Box
        marginHorizontal="none"
        borderRadius={9}
        borderWidth={4}
        borderColor={isFocus ? 'overlayBackground' : 'overlayBackground'}
      >
        <Box flex={1} paddingHorizontal="xs" borderWidth={1} borderColor={isFocus ? 'gray5' : 'gray5'} borderRadius={5}>
          <TextInput
            color="bodyText"
            value={value}
            onChangeText={onChangeTrimmed}
            onFocus={onFocus}
            onBlur={onBlur}
            autoCorrect={false}
            autoCompleteType="off"
            returnKeyType="done"
            accessibilityLabel={accessibilityLabel}
            padding="s"
            maxLength={12}
            fontSize={26}
            borderWidth={0}
            autoCapitalize="characters"
            fontFamily="Menlo"
            letterSpacing={5}
            testID="textInput"
          />
        </Box>
      </Box>
    </>
  );
};
