import { FontAwesome } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF' }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: isDark ? '#FFFFFF' : '#000000' }]}>
              Welcome to
            </Text>
            <Text style={styles.brandName}>Solo Chops</Text>
          </View>
          <TouchableOpacity style={styles.locationButton}>
            <FontAwesome name="map-marker" size={20} color="#FF6B6B" />
            <Text style={styles.locationText}>Lagos, Nigeria</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
            Featured Items
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {[1, 2, 3].map((item) => (
              <TouchableOpacity key={item} style={styles.featuredItem}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/150' }}
                  style={styles.featuredImage}
                />
                <View style={styles.featuredInfo}>
                  <Text style={styles.featuredName}>Grilled Chicken</Text>
                  <Text style={styles.featuredPrice}>₦2,500</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: isDark ? '#FFFFFF' : '#000000' }]}>
            Categories
          </Text>
          <View style={styles.categoriesGrid}>
            {['Grilled', 'Sides', 'Drinks', 'Desserts'].map((category) => (
              <TouchableOpacity
                key={category}
                style={[styles.categoryItem, { backgroundColor: isDark ? '#333' : '#F5F5F5' }]}>
                <FontAwesome name="cutlery" size={24} color="#FF6B6B" />
                <Text style={[styles.categoryName, { color: isDark ? '#FFFFFF' : '#000000' }]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  greeting: {
    fontSize: 16,
    marginBottom: 4,
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 20,
  },
  locationText: {
    marginLeft: 8,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  featuredScroll: {
    marginHorizontal: -20,
  },
  featuredItem: {
    marginRight: 15,
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  featuredImage: {
    width: '100%',
    height: 150,
  },
  featuredInfo: {
    padding: 10,
  },
  featuredName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  featuredPrice: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
