import { Feather } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color,size }) =>  <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="BuscaPorMedicamentos"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color,size }) =>  <Feather name="search" size={size} color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="Carrinho"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color,size }) =>  <Feather name="shopping-cart" size={size} color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
