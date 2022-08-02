import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth, firestore } from "../firebase";
import Escrever from "./Escrever";
import Listar from "./Listar";
import ListarComFiltro from "./ListarComFiltro";
import ListarComFiltroUsuarios from "./ListarComFiltroUsuarios";
import Escrevermapa from "./Escrevermapa";

const Drawer = createDrawerNavigator();

function EscreverScreen({ navigation }) {
  return <Escrever></Escrever>;
}
function EscrevermapaScreen({ navigation }) {
  return <Escrevermapa></Escrevermapa>;
}
function ListarScreen({ navigation }) {
  return <Listar></Listar>;
}

function ListaComFiltroUsuariosScreen({ navigation }) {
  return <ListarComFiltroUsuarios></ListarComFiltroUsuarios>;
}

function ListaComFiltroScreen({ navigation }) {
  return <ListarComFiltro></ListarComFiltro>;
}

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator initialRouteName="Escrever">
      <Drawer.Screen name="Usuario" component={EscreverScreen} />
      <Drawer.Screen name="Casa" component={EscrevermapaScreen} />
      <Drawer.Screen name="Listar" component={ListarScreen} />
      <Drawer.Screen
        name="Lista Com Filtro "
        component={ListaComFiltroScreen}
      />
      <Drawer.Screen
        name="Lista Com Filtro Usuario"
        component={ListaComFiltroUsuariosScreen}
      />
    </Drawer.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
