import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";


export default function Carrossel() {
  // Imagens de exemplo do Unsplash (substitua pelas suas URLs)
  const images = [
    "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=800",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: images[currentIndex] }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200, // Ajuste conforme necessário
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
