// src/screens/Auth/LoginScreen.tsx
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // Validação fake - qualquer combinação funciona
    if (email == "teste@gmail.com" && password == "12345") {
      // Navega para a tela Home (index.tsx)
      router.replace("/(tabs)");
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            borderRadius: 5,
            width: 200,
            height: 200,
            marginBottom: 50,
          }}
        >
          <Image
            source={require("../../assets/images/pills.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
          <Text style={styles.title}>ClickFarma</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
