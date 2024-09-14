import { StyleSheet } from "react-native"
import { COLORS } from "../../themes/colors"
import { FONTS } from "../../themes/fonts"

export const styles = StyleSheet.create({
   container: {
      minHeight: 64,
      borderRadius: 8,
      borderWidth: 1,
      marginBottom: 8,
      paddingVertical: 20,
      flexDirection: "row",
      paddingHorizontal: 15.27,
      alignItems: "center",
      borderColor: COLORS.GRAY_400,
      backgroundColor: COLORS.GRAY_500
   },
   containerNotChecked: {
      flex: 0,
      width: 18,
      height: 18,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: COLORS.BLUE,
   },
   containerChecked: {
      flex: 0,
      width: 18,
      height: 18,
      borderWidth: 2,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      borderColor: COLORS.PURPLE_DARK,
      backgroundColor: COLORS.PURPLE_DARK
   },
   imageChecked: {
      marginTop: 2
   },
   containerText: {
      flex: 1,
      paddingHorizontal: 8,
   },
   textNotChecked: {
      color: COLORS.GRAY_100,
      textAlign: "left",
      fontSize: FONTS.SIZE.MEDIUM,
   },
   textChecked: {
      flex: 0,
      textAlign: "left",
      color: COLORS.GRAY_300,
      fontSize: FONTS.SIZE.MEDIUM,
      textDecorationLine: "line-through",
      textDecorationColor: COLORS.GRAY_300,
   },
   imageTrash: {
      flex: 0
   }
})