import React from 'react';
import {Appearance, Platform} from 'react-native';
import {darkTheme, lightTheme, Theme} from './theme';
import DeviceInfo from 'react-native-device-info';
//import changeNavigationBarColor from 'react-native-navigation-bar-color';
//import appConfig from '../config/app';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {selectUser, setThemeId} from '../store/slices/user';
import {themesId} from '../utils/constants';

interface ProvidedValue {
  theme: Theme;
  toggleTheme: (id: string) => void;
}
// Initial context
export const ThemeContext = React.createContext<ProvidedValue>({
  theme: lightTheme,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

const defineThemeFromStore = (themeId: string) => {
  if (themeId === themesId.light) {
    return lightTheme;
  } else {
    return darkTheme;
  }
};

const defineThemeFromOs = () => {
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    return darkTheme;
  } else {
    return lightTheme;
  }
};

const isOsThemeUsed = (themeId: string) => {
  const osVersion = DeviceInfo.getSystemVersion();
  let intOsVersion = 0;
  try {
    intOsVersion = parseInt(osVersion, 10);
  } catch (e) {}

  let targetOsVersion;
  if (Platform.OS === 'ios') {
    targetOsVersion = 13;
  } else {
    targetOsVersion = 10;
  }

  return intOsVersion >= targetOsVersion && themeId === themesId.os;
};

const defineInitialTheme = (themeId: string) => {
  if (isOsThemeUsed(themeId)) {
    return defineThemeFromOs();
  } else {
    return defineThemeFromStore(themeId);
  }
};

// Component props
interface Props {
  children?: React.ReactNode;
}
// Context provider
export const ThemeProvider = React.memo<Props>(props => {
  const user = useAppSelector(selectUser);
  const [theme, setTheme] = React.useState<Theme>(
    defineInitialTheme(user.themeId),
  );
  const dispatch = useAppDispatch();

  const ToggleThemeCallback = React.useCallback(
    (id: string) => {
      dispatch(setThemeId(id));
      setTheme(defineInitialTheme(id));
    },
    [dispatch],
  );

  // Building up the provided object
  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);

  const light = theme.id === themesId.light;
  React.useEffect(() => {
    //changeNavigationBarColor(theme.color.navBar, light, false);

    const listener = () => {
      setTheme(defineInitialTheme(user.themeId));
    };

    const subscription = Appearance.addChangeListener(listener);
    return () => {
      subscription.remove();
    };
  }, [light, theme, user]);

  return (
    <ThemeContext.Provider value={MemoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});

// Creating a custom hooks
export const useTheme = () => React.useContext(ThemeContext);

type Generator<T extends {}> = (theme: Theme) => T;
export const useThemedStyle = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useTheme();
  return React.useMemo(() => fn(theme), [fn, theme]);
};
