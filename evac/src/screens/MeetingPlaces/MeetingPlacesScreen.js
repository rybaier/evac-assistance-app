import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MeetingPlaceForm from "../../components/MeetingPlaceForm";
import { Context as MeetingPlaceContext } from "../../context/MeetingPlaceContext";

const MeetingPlacesScreen = ({ navigation }) => {
//   console.log(navigation);
  const { state, createPlaces } = useContext(MeetingPlaceContext);

  return (
    <SafeAreaView>
      <MeetingPlaceForm
        formTitle={"Set a Meeting Place"}
        errorMessage={null}
        onSubmit={( name, compass_direction, address ) =>
          createPlaces( name, compass_direction, address )
        }
        buttonText={"Save Meeting Place"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MeetingPlacesScreen;
