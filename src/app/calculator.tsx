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

interface ServiceItem {
  id: string;
  name: string;
  price: number;
}

// Structure of the course data
const SERVICES: ServiceItem[] = [
  { id: '1', name: 'Obedience Training', price: 1500 },
  { id: '2', name: 'Pet Grooming', price: 1500 },
  { id: '3', name: 'Animal Behaviour', price: 1500 },
  { id: '4', name: 'Pet Business Management', price: 1500 },
  { id: '5', name: 'Pet First Aid', price: 750 },
  { id: '6', name: 'Basic Dog Walking', price: 750 },
  { id: '7', name: 'Puppy Care', price: 750 },
];

export default function CalculatorScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);  // It trackes the selected course ID of the user
  
  // Calculated values are passed on to the next page using query params
  const handleRequestQuote = () => {
  const selectedCourseNames = SERVICES
    .filter((item) => selectedIds.includes(item.id))
    .map((item) => item.name)
    .join(', ');

    router.push({
    pathname: '/enquire',
    params: {
      services: selectedCourseNames || 'None',
      total: finalTotal.toFixed(2),
    },
  } as any);
};

  // Toggle section of the selected course
  const toggleService = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleClear = () => setSelectedIds([]);

  // Calculations for the total
  const totalCourses = selectedIds.length;
  const subtotal = SERVICES.reduce((sum, item) => {
    return selectedIds.includes(item.id) ? sum + item.price : sum;
  }, 0);

  // Logic for the discount tier
  let discountPercent = 0;
  if (totalCourses === 2) discountPercent = 5;
  else if (totalCourses === 3) discountPercent = 10;
  else if (totalCourses >= 4) discountPercent = 15;

  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = subtotal - discountAmount;

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
        <Text style={styles.pageTitle}>Select Services</Text>

        {/* Services selection box */}
        <View style={styles.servicesCard}>
          {SERVICES.map((item) => {
            const isSelected = selectedIds.includes(item.id);
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.serviceRow}
                onPress={() => toggleService(item.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.serviceText}>
                  {item.name} - R{item.price}
                </Text>
                <View style={[styles.checkbox, isSelected && styles.checkboxSelected]} />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Discount tiers */}
        <View style={styles.discountCard}>
          <Text style={styles.discountTitle}>Discount Tiers:</Text>
          <Text style={styles.discountText}>• 1 Course: 0% Discount</Text>
          <Text style={styles.discountText}>• 2 Courses: 5% Discount</Text>
          <Text style={styles.discountText}>• 3 Courses: 10% Discount</Text>
          <Text style={styles.discountText}>• 4+ Courses: 15% Discount</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.purpleButton} onPress={handleClear}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.purpleButton} onPress={handleRequestQuote}>
            <Text style={styles.buttonText}>Request Quote</Text>
          </TouchableOpacity>
        </View>

        {/* Calculation Summary Box */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>Total Courses: {totalCourses}</Text>
          <Text style={styles.summaryText}>Subtotal: R{subtotal.toFixed(2)}</Text>
          <Text style={styles.summaryText}>Discount Tier: {discountPercent}%</Text>
          <Text style={styles.divider}>--------------------------------------------</Text>
          <Text style={styles.finalTotalText}>Final Total: R{finalTotal.toFixed(2)}</Text>
        </View>
      </ScrollView>

      {/* Hamburger Navigation Modal */}
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
              onPress={() => setMenuVisible(false)}
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 30 },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'center',
    marginVertical: 18,
  },
  servicesCard: {
    backgroundColor: '#FFD1DC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  serviceText: { fontSize: 14, fontWeight: '600', color: '#111' },
  checkbox: {
    width: 22,
    height: 22,
    backgroundColor: '#FFF',
    borderRadius: 3,
  },
  checkboxSelected: {
    backgroundColor: '#584C77',
  },
  discountCard: {
    backgroundColor: '#9CBBDC',
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
  },
  discountTitle: { fontSize: 14, fontWeight: 'bold', color: '#000', marginBottom: 4 },
  discountText: { fontSize: 13, color: '#111', lineHeight: 20 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  purpleButton: {
    backgroundColor: '#584C77',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.47,
    alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  summaryCard: {
    backgroundColor: '#FFD1DC',
    borderRadius: 8,
    padding: 16,
  },
  summaryText: { fontSize: 14, fontWeight: '600', color: '#000', marginBottom: 4 },
  divider: { color: '#000', marginVertical: 4 },
  finalTotalText: { fontSize: 15, fontWeight: 'bold', color: '#000' },
  modalContainer: { flex: 1, backgroundColor: '#9CBBDC' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 },
  modalLogoImage: { width: 60, height: 45 },
  closeIcon: { fontSize: 28, color: '#FFFFFF', fontWeight: '300' },
  modalContent: { flex: 1, alignItems: 'center', paddingTop: 40 },
  menuHeading: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 30, letterSpacing: 1 },
  menuItem: { paddingVertical: 12 },
  menuText: { fontSize: 20, fontWeight: '600', color: '#FFFFFF' },
});