import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        alignItems: "center",
        margin: 10,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 }
    },
    imageStyle: {
        borderRadius: 8,
        width: 108 * 3,
        height: 192 * 2,
        margin: 10,
        resizeMode: 'strech'
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        padding: 0,
        width: '100%',
        alignItems: 'center',
        margin: 10,
        marginTop: 0
    }
})
export default styles;