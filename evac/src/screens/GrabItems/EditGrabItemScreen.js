import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import ItemForm from "../../components/ItemForm";
import { Context as ItemContext } from "../../context/GrabItemContext";

const EditGrabItemScreen = ({ navigation }) => {
  const { state, editItems } = useContext(ItemContext)

  return (
    <View>
      <ItemForm 
        formTitle={"Update Item"}
        errorMessage={null}
        initialValues = {{ }}
        onSubmit={( priority, name, location, instructions ) =>
          editItems( priority, name, location, instructions )
        }
        buttonText={'Save Grab Item'}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditGrabItemScreen;