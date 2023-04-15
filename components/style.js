import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingBottom: 2,
        paddingVertical: 20

    },
    input: {
        borderWidth: 1,
        borderColor: "#aeaeae",
        width: "90%",
        marginVertical: 10,
        height: 50,
        padding: 10,
        borderRadius: 5,
    },
    submitBtn: {
        marginTop: 10,
        width: '40%',
        backgroundColor: "#acd7e6",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: "white",
        fontSize: 18,
        textTransform: "uppercase",
    },
    dividerLine: {
        height: 1,
        width: "90%",
        backgroundColor: "#aeaeae",
        marginVertical: 15,
    },
    filterContainer: {
        paddingVertical: 25,
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
    },
    filterBtn: {
        width: "30%",
        backgroundColor: "#ffffff",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#71d0f0",
    },
    filterText: {
        color: "#71d0f0",
        fontSize: 15,
    },
    activeFilterBtn: {
        width: "30%",
        backgroundColor: "#71d0f0",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#71d0f0",
    },
    activeFilterText: {
        color: "white",
        fontSize: 15,
    },
    todosContainer: {
        marginTop: 10,
        width: '100%',

    },
    doneTodo: {
        textDecorationLine: "line-through",
        // fontWeight:"0"
        color:'gray'
    }, todoWrapper: {
        width: '100%',


    },
    todo: {
        width: '100%',
        padding:10,
        borderWidth: 1,
        borderColor: '#efefef'
    },
});
