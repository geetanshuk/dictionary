
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ImageBackground } from 'expo-image';

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>

        {/* Greeting */}
        <ThemedText type="title" style={styles.title}>
          Good Afternoon,{"\n"}
          Geetanshu
        </ThemedText>

        {/* Hero Card */}
        <ImageBackground
          source={require('../../assets/images/cover.jpg')}
          style={styles.hero}
          imageStyle={styles.heroImage}
        >
          {/* Dark overlay */}
          <View style={styles.overlay}>

            {/* Centered text */}
            <View style={styles.allText}>

              <Text style={styles.eyebrow}>
                MEAL PREP, MADE SIMPLE
              </Text>

              <Text style={styles.overlaySlogan}>
                Good Food,{"\n"}
                <Text style={styles.sloganAccent}>
                  Zero Guesswork.
                </Text>
              </Text>

              <Text style={styles.overlaySmall}>
                Pick your recipes and we'll{"\n"}
                coordinate the rest.
              </Text>

              {/* CTA */}
              <Pressable
                style={styles.ctaButton}
                onPress={() => console.log('Prep session pressed')}
              >
                <Text style={styles.overlayText}>
                  Plan my prep session →
                </Text>
              </Pressable>

            </View>
          </View>
        </ImageBackground>

      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8ED',
  },

  safeArea: {
    flex: 1,
  },

  title: {
    color: '#24452C',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 28,
  },

  hero: {
    width: '90%',
    aspectRatio: 1.1,
    alignSelf: 'center',
    borderRadius: 24,
    overflow: 'hidden',
  },

  heroImage: {
    borderRadius: 24,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 35, 20, 0.40)',
  },

  allText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  eyebrow: {
    color: '#D8E8B5',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 20,
  },

  overlaySlogan: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 48,
  },

  sloganAccent: {
    fontWeight: '900',
    color: '#D8E8B5',
  },

  overlaySmall: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 32,
  },

  ctaButton: {
    backgroundColor: '#D8E8B5',
    paddingVertical: 17,
    paddingHorizontal: 28,
    borderRadius: 50,
    alignItems: 'center',
  },

  overlayText: {
    color: '#24452C',
    fontSize: 16,
    fontWeight: '800',
  },
});
