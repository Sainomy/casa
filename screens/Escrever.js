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
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const myref = firestore.collection("Usuario").doc(auth.currentUser.id);

  const enviarDados = () => {
    myref
      .set({
        nome: nome,
        email: email,
        senha: senha,
        id: myref.id,
      })
      .then(() => {
        alert("Usuario " + nome + " Adicionado com Sucesso");
      });
  };

  const limparFormulario = () => {};

  return (
    <KeyboardAvoidingView style={MeuEstilo.containerlistar} behavior="padding">
      <View style={MeuEstilo.inputcontainerlistar}>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
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
