import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Feather } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarBackground: TabBarBackground,
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
        name="Produtos"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color,size }) =>  <Feather name="shopping-cart" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
