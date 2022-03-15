import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import ItemForm from "../../components/ItemForm";
import { Context as ItemContext } from "../../context/GrabItemContext";

const GrabItemDetailScreen = ( { navigation }) => {
  const { state, editItems } = useContext(ItemContext)

  return (
    <View>
      
    </View>
  );
};

const styles = StyleSheet.create({});

export default GrabItemDetailScreen;
