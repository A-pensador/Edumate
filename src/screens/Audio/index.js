import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Audio extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Audio</Text>
            </View>
        );
    }
}
export default Audio;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});