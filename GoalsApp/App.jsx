import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalVis, setIsModalVis] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = enteredGoalText => {
    setGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    hideModalHandler();
  };

  const hideModalHandler = () => {
    setIsModalVis(false);
  };

  const deleteGoalHandler = id => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  };

  const showModalHandler = () => {
    setIsModalVis(true);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        onPress={showModalHandler}
        title="Add New Goal"
        color={"#5e0acc"}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        modalVis={isModalVis}
        onCancel={hideModalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  goalsContainer: {
    flex: 5
  }
});
