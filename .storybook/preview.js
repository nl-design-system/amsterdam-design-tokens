import '@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css';
import '../proprietary/font/src/index.css';

const statuses = {
  STABLE: {
    background: '#006400',
    color: '#ffffff',
    description:
      'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
  },
  UNSTABLE: {
    background: '#cca300',
    color: '#ffffff',
    description: 'Used in production in a specific situation, evolving APIs based on feedback, many major releases.',
  },
  EXPERIMENTAL: {
    background: '#cc0000',
    color: '#ffffff',
    description:
      'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
  },
  'WORK IN PROGRESS': {
    background: '#cc0000',
    color: '#ffffff',
    description: 'Do not use in production. Not versioned and published yet.',
  },
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
};

export const parameters = {
  controls: { expanded: false },
  previewTabs,
  status: {
    statuses,
  },
  options: {
    panelPosition: 'bottom',
    storySort: {
      order: ['Amsterdam', ['Intro']],
    },
  },
};
