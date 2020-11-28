import React from 'react';
import {Box, Icon, Text} from 'components';
import {useI18n} from 'locale';

interface Props {
  enabled: boolean;
}
export const StatusHeaderView = ({enabled}: Props) => {
  const i18n = useI18n();
  const color = enabled ? 'statusSuccess' : 'statusError';
  return (
    <Box justifyContent="center" flexDirection="row" alignItems="flex-start" paddingHorizontal="m">
      <Icon name="header-logo" height={50} width={50} />

      <Box flexDirection="column" alignItems="flex-start" marginLeft="m">
        <Text variant="overlayTitle" color="darkText">
          COVID Tracing
        </Text>

        <Box flexDirection="row">
          <Text variant="overlayTitle" color="darkText">
            Mongolia апп{' '}
          </Text>
          <Text variant="overlayTitle" color={color} fontWeight="bold">
            {enabled ? i18n.translate('OverlayClosed.SystemStatusOn') : i18n.translate('OverlayClosed.SystemStatusOff')}
          </Text>
        </Box>
      </Box>
      <Text />
    </Box>
  );
};
