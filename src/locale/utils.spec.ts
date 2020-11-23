import {getSystemLocale} from './utils';

const mockCallback = jest.fn();

jest.mock('react-native-localize', () => ({
  getLocales: () => mockCallback(),
  getNumberFormatSettings: () => ({
    decimalSeparator: '.',
    groupingSeparator: ',',
  }),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe('locale utils', () => {
  describe('getSystemLocale', () => {
    it('returns languageCode for first available locale', () => {
      mockCallback.mockReturnValueOnce([
        {countryCode: 'MN', languageTag: 'mn-MN', languageCode: 'mn', isRTL: false},
        {countryCode: 'CA', languageTag: 'en-CA', languageCode: 'en', isRTL: false},
      ]);

      expect(getSystemLocale()).toStrictEqual('mn');
    });

    it('returns en as default locale', () => {
      expect(getSystemLocale()).toStrictEqual('en');
    });
  });
});
