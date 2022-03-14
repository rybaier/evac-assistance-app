import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemForm from "../../components/ItemForm";
import { Context as ItemContext } from "../../context/GrabItemContext";

const EvacGrabItemScreen = () => {
  const { state, createItems } = useContext(ItemContext)

  return (
    <SafeAreaView>
      <ItemForm
        formTitle={"Add Item to Grab List"}
        errorMessage={null}
        onSubmit={( priority, name, location, instructions ) =>
          createItems( priority, name, location, instructions )
        }
        buttonText={'Save Grab Item'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default EvacGrabItemScreen;
