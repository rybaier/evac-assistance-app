import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Polyline, Circle,  PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from 'expo-location'

const LocationShareScreen = () => {
  return (
    
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={{
          latitude: 42.253001,
          longitude: -122.906236,
          latitudeDelta: 0.25,
          longitudeDelta: 0.25,
        }}
        provider={PROVIDER_GOOGLE}
      >
      </MapView>
    
  );
};

const styles = StyleSheet.create({
    map:{
        height:1000
    }
});

export default LocationShareScreen;
