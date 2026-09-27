import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function EnquireScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ services?: string; total?: string }>();
  const [menuVisible, setMenuVisible] = useState(false);

  // The input of the user is captured
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // The values from the Fee Calculator page are filled in 
  const selectedServices = params.services || 'No services selected';
  const totalAmount = params.total ? `R${params.total}` : 'R0.00';

  // Form validation
  const handleSubmit = () => {
    // Input validation check
    if (!fullName.trim() || !email.trim()) {
      Alert.alert('Required Fields', 'Please enter your full name and email address.');
      return;
    }

    Alert.alert('Success', 'Your enquiry has been submitted successfully!', [
      { text: 'OK', onPress: () => router.push('/' as any) },
    ]);

    // A confirmation message appears on the screen after the user press the button
    router.push('/success' as any);
  };

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
        <Text style={styles.pageTitle}>Enquire</Text>

        {/* Full name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name..."
          placeholderTextColor="#666"
          value={fullName}
          onChangeText={setFullName}
        />

        {/* Email address */}
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email..."
          placeholderTextColor="#666"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        {/* Filled in selected services */}
        <Text style={styles.label}>Selected Service(s)</Text>
        <View style={styles.inputReadOnly}>
          <Text style={styles.readOnlyText}>{selectedServices}</Text>
        </View>

        {/* Total amount */}
        <Text style={styles.label}>Total</Text>
        <View style={styles.inputReadOnly}>
          <Text style={styles.readOnlyText}>{totalAmount}</Text>
        </View>

        {/* Message or additional notes */}
        <Text style={styles.label}>Message / Additional Notes</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Any specific requirements?"
          placeholderTextColor="#666"
          multiline
          numberOfLines={3}
          textAlignVertical="top"
          value={notes}
          onChangeText={setNotes}
        />

        {/* Buttons */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Request</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Hamburger menu/ Navigation  */}
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
  pageTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'center',
    marginVertical: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFD1DC',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  inputReadOnly: {
    backgroundColor: '#FFD1DC',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  readOnlyText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  multilineInput: {
    height: 80,
  },
  backButton: {
    backgroundColor: '#9CBBDC',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#382B5F',
    fontWeight: 'bold',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#584C77',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  modalContainer: { flex: 1, backgroundColor: '#9CBBDC' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 },
  modalLogoImage: { width: 60, height: 45 },
  closeIcon: { fontSize: 28, color: '#FFFFFF', fontWeight: '300' },
  modalContent: { flex: 1, alignItems: 'center', paddingTop: 40 },
  menuHeading: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 30, letterSpacing: 1 },
  menuItem: { paddingVertical: 12 },
  menuText: { fontSize: 20, fontWeight: '600', color: '#FFFFFF' },
});