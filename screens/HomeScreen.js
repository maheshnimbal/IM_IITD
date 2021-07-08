
import React from 'react';
import PersonalGrp from './PersonalGrp';
import Broadcast from './Broadcast';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

export default function Homescreen({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Broadcast" component={Broadcast} />
      <Tab.Screen name="PersonalGrp" component={PersonalGrp} />
    </Tab.Navigator>
  );
}

