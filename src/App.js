import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Me from './screens/Me/Me';
import Explore from './screens/Explore/Explore';
import Insights from './screens/Insights/Insights';
import {themeColor} from './theme';

const Tab = createBottomTabNavigator();

const routes = [
    {name: 'Home', iconName: 'home', component: Home},
    {name: 'Explore', iconName: 'magnify', component: Explore},
    {name: 'Insights', iconName: 'lightbulb-outline', component: Insights},
    {name: 'Me', iconName: 'account-outline', component: Me},
];

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    const matchedRoute = routes.find(i => i.name === route.name);
                    return (
                        <View style={styles.tabItem}>
                            <Icon name={matchedRoute.iconName} size={24} color={themeColor.primaryColor.text}/>
                            <Text style={{...styles.tabItemText, fontWeight: focused ? 'bold' : null}}>
                                {matchedRoute.name}
                            </Text>
                        </View>
                    );
                },
            })}
            initialRouteName={routes[0]}
            tabBarOptions={{
                style: {backgroundColor: themeColor.primaryColor.main},
                tabStyle: {paddingVertical: 4, backgroundColor: themeColor.primaryColor.main},
                showLabel: false,
            }}>
            {routes.map(({name, component}) =>
                <Tab.Screen name={name} component={component} key={name}/>,
            )}
        </Tab.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabItemText: {
        fontSize: 10,
        color: themeColor.primaryColor.text,
    },
});

export default App;
