import React from 'react';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';
import { theme } from '@/core/themes';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { ClientLayout } from '@/core/components/layout/clientLayout';

export const metadata = {
  title: 'Nano - Nanotechnology for Livestock Farms',
  description:
    'Nano uses advanced radiative cooling nanoparticles and phase-change materials to passively regulate livestock farm temperatures — no electricity required. Protecting animals, reducing heat stress losses, and improving farm productivity.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ClientLayout>{children}</ClientLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
