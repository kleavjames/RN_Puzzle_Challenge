import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import AppBootstrap from './src/bootstrap/AppBootstrap';

AppRegistry.registerComponent(appName, () => AppBootstrap);
