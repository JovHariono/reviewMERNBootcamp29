import { Button, Text, View } from "react-native";

const ScreenHome = ({ navigation, route }) => {
    const toAbout = () => {
        navigation.navigate("ScreenAbout", {nama: "Cynthia"})
    }

    return ( 
        <View>
            <Text>Home Screen</Text>
            <Button title="About me" onPress={toAbout}/>
        </View>
     );
}
 
export default ScreenHome;