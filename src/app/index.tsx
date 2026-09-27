import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems = [
    'Home',
    'About Us',
    'All Courses',
    'Fee Calculator',
    'Contact Us',
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Navigation Bar */}
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

      <ScrollView style={styles.container}>
        {/* Header banner */}
        <ImageBackground
          source={require('../../assets/images/tabIcons/Homepage_Background.jpg')}
          style={styles.heroBackground}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Learn How to Care for your Pets</Text>
            <TouchableOpacity style={styles.purpleButton} onPress={() => router.push('/courses' as any)}>
              <Text style={styles.buttonText}>Explore Courses</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Estimate Bar */}
        <View style={styles.estimateContainer}>
          <Text style={styles.estimateText}>Want a fast estimate?</Text>
          <TouchableOpacity style={styles.blueButton} onPress={() => router.push('/calculator' as any)}>
            <Text style={styles.buttonText}>Calculate Price</Text>
          </TouchableOpacity>
        </View>

        {/* Featured courses section */}
        <Text style={styles.sectionTitle}>Featured Courses</Text>
        <View style={styles.courseRow}>
          {/* Card 1 */}
          <View style={styles.card}>
            <Image
              source={require('../../assets/images/tabIcons/Animal_Behaviour.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Long Courses</Text>
            <TouchableOpacity style={styles.purpleButton} onPress={() => router.push('/courses' as any)}>
              <Text style={styles.buttonText} >Enrol</Text>
            </TouchableOpacity>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <Image
              source={require('../../assets/images/tabIcons/Puppy_Care.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Short Courses</Text>
            <TouchableOpacity style={styles.purpleButton} onPress={() => router.push('/courses' as any)}>
              <Text style={styles.buttonText}>Enrol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Hamburger Navigation Modal */}
      <Modal visible={menuVisible} animationType="slide" transparent={false}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Image 
              source={require('../../assets/images/tabIcons/Logo.png')} 
              style={styles.logoImage} 
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
              onPress={() => { setMenuVisible(false); router.push('/'); }}
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
              onPress={() => { setMenuVisible(false), router.push('/enquire' as any); }}
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
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  logoImage: {
    width: 60,
    height: 45,
  },
  
  hamburgerIcon: {
    fontSize: 26,
    color: '#382B5F',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heroBackground: {
    height: 220,
    justifyContent: 'center',
  },
  heroOverlay: {
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'right',
    width: '30%',
    marginBottom: 12,
  },
  estimateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  estimateText: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'center',
    marginVertical: 16,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#FFD1DC',
    borderRadius: 12,
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  purpleButton: {
    backgroundColor: '#584C77',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  blueButton: {
    backgroundColor: '#6C9BCF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  /* Modal Styles */
  modalContainer: {
    flex: 1,
    backgroundColor: '#9CBBDC',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  modalLogoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#382B5F',
  },
  closeIcon: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  menuHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    letterSpacing: 1,
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});