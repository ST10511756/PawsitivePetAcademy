import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function MenuModal({ visible, onClose }: MenuModalProps) {
  const menuItems = [
    'Home',
    'About Us',
    'All Courses',
    'Fee Calculator',
    'Contact Us',
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <SafeAreaView style={styles.container}>
        {/* Navigation bar */}
        <View style={styles.header}>
          <Text style={styles.logoText}>🐾 Pawsitive</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Content */}
        <View style={styles.content}>
          <Text style={styles.title}>NAVIGATION MENU</Text>

          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={onClose}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CBBDC', // Light blue background matching your mock
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#382B5F',
  },
  closeButton: {
    padding: 10,
  },
  closeText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '300',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  title: {
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