import { Feather } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
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
          title: 'Busca',
          tabBarIcon: ({ color,size }) =>  <Feather name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Carrinho"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color,size }) =>  <Feather name="shopping-cart" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
