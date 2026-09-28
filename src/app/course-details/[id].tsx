import { useLocalSearchParams, useRouter } from 'expo-router';
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

// Data of thr courses
const COURSES_DATA: Record<
  string,
  { title: string; price: string; duration: string; overview: string; image: any }
> = {
  '1': {
    title: 'Canine Obedience Training',
    price: 'Price: R1500',
    duration: 'Duration: 6 Months',
    overview: 'Learn essential commands and behavioural training techniques.',
    image: require('../../../assets/images/tabIcons/Obedience_Training.jpg'),
  },
  '2': {
    title: 'Pet Grooming',
    price: 'Price: R1500',
    duration: 'Duration: 6 Months',
    overview: 'Learn how to provide grooming skills for domestic pets.',
    image: require('../../../assets/images/tabIcons/Pet_Grooming.jpg'),
  },
  '3': {
    title: 'Animal Behaviour',
    price: 'Price: R1500',
    duration: 'Duration: 6 Months',
    overview: 'Learn to understand common pet behaviours and improve communication skills.',
    image: require('../../../assets/images/tabIcons/Animal_Behaviour.jpg'),
  },
  '4': {
    title: 'Pet Business Management',
    price: 'Price: R1500',
    duration: 'Duration: 6 Months',
    overview: 'Learn how master the essentials of running a successful pet care business.',
    image: require('../../../assets/images/tabIcons/Pet_Business.jpg'),
  },
  '5': {
    title: 'Pet First Aid',
    price: 'Price: R750',
    duration: 'Duration: 6 Weeks',
    overview: 'Learn vital emergency response techniques for your pets.',
    image: require('../../../assets/images/tabIcons/Pet_FirstAid.jpg'),
  },
  '6': {
    title: 'Basic Dog Walking',
    price: 'Price: R750',
    duration: 'Duration: 6 Weeks',
    overview: 'Learn how understand leash handling, safety protocols, and body language for walks.',
    image: require('../../../assets/images/tabIcons/Dog_Walking.jpg'),
  },
  '7': {
    title: 'Puppy Care',
    price: 'Price: R750',
    duration: 'Duration: 6 Weeks',
    overview: 'Learn how to provide new puppy owners with essential care knowledge.',
    image: require('../../../assets/images/tabIcons/Puppy_Care.jpg'),
  }
};

export default function CourseDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [menuVisible, setMenuVisible] = useState(false);

  // Fallback to id 1 if id is missing or invalid
  const course = COURSES_DATA[id || '1'] || COURSES_DATA['1'];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Navigation bar */}
      <View style={styles.topNav}>
        <Image
          source={require('../../../assets/images/tabIcons/Logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={styles.hamburgerIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        {/* Banner image */}
        <Image source={course.image} style={styles.bannerImage} />

        {/* Information of the course */}
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseSubInfo}>{course.price}</Text>
        <Text style={styles.courseSubInfo}>{course.duration}</Text>

        {/* Course overview section */}
        <Text style={styles.overviewHeading}>Course Overview</Text>
        <Text style={styles.overviewText}>{course.overview}</Text>

        {/* Back button */}
        <TouchableOpacity 
          style={styles.purpleButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Back to Courses</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Hamburger menu / Navigation */}
      <Modal visible={menuVisible} animationType="slide" transparent={false}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Image
              source={require('../../../assets/images/tabIcons/Logo.png')}
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
              onPress={() => { setMenuVisible(false); router.push('/courses' as any); }}
            >
              <Text style={styles.menuText}>All Courses</Text>
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
  scrollContent: { alignItems: 'center', paddingHorizontal: 20, paddingBottom: 40 },
  bannerImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginVertical: 20,
  },
  courseTitle: {
    fontSize: 22,
    
    color: '#000',
    textAlign: 'center',
    marginBottom: 6,
  },
  courseSubInfo: {
    fontSize: 18,
    
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
  },
  overviewHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 10,
  },
  overviewText: {
    fontSize: 16,
    color: '#111',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24,
    marginBottom: 30,
  },
  purpleButton: {
    backgroundColor: '#584C77',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  /* Modal Styles */
  modalContainer: { flex: 1, backgroundColor: '#9CBBDC' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 },
  modalLogoImage: { width: 60, height: 45 },
  closeIcon: { fontSize: 28, color: '#FFFFFF', fontWeight: '300' },
  modalContent: { flex: 1, alignItems: 'center', paddingTop: 40 },
  menuHeading: { fontSize: 18, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 30, letterSpacing: 1 },
  menuItem: { paddingVertical: 12 },
  menuText: { fontSize: 20, fontWeight: '600', color: '#FFFFFF' },
});