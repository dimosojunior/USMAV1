import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {globalstyles} from '../Styles/global';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SECTIONS = [
  {
    header: 'Preferences',
    icon: 'settings',
    items: [
      { label: 'Language', value: 'English', type: 'input' },
      { label: 'Dark Mode', value: false, type: 'boolean' },
      { label: 'Use Wi-Fi', value: true, type: 'boolean' },
      { label: 'Location', value: 'Los Angeles, CA', type: 'input' },
      { label: 'Show collaborators', value: true, type: 'boolean' },
      { label: 'Accessibility mode', value: false, type: 'boolean' },
    ],
  },
  {
    header: 'Help',
    icon: 'help-circle',
    items: [
      { label: 'Item 1', type: 'link' },
      { label: 'Item 2', type: 'input', value: 'Value' },
      { label: 'Item 3', type: 'boolean', value: true },
      { label: 'Item 4', type: 'boolean', value: false },
      { label: 'Item 5', type: 'link' },
    ],
  },
  {
    header: 'Content',
    icon: 'align-center',
    items: [
      { label: 'Item 1', type: 'link' },
      { label: 'Item 2', type: 'input', value: 'Value' },
      { label: 'Item 3', type: 'boolean', value: true },
      { label: 'Item 4', type: 'boolean', value: false },
      { label: 'Item 5', type: 'link' },
    ],
  },
];

export default function Settings() {
  const [value, setValue] = React.useState(0);
  const { tabs, items } = React.useMemo(() => {
    return {
      tabs: SECTIONS.map(({ header, icon }) => ({
        name: header,
        icon,
      })),
      items: SECTIONS[value].items,
    };
  }, [value]);

  return (
    <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex: 1 }}>
      <ScrollView contentContainerStyle={globalstyles.containerSettingPage}>
        <View style={globalstyles.headerSettingPage}>
          <Text style={globalstyles.titleSettingPage}>Settings</Text>

          <Text style={globalstyles.subtitleSettingPage}>
            University Students Materials App
          </Text>
        </View>

        <View style={globalstyles.profile}>
          <View style={globalstyles.profileHeader}>
            <Image
              alt=""
              source={require('../assets/3q.jpeg')}
              style={globalstyles.profileAvatar}
            />

            <View style={globalstyles.profileBody}>
              <Text style={globalstyles.profileName}>Dimoso Junior</Text>

              <Text style={globalstyles.profileHandle}>juniordimoso8@gmail.com</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={globalstyles.profileAction}>
              <Text style={globalstyles.profileActionText}>Edit Profile</Text>

              <FeatherIcon color="#fff" name="edit-3" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={globalstyles.contentSettingPage}>
          <View style={globalstyles.tabs}>
            {tabs.map(({ name, icon }, index) => {
              const isActive = index === value;

              return (
                <View
                  key={name}
                  style={[
                    globalstyles.tabWrapper,
                    isActive && { borderBottomColor: '#6366f1' },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      setValue(index);
                    }}>
                    <View style={globalstyles.tab}>
                      <FeatherIcon
                        color={isActive ? '#6366f1' : '#6b7280'}
                        name={icon}
                        size={16}
                      />

                      <Text
                        style={[
                          globalstyles.tabText,
                          isActive && { color: '#6366f1' },
                        ]}>
                        {name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          {items.map(({ label, type, value }, index) => {
            return (
              <View
                key={label}
                style={[
                  globalstyles.rowWrapper,
                  index === 0 && { borderTopWidth: 0 },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={globalstyles.row}>
                    <Text style={globalstyles.rowLabel}>{label}</Text>

                    <View style={globalstyles.rowSpacer} />

                    {type === 'input' && (
                      <Text style={globalstyles.rowValue}>{value}</Text>
                    )}

                    {type === 'boolean' && (
                      <Switch trackColor={{ true: '#007bff' }} value={value} />
                    )}

                    {(type === 'input' || type === 'link') && (
                      <FeatherIcon
                        color="#7f7f7f"
                        name="chevron-right"
                        size={20}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});