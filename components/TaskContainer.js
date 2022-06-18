import React, { useState } from "react";
import {
    Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./Task";

const TaskContainer = () => {

    const [task, setTask] = useState();
    const [newTask, setNewTask] = useState([]);

    const addTask = () => {
        Keyboard.dismiss()
        setNewTask([...newTask, task])
        setTask("")
    }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Tasks</Text>

        <View style={styles.lists}>
          {newTask.map((item, index) => {
            return (
                <Task key={index} text={item} index={index} newTask={newTask} setNewTask={setNewTask} />
            )
          })}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.keyboard}>
        <TextInput
          style={styles.input}
          placeholder="Write Your Task"
          value={task}
          onChangeText={text => setTask(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => addTask()}>
          <View style={styles.addBtn}>
            <Text style={styles.textBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F1F7F9",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  lists: {
    marginTop: 20,
  },
  keyboard: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  addBtn: {
    width: 50,
    height: 50,
    backgroundColor: "#64C1F7",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textBtn: {
    fontSize: 27,
    fontWeight: "400",
    color: "#fff",
  },
});

export default TaskContainer;
