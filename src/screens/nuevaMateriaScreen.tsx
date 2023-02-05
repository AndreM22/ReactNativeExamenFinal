import { Button, Input } from '@rneui/themed';
import { useFormik } from 'formik';
import React, { type PropsWithChildren } from 'react';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore/lite';
import { db } from "../services/firebase"
import { v4 as uuidv4 } from 'uuid';
import { Image, StyleSheet, Text, View } from "react-native"
import * as YUP from "yup"
export const NuevaMateriaScreen = (props: any) => {
    const { navigation } = props;

    const initialValues = {
        nombre: "",
        docente: "",
        horario: "",
        modalidad: "",
        creditos: 0
    }

    const registrarMateria = async (nombre: string, docente: string, horario: string, modalidad: string, creditos: number) => {
        try{
            console.log("Agregando a firebase: ",db);
            const id = uuidv4();
            console.log(id);
            await setDoc(doc(db,'/materias',id), {
                nombre:nombre,
                docente:docente,
                horario:horario,
                modalidad:modalidad,
                creditos:creditos,
                id,
            });
        } catch (e) {
            console.log("Error adding document: ",e)
        }
        navigation.goBack();
    }


    const formik = useFormik({
        initialValues: initialValues,
        validationSchema:
            YUP.object({
                nombre: YUP.string()
                    .required("El nombre es requerido"),
                docente: YUP.string()
                    .required("El docente es requerido"),
                horario: YUP.string()
                    .required("El horario es requerido"),
                modalidad: YUP.string()
                    .required("La modalidad es requerida"),
                creditos: YUP.number()
                    .required("Los créditos son requeridos")
            })
        ,
        validateOnChange: false,
        onSubmit: (formValue) => {
            //TODO: Login
            registrarMateria(formValue.nombre,formValue.docente,formValue.horario,formValue.modalidad,formValue.creditos);
            //navigation.navigate("StackMaterias");
        }
    }
    )

    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <Image
                source={require("../assets/logo.png")}
                style={styles.logo} />

            <View style={styles.campos}>
                <Input
                    placeholder='Nombre'
                    onChangeText={(text) => formik.setFieldValue("nombre", text)}
                    errorMessage={formik.errors.nombre}
                />
            </View>

            <View style={styles.campos}>
                <Input
                    placeholder='Docente'
                    onChangeText={(text) => formik.setFieldValue("docente", text)}
                    errorMessage={formik.errors.docente}
                />
            </View>

            <View style={styles.campos}>
                <Input
                    placeholder='Horario'
                    onChangeText={(text) => formik.setFieldValue("horario", text)}
                    errorMessage={formik.errors.horario}
                />
            </View>

            <View style={styles.campos}>
                <Input
                    placeholder="Modalidad"
                    onChangeText={(text) => formik.setFieldValue("modalidad", text)}
                    errorMessage={formik.errors.modalidad}

                />
            </View>

            <View style={styles.campos}>
                <Input
                    placeholder="Creditos"
                    onChangeText={(text) => formik.setFieldValue("creditos", text)}
                    errorMessage={formik.errors.creditos}

                />
            </View>


            <Button
                title="INSCRIBIRSE"
                buttonStyle={{
                    backgroundColor: 'blue',
                    borderWidth: 2,
                    borderColor: 'white',
                    borderRadius: 30,
                }}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold' }}

                onPress={formik.handleSubmit}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    logo: {
        height: 120,
        width: 350,
        marginVertical: 50
    },
    campos: {
        height: 50,
        width: 300,
        marginVertical: 20,
        //backgroundColor: "gray",
        //opacity: 0.2
    }

});