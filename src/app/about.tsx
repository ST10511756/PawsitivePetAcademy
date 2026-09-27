import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function AboutScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Navigation bar */}
      <View style={styles.topNav}>
        <Image
          source={require('../../assets/images/tabIcons/Logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={styles.hamburgerIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Cat image */}
        <Image
          source={require('../../assets/images/tabIcons/About Us Image.jpg')}
          style={styles.heroImage}
          resizeMode="cover"
        />

        {/* Our Mission section */}
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.descriptionText}>
          Pawsitive Pet Academy provides top-tier pet care training in Durban to empower pet owners.
        </Text>

        {/* Why Us? Grid section */}
        <Text style={styles.sectionTitle}>Why Us?</Text>

        <View style={styles.gridContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>5+ years of experience</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Certified Trainers</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Reliable Outcome</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Trustworthy</Text>
          </View>
        </View>
      </ScrollView>

      {/* Hamburger Menu / Navigation */}
      <Modal visible={menuVisible} animationType="slide" transparent={false}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Image
              source={require('../../assets/images/tabIcons/Logo.png')}
              style={styles.modalLogoImage}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalContent}>
            <Text style={styles.menuHeading}>NAVIGATION MENU</Text>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setMenuVisible(false); router.push('/' as any); }}
            >
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setMenuVisible(false); router.push('/about' as any); }}
            >
              <Text style={styles.menuText}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setMenuVisible(false); router.push('/courses' as any); }}
            >
              <Text style={styles.menuText}>All Courses</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setMenuVisible(false); router.push('/calculator' as any); }}
            >
              <Text style={styles.menuText}>Fee Calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => { setMenuVisible(false); router.push('/enquire' as any); }}
            >
              <Text style={styles.menuText}>Contact Us</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

// Styling
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  logoImage: { width: 60, height: 45 },
  hamburgerIcon: { fontSize: 26, color: '#382B5F' },
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#382B5F',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#111',
    lineHeight: 24,
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFD1DC',
    width: '38%',
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 14,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'center',
  },
  modalContainer: { flex: 1, backgroundColor: '#9CBBDC' },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  modalLogoImage: { width: 60, height: 45 },
  closeIcon: { fontSize: 28, color: '#FFFFFF', fontWeight: '300' },
  modalContent: { flex: 1, alignItems: 'center', paddingTop: 40 },
  menuHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    letterSpacing: 1,
  },
  menuItem: { paddingVertical: 12 },
  menuText: { fontSize: 20, fontWeight: '600', color: '#FFFFFF' },
});