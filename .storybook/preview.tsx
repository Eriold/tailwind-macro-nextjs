
import { StoryContext } from '@storybook/react';
import * as React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  viewport: {
    viewports: {
      mobileSmall: {
        name: 'Mobile Small (xs)',
        styles: {
          width: '320px',
          height: '568px'
        }
      },
      mobile: {
        name: 'Mobile (sm)',
        styles: {
          width: '360px',
          height: '640px'
        }
      },
      tablet: {
        name: 'Tablet (md)',
        styles: {
          width: '768px',
          height: '1024px'
        }
      },
      desktopSmall: {
        name: 'Desktop Small (lg)',
        styles: {
          width: '1280px',
          height: '720px'
        }
      },
      desktopLarge: {
        name: 'Desktop Large (xl)',
        styles: {
          width: '1440px',
          height: '900px'
        }
      },
      desktopExtraLarge: {
        name: 'Desktop Extra Large (max)',
        styles: {
          width: '1920px',
          height: '1080px'
        }
      }
    },
    defaultViewport: 'desktopSmall'
  }
}

const withSkydropx = (StoryFn: Function, context: StoryContext) => {
  return (
    <>
      <GlobalStyles />
      <StoryFn />
    </>
  );
};

export const decorators = [withSkydropx];