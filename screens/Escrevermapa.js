import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import MeuEstilo from "../meuestilo";
import { auth, firestore } from "../firebase";

const Escrever = () => {
  const [endereco, setEndereco] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const myref = firestore
    .collection("Usuario")
    .doc(auth.currentUser.id)
    .collection("Casa")
    .doc();

  const enviarDados = () => {
    myref
      .set({
        endereco: endereco,
        latitude: latitude,
        longitude: longitude,
        id: myref.id,
      })
      .then(() => {
        alert("Casa " + endereco + " Adicionado com Sucesso");
      });
  };

  const limparFormulario = () => {};

  return (
    <KeyboardAvoidingView style={MeuEstilo.containerlistar} behavior="padding">
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="Endereco"
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Latitude"
          value={latitude}
          onChangeText={(text) => setLatitude(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Longitude"
          value={longitude}
          onChangeText={(text) => setLongitude(text)}
          style={MeuEstilo.input}
        />
      </View>

      <View style={MeuEstilo.buttoncontainerlistar}>
        <TouchableOpacity onPress={enviarDados} style={MeuEstilo.button}>
          <Text style={MeuEstilo.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Escrever;
