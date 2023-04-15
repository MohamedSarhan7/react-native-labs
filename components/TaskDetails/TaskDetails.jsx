import { Alert,StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React from "react";
import { myStyles } from '../style'
import { Colors } from 'react-native/Libraries/NewAppScreen';

function TaskDetails({ navigation, route }) {
    // console.log(route.params.obj)
    let task = route.params.obj;
    // console.log(task)
    return (
        <View style={styles.card}>
            <Text style={{
                color: "#000", fontSize: 18,
                textTransform: "uppercase",
                paddingHorizontal: 10,
                paddingTop: 10,
                paddingBottom: 30,
            }}>Title:  {task.title}
            </Text>
            <Text>{task.desc}</Text>

            {/* <TouchableOpacity style={{
                marginTop: 50,
                width: '100%',
                height:50,
                backgroundColor: "#292e30",
                justifyContent: "center",
                alignItems: "center",
                // padding: 20,
                borderRadius: 10,
}}
                onPress={() => {
                    Alert.alert(`Done`);
                }}
            >
                <Text style={myStyles.text}>Mark as Done!</Text>
            </TouchableOpacity> */}

        </View>
    );
};
export default TaskDetails

const styles = StyleSheet.create({
    card: {
        margin: 20,
        padding: 20,
        borderColor: '#eb4634',
        backgroundColor: "#cfe4e8",
        borderRadius: 6,

    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",

    },
    square: {
        height: 24,
        width: 24,
        backgroundColor: '#55bcf6',
        opacity: .4,
        borderRadius: 5,
        marginRight: 30
    },
    itemText: {
        maxWidth: "70%",
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        // backgroundColor:"#55bcf6"
        borderColor: "#55bcf6",
        borderWidth: 2,
    }
});