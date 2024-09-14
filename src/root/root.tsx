import { StatusBar } from "expo-status-bar"
import { COLORS } from "../themes/colors"
import { HomeScreen } from "../screens/home-screen"

export function Root() {
   return (
      <>
         <StatusBar
            animated
            translucent
            style="light"
            backgroundColor={COLORS.TRANSPARENT}
         />
         <HomeScreen />
      </>
   )
}