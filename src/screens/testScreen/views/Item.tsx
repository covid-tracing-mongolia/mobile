import React from 'react';
import {Box, Ripple, Text} from 'components';

export interface ItemProps {
  title: string;
  subtitle?: string;
  onPress?(): void;
  connectedRight?: React.ReactElement | string;
}

export const Item = ({title, subtitle, onPress, connectedRight}: ItemProps) => {
  const connectedRightElement =
    typeof connectedRight === 'string' ? (
      <Text color="darkText" variant="menuItemText">
        {connectedRight}
      </Text>
    ) : (
      connectedRight
    );

  const content = (
    <Box flexDirection="row" height={48} alignItems="center" paddingHorizontal="m">
      <Box flex={1}>
        <Text variant="menuItemText" color="darkText">
          {title}
        </Text>
        {subtitle && <Text color="bodyTextSubdued">{subtitle}</Text>}
      </Box>
      {connectedRightElement}
    </Box>
  );

  if (!onPress) {
    return content;
  }

  return <Ripple onPress={onPress}>{content}</Ripple>;
};
