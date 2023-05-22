import {createNavigationContainerRef} from '@react-navigation/native';
import {AppStackParamList} from './appNavigation';
import {StackScreenProps} from '@react-navigation/stack';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();
export function appNavigate(
  name: keyof AppStackParamList,
  params?: StackScreenProps<AppStackParamList>['route']['params'],
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
