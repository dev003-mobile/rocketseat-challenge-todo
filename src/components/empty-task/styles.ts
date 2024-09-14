import { StyleSheet } from "react-native"
import { COLORS } from "../../themes/colors"
import { FONTS } from "../../themes/fonts"

export const styles = StyleSheet.create({
   container: {
      width: "100%",
   },
   containerLineTask: {
      height: 1,
      backgroundColor: COLORS.GRAY_400,
   },
   containerImage: {
      marginTop: 48,
      alignItems: "center",
      justifyContent: "center",
   },
   containerDescription: {
      marginTop: 16,
      alignItems: "center",
      justifyContent: "center",
   },
   firstDescription: {
      fontWeight: "bold",
      fontSize: FONTS.SIZE.MEDIUM,
      color: COLORS.GRAY_300
   },
   secondDescription: {
      fontWeight: "300",
      fontSize: FONTS.SIZE.MEDIUM,
      color: COLORS.GRAY_300
   }
})