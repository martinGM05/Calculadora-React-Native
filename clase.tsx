import React from "react";
import { StyleSheet, View } from "react-native";

const Clase = () => {
    return (
        <View style={estilos.contenedor}>
            {/* <Text style={[estilos.prueba, {color : 'white'}]}>Hola desde React Native</Text> */}
            <View style={[estilos.elemento, { backgroundColor: 'yellow' }]}></View>
            <View style={[estilos.elemento, { backgroundColor: 'red' }]}></View>
            <View style={[estilos.elemento, { backgroundColor: 'purple' }]}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    prueba: {
        fontSize: 30,
        backgroundColor: 'red'
    },

    contenedor: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    elemento: {
        width: 100,
        height: 100
    }
});
export default Clase;