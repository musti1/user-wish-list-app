import { combineReducers } from 'redux';
import HomePage from './homePage';
import SettingsPage from './settingsPage';

export default combineReducers({
    home: HomePage,
    settings: SettingsPage
    // another reducer
});