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

export default function login() {
    const router = useRouter();
    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: ""
    });
    const handleChange = (field, value) => {
        setInputs(values => ({
        ...values,
        [field]: value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signInWithPassword({
            email: inputs.email.trim(),
            password: inputs.password
        })

        console.log("data: ", data)
        
        if (error) {
        console.log("Signup error:", error.message);
        console.log("Error code:", error.code);
        console.log("Error status:", error.status);
        return;
        } else {
            router.replace('/home.jsx')
        }
        console.log('Signed in: ', data)
    };
    return (
        <View>
        <Text>Email:</Text>
        <TextInput
          value={inputs.email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => handleChange('email', value)}
          //style={styles.input}
        />

        <Text>Password:</Text>
        <TextInput
          value={inputs.password}
          onChangeText={(value) => handleChange('password', value)}
          secureTextEntry
          autoCapitalize="none"
          //style={styles.input}
        />
        <Button title="Submit" onPress={handleClick} />
        </View>
    );
}