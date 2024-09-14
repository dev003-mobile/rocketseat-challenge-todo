import { styles } from "./styles"
import { View, Image, Text } from "react-native";

export function EmptyTask() {
   return (
      <View style={styles.container}>
         <View style={styles.containerLineTask}></View>

         <View style={styles.containerImage}>
            <Image source={require("../home-screen/../../../assets/Clipboard.png")}/>
         </View>

         <View style={styles.containerDescription}>
            <Text style={styles.firstDescription}> Você ainda não tem tarefas cadastradas </Text>
            <Text style={styles.secondDescription}> Crie tarefas e organize seus itens a fazer </Text>
         </View>
      </View>
   )
}