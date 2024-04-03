import StyledComponentsRegistry from 'lib/registry';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import { AppProviders } from 'providers/app-providers';
import { QueryProvider } from 'providers/query-provider';

const barlow = Barlow({
  weight: ['100', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FindMe',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" translate="no" className={barlow.className}>
      <body>
        <StyledComponentsRegistry>
          <QueryProvider>
            <AppProviders>{children}</AppProviders>
          </QueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
