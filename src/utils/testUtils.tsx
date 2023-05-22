import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { setupStore } from '../store';
import { ThemeProvider } from '../theme';
import { LocaleProvider } from '../locales/context';
import { PortalProvider } from '@gorhom/portal';

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <LocaleProvider>
          <PortalProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </PortalProvider>
        </LocaleProvider>
      </Provider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
