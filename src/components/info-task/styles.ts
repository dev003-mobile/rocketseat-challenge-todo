import { StyleSheet } from "react-native"
import { FONTS } from "../../themes/fonts"
import { COLORS } from "../../themes/colors"

export const styles = StyleSheet.create({
   container: {
      gap: 8,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
   },
   title: {
      color: COLORS.BLUE,
      fontSize: FONTS.SIZE.MEDIUM,
      fontWeight: "bold",
   },
   titleSecondary: {
      color: COLORS.PURPLE,
      fontSize: FONTS.SIZE.MEDIUM,
      fontWeight: "bold",
   },
   containerCounter: {
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 999,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.GRAY_400
   },
   counter: {
      fontWeight: "bold",
      color: COLORS.GRAY_200,
      fontSize: FONTS.SIZE.SMALL,
   }
})