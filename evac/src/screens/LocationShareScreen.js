import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polyline, Circle } from "react-native-maps";
import * as Location from 'expo-location'

const LocationShareScreen = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 48 }}> LocationShare Screen</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={120}
          strokeColor="rgba(158,158,255, 1.0)"
          fillColor="rgba(158,158,255, 0.3)"
        />
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LocationShareScreen;
