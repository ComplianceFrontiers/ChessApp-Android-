import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <Image
        source={require('../../../assets/loading.gif')} // Replace with your actual path to the GIF
        style={styles.loadingGif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: Add a background color if needed
  },
  loadingGif: {
    width: 400, // Adjust to your preferred size
    height: 400,
  },
});

export default Loading;
