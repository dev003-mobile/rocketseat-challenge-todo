import { styles } from "./styles"
import { View, Text } from "react-native"

type Task = "PRIMARY" | "SECONDARY"

interface Props {
   type?: Task
   text: string
   counter?: number
}

export function InfoTask({ type = "PRIMARY", text, counter = 0 } : Props) {
   return (
      <View style={styles.container}>
         <Text style={ type === "PRIMARY" ? styles.title : styles.titleSecondary}> { text } </Text>

         <View style={styles.containerCounter}>
            <Text style={styles.counter}> { counter } </Text>
         </View>
      </View>
   )
}