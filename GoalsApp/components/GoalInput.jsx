import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image
} from "react-native";

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.modalVis} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Type in your goal.."
          placeholderTextColor={"#120438"}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#f31282"}/>
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={"#5e0acc"}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 16,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});
