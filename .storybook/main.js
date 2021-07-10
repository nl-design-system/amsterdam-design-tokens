module.exports = {
  stories: ['../documentation/**/*stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-notes/register',
    '@storybook/addon-links',
    '@etchteam/storybook-addon-status/register',
  ],
};
