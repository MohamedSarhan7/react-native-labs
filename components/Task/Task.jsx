import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React from "react";
import { FontAwesome5, Ionicons, Entypo, AntDesign } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native';
import { myStyles } from '../style';

function Task({ navigation, route, task, isDone }) {
    const mynavigation = useNavigation()
    const mytask = task.item
    return (
        <View style={styles.item}  >

            <View >
                <TouchableOpacity
                    onPress={() => {
                        isDone(mytask.id);
                        console.log(mytask.id);

                    }}
                    style={styles.itemLeft}
                >
                    <View style={styles.done}>
                        {mytask.isCompleted === true ?
                            <AntDesign name="checkcircle" size={24} color="#71d0f0" />
                            :
                            <AntDesign name="checkcircleo" size={24} color="#71d0f0" />
                        }
                    </View>

                    <Text style={mytask.isCompleted === true ? myStyles.doneTodo : styles.itemText}  >{mytask.title}</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={(task) =>
                mynavigation.navigate('TaskDetails', { obj: mytask })}>
                {/* <Ionicons name="arrow-forward-circle-sharp" size={28} color="#71d0f0" /> */}
                {/* <Entypo name="chevron-thin-right" size={28} color="#71d0f0" /> */}
                <FontAwesome5 name="chevron-right" size={20} color="#71d0f0" />
            </TouchableOpacity>
        </View>
    );
};
export default Task
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#edf8fa',
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
    done: {
        // height: 24,
        // width: 24,
        // backgroundColor: '#55bcf6',
        // opacity: .4,
        // borderRadius: 5,
        marginRight: 30
    },
    itemText: {
        // fontWeight: "200",
        // width: "100%",
    },
    circular: {
        // width: 12,
        // height: 12,
        // borderRadius: 5,
        // backgroundColor:"#55bcf6"
        // borderColor: "#55bcf6",
        // borderWidth: 2,
    }
});