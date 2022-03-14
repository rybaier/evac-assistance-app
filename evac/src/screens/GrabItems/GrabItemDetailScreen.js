import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as ItemContext } from "../../context/GrabItemContext";

const GrabItemDetailScreen = () => {
  const { state, editItems } = useContext(ItemContext)

  return (
    <></>
  );
};

const styles = StyleSheet.create({});

export default GrabItemDetailScreen;
