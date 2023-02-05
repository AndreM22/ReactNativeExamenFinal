import React, { type PropsWithChildren } from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import { FAB } from '@rneui/themed';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { MateriaCard } from '../components/MateriaCard';
import { MateriasContext } from '../context/materiasContext';
export const HomeScreen = (props: any) => {
    const { navigation } = props;
    //console.log(exercisesList);

    // const goToExercise = (exercise:any) => {
    //     navigation.navigate("ExerciseTab", { exercise:exercise})
    // }

    const materiasList = React.useContext(MateriasContext);



    const goToNuevaMateria = () => {
        navigation.navigate("NuevaMateriaScreen");
    }

    return <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>

        <FlatList
            data={materiasList}
            keyExtractor={(exercise, index) => exercise.nombre + index}
            showsVerticalScrollIndicator={false}

            renderItem={({ item }) => <MateriaCard materia={item} navigation={navigation} />}
        />

        <FAB

            icon={
                <Icon name="add-outline" color="black" size={25} />
            }
            color="orange"
            size='large'
            style={styles.add}
            onPress = {goToNuevaMateria}
        />

    </View>
}

const styles = StyleSheet.create({
    titleContainer: {
        width: 250,
        height: 50,
        backgroundColor: "#DC4A00",
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,

    },
    add: {
        position:"absolute",
        right:50,
        bottom:50
    }


});