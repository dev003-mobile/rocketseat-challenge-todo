import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";

export const styles =StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: COLORS.GRAY_600,
   },
   header: {
      flex: 0,
      width: "100%",
      minHeight: 173,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.GRAY_700
   },
   inputForm: {
      gap: 4,
      flex: 0,
      height: 54,
      width: "100%",
      paddingLeft: 24,
      paddingRight: 24,
      marginTop: 145,
      flexDirection: "row",
      position: "absolute"
   },
   input: {
      flex: 1,
      height: "100%",
      borderRadius: 6,
      color: COLORS.WHITE,
      paddingHorizontal: 16,
      fontSize: FONTS.SIZE.LARGE,
      backgroundColor: COLORS.GRAY_500,
   },
   buttonAddTask: {
      width: 52,
      height: "100%",
      borderRadius: 6,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.BLUE_DARK,
   },
   containerInfoTask: {
      flexDirection: "row",
      paddingLeft: 24,
      paddingRight: 24,
      marginTop: 55,
      justifyContent: "space-between",
   },
   containerShowTaks: {
      flex: 1,
      marginTop: 20,
      marginLeft: 24,
      marginRight: 24,
   }
})