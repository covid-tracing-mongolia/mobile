import React, {useEffect, useState} from 'react';
import {ThemeProvider as ThemeProviderRS} from '@shopify/restyle';

import defaultTheme, {Theme} from './default';

interface ThemeProviderProps {
  children?: React.ReactElement;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  // Need to also get value for light/dark theme from storage
  const [theme, setTheme] = useState<Theme>(getThemeWithDefault());

  useEffect(() => setTheme(getThemeWithDefault()), []);

  return <ThemeProviderRS theme={theme}>{children}</ThemeProviderRS>;
};

const getThemeWithDefault = (mode: 'light' | 'dark' = 'light'): Theme => {
  return themes.None[mode];
};

// Add different themes into this map
const themes = {
  None: {
    light: defaultTheme,
    dark: defaultTheme,
  },
};
