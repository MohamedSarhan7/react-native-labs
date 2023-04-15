import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity, Keyboard, FlatList,
    Button,
    Alert,

} from 'react-native';

import { FontAwesome, Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useEffect } from "react";
import Task from '../Task/Task'
import { myStyles } from '../style'

function Home({ navigation }) {
    // let myTodos = [];

    const [task, setTask] = useState({
        id: "",
        title: "",
        desc: "",
        isCompleted: false
    });

    const [filter, setfilter] = useState({
        all: true, active: false, done: false

    });

    const [todoItems, setTodoItems] = useState([]);

    const getData = async (cb) => {
        try {
            // await AsyncStorage.clear()
            const temp = await AsyncStorage.getItem("@Todos");
            if (!temp) {
                await AsyncStorage.setItem('@Todos', JSON.stringify(todoItems))
                return [];
            } else {

                return JSON.parse(temp);
                // console.log(myTodos,"45")
                // if (cb) {
                //     cb()
                // } else {
                //     setTodoItems[myTodos];

                // }

            }
        } catch (error) {
            console.log(error, "error in getData")
        }
    }

    const storeData = async (newdata) => {
        try {
            await AsyncStorage.setItem('@Todos', JSON.stringify(newdata))
            const res2 = await AsyncStorage.getItem('@Todos')
            return JSON.parse(res2);
        } catch (error) {
            console.log(error, "error in Store")
        }
    }

    useEffect(() => {
        // getData()
        getData().then((data) => {

            setTodoItems(data);
        }).catch((error) => {
            console.log(error, "error in useEffect");
        })
    }, [])


    const handelAddTask = () => {
        getData().then((data) => {
            storeData([task, ...data]).then(() => {

                setTodoItems([task, ...data]);
                setTask({});
            })

        })

        Keyboard.dismiss();
    }


    const setDone = (id) => {
        getData().then((data) => {
            data.map((item) => {
                if (item.id === id)
                    item.isCompleted = (!item.isCompleted)
            })
            return data;

        }).then((data) => {
            storeData(data).then(() => {
                console.log("data stored");
                setfilter({
                    all: true, active: false, done: false
                })
                setTodoItems(data);
            })

        })


    }
    return (

        // <View style={styles.parent} >

        <View style={myStyles.container}>
            {/* form */}
            <TextInput style={myStyles.input}
                onChangeText={text =>
                    setTask({ ...task, id: Math.ceil(Math.random() * 1000).toString(), title: text })}
                placeholder='ToDo Title'
                value={task.title} />

            <TextInput style={myStyles.input}
                onChangeText={text =>
                    setTask({ ...task, desc: text })}
                placeholder='ToDo Description' 
                value={task.desc}/>

            <TouchableOpacity style={myStyles.submitBtn}
                onPress={() => {
                    if (task.title && task.desc) {
                        Alert.alert(`Added new Todo: ${task.title}`);
                        handelAddTask()

                    }
                }} >


                <Text style={myStyles.text}>ADD</Text>
            </TouchableOpacity>

            {/* filter */}


            <View style={myStyles.filterContainer}>

                <TouchableOpacity style={filter.all == true ? myStyles.activeFilterBtn : myStyles.filterBtn} onPress={() => {
                    getData().then((data) => {
                        setTodoItems(data);
                    });
                    // getData()
                    setfilter({
                        all: true, active: false, done: false

                    })
                }}>
                    <Text style={filter.all == true ? myStyles.activeFilterText : myStyles.filterText}>All</Text>
                </TouchableOpacity>


                <TouchableOpacity style={filter.done == true ? myStyles.activeFilterBtn : myStyles.filterBtn} onPress={() => {
                    getData().then((data) => {

                        setTodoItems(data.filter(item => item.isCompleted))
                    })
                    setfilter({
                        all: false, active: false, done: true

                    })
                }}>
                    <Text style={filter.done == true ? myStyles.activeFilterText : myStyles.filterText}>Done</Text>
                </TouchableOpacity>

                <TouchableOpacity style={filter.active == true ? myStyles.activeFilterBtn : myStyles.filterBtn} onPress={() => {

                    getData().then((data) => {
                        setTodoItems(data.filter(item => !item.isCompleted ));
                    })

                    setfilter({
                        all: false, active: true, done: false

                    })

                }}>
                    <Text style={filter.active == true ? myStyles.activeFilterText : myStyles.filterText}>Active</Text>
                </TouchableOpacity>

            </View>

            {/* sparator-line */}

            <View style={myStyles.dividerLine}></View>

            <View style={myStyles.todosContainer}>
                <View style={myStyles.todoWrapper}>

                    <FlatList 
                        data={todoItems}
                        renderItem={(item) => <Task style={myStyles.todo}
                            key={item.id}
                            task={item}
                            isDone={setDone}
                        />}
                        keyExtractor={(item) => item.id}

                    />
                </View>

            </View>
        </View>
    );
}



export default Home