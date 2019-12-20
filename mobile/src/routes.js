import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import MenuList from './pages/MenuList';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        MenuList,
    })
);

export default Routes;
