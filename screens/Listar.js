import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  FlatList,
  MeuEstiloheet,
  Text,
  StatusBar,
} from "react-native";
import { auth, firestore } from "../firebase";
import MeuEstilo from "../meuestilo";

const Listar = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [casas, setCasas] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore
      .collection("Usuario")
      .doc(auth.currentUser.uid)
      .collection("Casa")
      .onSnapshot((querySnapshot) => {
        const casas = [];
        querySnapshot.forEach((documentSnapshot) => {
          casas.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.endereco,
          });
        });
        setCasas(casas);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Item = ({ endereco }) => (
    <View style={MeuEstilo.item}>
      <Text style={MeuEstilo.title}>{endereco}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item endereco={item.endereco} />;

  // const getCelulares= ()=>{
  //   setCasas([]);
  //   firestore
  //   .collection('Casa')
  //   .onSnapshot(querySnapshot=>{
  //     //querySnapshot.forEach(documentSnapshot=>{
  //     querySnapshot.docChanges().forEach(change=>{

  //       casas.push({...change.doc.data(),
  //         key: change.endereco,
  //       });
  //     });
  //     setCasas(casas);
  //     // setCarregando(false);
  //   });
  //   // return()=>subscriber();
  // };

  // // const observador = firestore.collection('Casa')
  // // .onSnapshot(querySnapshot => {
  // //   querySnapshot.docChanges().forEach(change => {
  // //     if (change.type === 'added') {
  // //       console.log('Novo Casa: ', change.doc.data());
  // //     }
  // //     if (change.type === 'modified') {
  // //       console.log('Casa modificado: ', change.doc.data());
  // //     }
  // //     if (change.type === 'removed') {
  // //       console.log('Casa removido: ', change.doc.data());
  // //     }
  // //   });
  // // });

  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={casas}
        renderItem={renderItem}
        keyExtractor={(item) => item.endereco}
        // refreshing={true}
        // onRefresh={() => {
        //   getCelulares();
        // }}
      />
    </SafeAreaView>
  );
};

// const MeuEstilo = MeuEstiloheet.create({
//   containerlistar: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'white',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 16,
//     color: '#0782F9',
//     fontWeight: '700',
//   },
// });

export default Listar;
