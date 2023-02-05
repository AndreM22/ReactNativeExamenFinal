import { NavigationContainer } from "@react-navigation/native"
import React, { useEffect, useState } from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from "../screens/homeScreen";
import { MateriaScreen } from "../screens/MateriaScreen";
import { NuevaMateriaScreen } from "../screens/nuevaMateriaScreen";
import { MateriasContext } from "../context/materiasContext";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { MateriaInterface } from "../interfaces/MateriaInterface";

export const StackMaterias = () => {

    const Stack = createStackNavigator();

    const [materiasList, setMateriasList] = useState<MateriaInterface[]>([]);

    useEffect(() => {
        leerDatos();
    }, []);


    const leerDatos = async () => {
        const querySnapshot = await getDocs(collection(db, "materias"));
        console.log(querySnapshot)
        console.log(querySnapshot.docs[0].data())

        const materiasList2: MateriaInterface[] = []
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
        // });
        querySnapshot.forEach((doc) => {
            const obj: MateriaInterface = {
                nombre: "",
                docente: "",
                horario: "",
                modalidad: "",
                creditos: 0

            }
            obj.nombre = doc.data().nombre
            obj.docente = doc.data().docente
            obj.horario = doc.data().horario
            obj.modalidad = doc.data().modalidad
            obj.creditos = doc.data().creditos

            materiasList2.push(obj);
        })
        console.log("Lista");
        setMateriasList(materiasList2)
        console.log(materiasList)
    }


    

    return (
        <MateriasContext.Provider value={materiasList}>
            < Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="HomeScreen" options={{ title: "Home" }} component={HomeScreen} />
                <Stack.Screen name="MateriaScreen" options={{ title: "Materia" }} component={MateriaScreen} />
                <Stack.Screen name="NuevaMateriaScreen" options={{ title: "Nueva materia" }} component={NuevaMateriaScreen} />
            </Stack.Navigator >
        </MateriasContext.Provider>
    );
}