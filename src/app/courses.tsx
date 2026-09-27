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

export default function CoursesScreen() {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  // Data of the courses
  const courseList = [
    {
      id: '1',
      title: 'Canine Obedience Training',
      price: 'R1500',
      duration: '6 Months',
      image: require('../../assets/images/tabIcons/Obedience_Training.jpg'),
    },
    {
      id: '2',
      title: 'Pet Grooming',
      price: 'R1500',
      duration: '6 Months',
      image: require('../../assets/images/tabIcons/Pet_Grooming.jpg'),
    },
    {
      id: '3',
      title: 'Animal Behaviour',
      price: 'R1500',
      duration: '6 Months',
      image: require('../../assets/images/tabIcons/Animal_Behaviour.jpg'),
    },
    {
      id: '4',
      title: 'Pet Business Management',
      price: 'R1500',
      duration: '6 Months',
      image: require('../../assets/images/tabIcons/Pet_Business.jpg'),
    },
    {
      id: '5',
      title: 'Pet First Aid',
      price: 'R750',
      duration: '6 Weeks',
      image: require('../../assets/images/tabIcons/Pet_FirstAid.jpg'),
    },
    {
      id: '6',
      title: 'Basic Dog Walking',
      price: 'R750',
      duration: '6 Weeks',
      image: require('../../assets/images/tabIcons/Dog_Walking.jpg'),
    },
    {
      id: '7',
      title: 'Puppy Care',
      price: 'R750',
      duration: '6 Weeks',
      image: require('../../assets/images/tabIcons/Puppy_Care.jpg'),
    },
  ];

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
        <Text style={styles.pageTitle}>Courses</Text>

        {/* The list of course cards  */}
        {courseList.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <View style={styles.cardDetails}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseInfo}>{course.price}</Text>
              <Text style={styles.courseInfo}>{course.duration}</Text>
              
              <TouchableOpacity style={styles.pinkButton} onPress={() => router.push(`/course-details/${course.id}` as any)}>
                <Text style={styles.pinkButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>

            <Image source={course.image} style={styles.courseImage} />
          </View>
        ))}
      </ScrollView>

      {/* Hamburger menu / Navigation */}
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

            <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push('/calculator' as any); }}>
              <Text style={styles.menuText}>Fee Calculator</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => { setMenuVisible(false); router.push('/enquire' as any); }}>
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
  scrollContent: { paddingHorizontal: 20, paddingBottom: 20 },
  pageTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#382B5F',
    textAlign: 'center',
    marginVertical: 20,
  },
  courseCard: {
    backgroundColor: '#9CBBDC',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetails: { flex: 1, paddingRight: 10 },
  courseTitle: { fontSize: 18, color: '#000', marginBottom: 4 },
  courseInfo: { fontSize: 15,  color: '#111', marginBottom: 2 },
  pinkButton: {
    backgroundColor: '#FFD1DC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  pinkButtonText: { color: '#000', fontWeight: 'bold', fontSize: 13 },
  courseImage: { width: 85, height: 85, borderRadius: 10 },
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