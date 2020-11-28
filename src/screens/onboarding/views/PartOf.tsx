import React from 'react';
import {useI18n} from 'locale';
import {Box, BulletPointCheck} from 'components';

import {ItemView, ItemViewProps} from './ItemView';

export const PartOf = (props: Pick<ItemViewProps, 'isActive'>) => {
  const i18n = useI18n();

  return (
    <ItemView
      {...props}
      image={require('assets/onboarding/part-of.png')}
      altText={i18n.translate('Onboarding.PartOf.ImageAltText')}
      header={i18n.translate('Onboarding.PartOf.Title')}
      item="step-4"
    >
      <>
        <Box marginRight="s">
          <BulletPointCheck listAccessibile="listStart" text={i18n.translate('Onboarding.PartOf.Body1')} />
          <BulletPointCheck listAccessibile="item" text={i18n.translate('Onboarding.PartOf.Body2')} />
          <BulletPointCheck listAccessibile="listEnd" text={i18n.translate('Onboarding.PartOf.Body3')} />
        </Box>
      </>
    </ItemView>
  );
};
