// import { InfoTask } from "../../components/info-task";
import { useState } from "react";
import { styles } from "./styles";
import { COLORS } from "../../themes/colors";
import { InfoTask } from "../../components/info-task";
import { View, Image, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from "react-native";
import { Task } from "../../components/task";
import { EmptyTask } from "../../components/empty-task";

interface TaskProps {
   isSelected?: boolean
   text: string
}

export function HomeScreen() {
   const [taskName, setTaskName] = useState<string>("")
   const [taskList, setTaskList] = useState<Array<TaskProps>>([])
   const [taskFinished, setTaskFinished] = useState<number>(0)

   function handleAddTask(task: string) {
      Keyboard.dismiss()

      if (task.length === 0) {
         return Alert.alert(
            "Falha ao adicionar",
            "O campo é obrigatório! Informe o nome de uma tarefa para ser adicionada",
            [
               {
                  text: "OK",
                  style: "default"
               }
            ]
         )
      }

      return Alert.alert(
         "Task adicionada",
         "A task foi adicionada com sucesso. Adicione outras tasks a lista.",
         [
            {
               text: "OK",
               style: "default",
               onPress: () => {
                  const newTask: TaskProps = {
                     isSelected: false,
                     text: task
                  }

                  setTaskList((prevState) => [...prevState, newTask])
                  setTaskName("")
               }
            }
         ]
      )
   }

   function handleTapCheck(id: number, task: TaskProps) {
      const updatedTask: TaskProps = {
         text: task.text,
         isSelected: !(task.isSelected)
      }

      setTaskList((prevState) => prevState.map((task, index) => index === id ? updatedTask : task))
      setTaskFinished((prevState) => updatedTask.isSelected ? prevState + 1 : prevState - 1)
   }

   function handleTapRemove(task: TaskProps) {
      setTaskList((prevState) => prevState.filter((item) => item !== task))
      setTaskFinished((prevState) => task.isSelected ? prevState - 1 : prevState)
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image source={require("../home-screen/../../../assets/Logo.png")}/>
         </View>

         <View style={styles.inputForm}>
            <TextInput
               style={styles.input}
               cursorColor={COLORS.WHITE}
               selectionColor={COLORS.BLUE_DARK}
               placeholder="Adicione uma nova tarefa"
               placeholderTextColor={COLORS.GRAY_300}
               onChangeText={setTaskName}
               value={taskName}
            />

            <TouchableOpacity style={styles.buttonAddTask} onPress={() => handleAddTask(taskName)}>
               <Image source={require("../home-screen/../../../assets/plus.png")}/>
            </TouchableOpacity>
         </View>

         <View style={styles.containerInfoTask}>
            <InfoTask text="Criadas" counter={taskList.length} />
            <InfoTask text="Concluídas" type="SECONDARY" counter={taskFinished}/>
         </View>

         <View style={styles.containerShowTaks}>
            <FlatList
               data={taskList}
               renderItem={(task) => <Task
                  key={task.index}
                  text={task.item.text}
                  checked={task.item.isSelected}
                  handleTapCheck={() => handleTapCheck(task.index, task.item)}
                  handleTapRemove={() => handleTapRemove(task.item)}
               />}
               ListEmptyComponent={() => <EmptyTask />}
            />
         </View>
      </View>
   )
}