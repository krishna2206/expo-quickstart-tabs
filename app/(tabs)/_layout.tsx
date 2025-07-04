import { BlurTabBar } from '@/components';
import { useThemeColors } from '@/hooks/useThemeColors';
import { useTranslation } from '@/hooks/useTranslation';
import { ThemeColors } from '@/types/colors';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colors: ThemeColors = useThemeColors();
  const { t } = useTranslation();

  return (
    <Tabs
      tabBar={props => <BlurTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.onSurface,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('common.home'),
        }}
      />
      <Tabs.Screen
        name="demo"
        options={{
          title: t('common.demo'),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('common.settings'),
        }}
      />
    </Tabs>
  );
}