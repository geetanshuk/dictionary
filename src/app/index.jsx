import * as Device from 'expo-device';
import { useState } from 'react'
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TextInput, Button } from 'react-native';
import { AnimatedIcon } from '@/components/animated-icon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import {supabase} from '@/lib/supabase'
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  })

  const handleChange = (field, value) => {
    setInputs(values => ({
      ...values,
      [field]: value
    }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Email:", inputs.email);
    console.log("Password exists:", !!inputs.password);
    const { data, error } = await supabase.auth.signUp({
      email: inputs.email.trim(),
      password: inputs.password,
      options: {
        data: {
          username: inputs.username,
          name: inputs.name,
          email: inputs.email,
        },
      },
    });
    if (error) {
      console.log("Signup error:", error.message);
      console.log("Error code:", error.code);
      console.log("Error status:", error.status);
      return;
    }
    router.replace('/explore.jsx')
  };
  return (
    
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Sign Up
          </ThemedText>
        </ThemedView>

        <View style={styles.stepContainer}>

        <Text>Name:</Text>
        <TextInput
          value={inputs.name}
          onChangeText={(value) => handleChange('name', value)}
          style={styles.input}
        />

        <Text>Email:</Text>
        <TextInput
          value={inputs.email}
          onChangeText={(value) => handleChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <Text>Username:</Text>
        <TextInput
          value={inputs.username}
          onChangeText={(value) => handleChange('username', value)}
          autoCapitalize="none"
          style={styles.input}
        />

        <Text>Password:</Text>
        <TextInput
          value={inputs.password}
          onChangeText={(value) => handleChange('password', value)}
          secureTextEntry
          style={styles.input}
        />

        <Button title="Submit" onPress={handleClick} />

      </View>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
