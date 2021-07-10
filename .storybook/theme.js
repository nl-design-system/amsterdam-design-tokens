import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  colorPrimary: '#EC0000',
  colorSecondary: '#004699',

  // UI
  appBg: '#e6e6e6',
  appContentBg: '#ffffff',
  appBorderColor: '#767676',
  appBorderRadius: 0,

  textColor: '#1d1d1c',

  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barBg: '#767676',

  // Typography
  fontBase: '"Arial", sans-serif',
  fontCode: 'monospace',
  fontSize: '100%',

  brandTitle: 'NL Design System ❤️ Amsterdam',
  brandUrl: 'https://www.nldesignsystem.nl',
  // brandImage: 'logo/logo-amsterdam-nl.svg',
});
