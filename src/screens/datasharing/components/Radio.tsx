import React from 'react';
import {Box, Text} from 'components';
import {TouchableOpacity, View, StyleSheet} from 'react-native';

export const RadioButton = (props: any) => {
  const selected = props.active === props.value;
  const activeStyles = selected ? {...styles.active} : {};
  return (
    <Box marginBottom="m">
      <TouchableOpacity
        onPress={() => {
          props.onPress(props.value);
        }}
        accessibilityRole="radio"
        accessibilityState={{selected}}
      >
        <Box flex={1} flexDirection="row">
          <Box style={{...styles.circle, ...activeStyles}}>
            {selected ? <View style={styles.checkedCircle} /> : <View />}
          </Box>
          <Box style={styles.label}>
            <Text color="lightText" variant="bodyText">
              {props.text}
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

const styles = StyleSheet.create({
  circle: {
    flex: 0,
    height: 32,
    width: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#0055ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  label: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  active: {
    borderWidth: 2,
  },
  checkedCircle: {
    width: 17,
    height: 17,
    borderRadius: 9,
    backgroundColor: '#0055ff',
    borderWidth: 0,
  },
});
