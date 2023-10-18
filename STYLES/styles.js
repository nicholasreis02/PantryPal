// FJ Tria
// Pantry Pal
// Reusable stylesheet for the front-end

import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../CONSTANTS/theme";

const containerStyle = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: COLORS.lightWhite,
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.smokeBlack,
    },
});

const titleStyle = StyleSheet.create({
    title: {
        fontFamily: FONT.fancy,
        fontSize: SIZES.xLarge,
        color: COLORS.smokeBlack,
    },
});

const textStyle = StyleSheet.create({
    text: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.smokeBlack,
    },
})
    
const gridStyle = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 100,
    },
});
  
const centeredView = StyleSheet.create({
    /* Modal styles */
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});

const modalView = StyleSheet.create({
    modalView: {
        width: "90%",
        height: "70%",
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});

const buttonClose = StyleSheet.create({
    buttonClose: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const buttonOpen = StyleSheet.create({
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
});
    
const modalText = StyleSheet.create({
    modalText: {
        margin: 15,
        textAlign: 'center',
    },
});

export {containerStyle, titleStyle, textStyle, gridStyle};