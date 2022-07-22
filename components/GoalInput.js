import { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
const GoalInput = (props) => {
  const [goalText, SetGoalText] = useState("");
  const handleInput = (text) => {
    SetGoalText(text);
  };
  const addGoalToArray = () => {
    // console.log(props);
    props.addGoal(goalText);
    SetGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textContainer}>
        <Image
          style={styles.imgContainer}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={handleInput}
          style={styles.textInput}
          placeholder="Enter your goals!"
          value={goalText}
        ></TextInput>
        <View style={styles.btnContainer}>
          <View style={styles.btn}>
            <Button title="Add goal" onPress={addGoalToArray} />
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" color="red" onPress={props.closeModel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  imgContainer: {
    width: 200,
    height: 200,
    marginTop: -90,
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "black",
    backgroundColor: "#FDF9F9",
    width: "100%",
    borderWidth: 1,
    padding: 16,
  },
  btnContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  btn: {
    width: 100,
    marginHorizontal: 8,
  },
});
export default GoalInput;
