import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SuccessScreen() {
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

      <View style={styles.container}>
        <Text style={styles.pageTitle}>Enquire</Text>

        <View style={styles.contentBox}>
          {/* Checkmark icon */}
          <Text style={styles.checkIcon}>✓</Text>

          {/* Success Message */}
          <Text style={styles.successText}>Request Submitted</Text>

          {/* Back to home button */}
          <TouchableOpacity
            style={styles.purpleButton}
            onPress={() => router.push('/' as any)}
          >
            <Text style={styles.buttonText}>Back To Home</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* / Hamburger menu / Navigation  */}
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
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20 },
  pageTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'center',
    marginVertical: 16,
  },
  contentBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 80,
  },
  checkIcon: {
    fontSize: 72,
    color: '#584C77',
    fontWeight: '300',
    marginBottom: 20,
  },
  successText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#584C77',
    marginBottom: 40,
  },
  purpleButton: {
    backgroundColor: '#584C77',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
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