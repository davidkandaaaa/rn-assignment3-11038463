import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

const taskCategories = [
  { id: '1', title: 'Exercise', taskCount: 12, icon: require('./assets/exercise.png') },
  { id: '2', title: 'Study', taskCount: 12, icon: require('./assets/study.png') },
  { id: '3', title: 'Code', taskCount: 8, icon: require('./assets/code.png') },
  { id: '4', title: 'Cook', taskCount: 5, icon: require('./assets/cook.png') },
  { id: '5', title: 'Read', taskCount: 7, icon: require('./assets/read.png') },
  { id: '6', title: 'Shop', taskCount: 4, icon: require('./assets/shop.png') },
  { id: '7', title: 'Clean', taskCount: 6, icon: require('./assets/clean.png') },
  { id: '8', title: 'Meditate', taskCount: 3, icon: require('./assets/meditate.png') },
];

const currentTasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'Read Book',
  'Grocery Shopping',
  'Yoga',
  'Write Blog Post',
  'Learn Piano',
  'Cook Dinner',
  'Clean Room',
  'Meditate',
  'Watch Tutorial',
  'Respond to Emails',
  'Create Presentation',
  'Plan Vacation',
];

const Category = ({ item }) => (
  <View style={styles.categoryContainer}>
    <Image source={item.icon} style={styles.categoryIcon} />
    <Text>{item.title}</Text>
    <Text>{item.taskCount} Tasks</Text>
  </View>
);

const Task = ({ task }) => (
  <View style={styles.taskContainer}>
    <Text>{task}</Text>
  </View>
);

const App = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.headerWrapper}>
        <View>
          <Text style={styles.welcomeText}>Hello, Devs</Text>
          <Text style={styles.taskOverviewText}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.profileWrapper}>
          <Image source={require('./assets/profile.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterWrapper}>
          <Image source={require('./assets/filter.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.categoriesWrapper}>
        <Text style={styles.sectionHeader}>Categories</Text>
        <FlatList
          data={taskCategories}
          renderItem={({ item }) => <Category item={item} />}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionHeader}>Ongoing Tasks</Text>
        {currentTasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskOverviewText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  profileWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  filterWrapper: {
    marginLeft: 10,
  },
  filterIcon: {
    width: 30,
    height: 30,
  },
  categoriesWrapper: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  categoryContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 15,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  tasksWrapper: {
    marginVertical: 20,
  },
  taskContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 20,
  },
});

export default App;