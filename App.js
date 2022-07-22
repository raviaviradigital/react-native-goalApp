import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View, Text } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, SetCourseGoals] = useState([]);
  const [modalVisible, SetModalVisible] = useState(false);

  const handleBtnClick = (goalText) => {
    SetCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: goalText },
    ]);
    SetModalVisible(false);
  };

  const handleDeleteGoalItem = (id) => {
    SetCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const handleModel = () => {
    SetModalVisible(true);
  };

  const handleCloseModel = () => {
    SetModalVisible(false);
  };
  return (
    <>
      <StatusBar style={styles.statusBar} />
      <View style={styles.mainContainer}>
        <Button onPress={handleModel} title="Add Goal" color="green" />

        <View style={styles.appContainer}>
          <GoalInput
            visible={modalVisible}
            addGoal={handleBtnClick}
            closeModel={handleCloseModel}
          />
          <View style={styles.goalContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    deleteGoalItem={handleDeleteGoalItem}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            ></FlatList>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 50,
    justifyContent: "center",
    flex: 1,
    paddingHorizontal: 10,
  },
  appContainer: {
    padding: 0,
    alignContent: "center",
    flex: 1,
    paddingHorizontal: 2,
  },
  goalContainer: {
    flex: 3,
  },
});
