import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import MenuList from './pages/MenuList';
import addList from './pages/addList';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register,
        MenuList,
        addList,
    })
);

export default Routes;
