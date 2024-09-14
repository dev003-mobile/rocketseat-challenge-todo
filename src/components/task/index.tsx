import { styles } from "./styles";
import { TouchableOpacity, View, Image, Text } from "react-native";

interface Props {
   checked?: boolean
   text: string,
   handleTapCheck?: () => void
   handleTapRemove?: () => void
}

export function Task({ checked = false, text, handleTapCheck, handleTapRemove} : Props) {
   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={handleTapCheck}>
            <View style={checked ? styles.containerChecked : styles.containerNotChecked}>
               { checked &&
                  <Image
                     style={styles.imageChecked}
                     source={require("../home-screen/../../../assets/checked.png")}
                  />
               }
            </View>
         </TouchableOpacity>

         <View style={styles.containerText}>
            <Text style={checked ? styles.textChecked : styles.textNotChecked}> { text } </Text>
         </View>

         <TouchableOpacity onPress={handleTapRemove}>
            <Image
               style={styles.imageTrash}
               source={require("../home-screen/../../../assets/Layer 2.png")}
            />
         </TouchableOpacity>
      </View>
   )
}