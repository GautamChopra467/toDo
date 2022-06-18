import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

const Task = (props) => {
  const deleteTask = (index) => {
    Alert.alert(
      "Delete Task",
      "Do you want to delete this Task",
      [
        {
          text: "Yes",
          onPress: () => {
            let tasks = [...props.newTask];
            tasks.splice(index, 1);
            props.setNewTask(tasks);
          },
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.done}></View>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(props.index)}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/delete.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  done: {
    width: 24,
    height: 24,
    backgroundColor: "#9ED8FA",
    borderRadius: 5,
    marginRight: 13,
  },
  taskText: {
    maxWidth: "80%",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default Task;
