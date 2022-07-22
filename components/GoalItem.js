import { StyleSheet, Text, Pressable, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#000000" }}
        onPress={props.deleteGoalItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#5e0acc",

    margin: 8,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
export default GoalItem;
