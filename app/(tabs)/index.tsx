import Carrossel from "@/components/Carrossel";
import {
  FontAwesome,
  FontAwesome5,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TelaPrincipal() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Carrossel */}
      <View style={styles.containerCarrossel}>
        <Carrossel />
      </View>

      {/* Ações rápidas */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionCard}>
          <View style={styles.actionIcon}>
            <FontAwesome name="shopping-basket" size={24} color="#2A59FE" />
          </View>
          <Text style={styles.actionText}>
            Encomendar para retirar no local
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionCard}>
          <View style={styles.actionIcon}>
            <MaterialIcons name="support-agent" size={24} color="#2A59FE" />
          </View>
          <Text style={styles.actionText}>Falar com farmacêutico</Text>
        </TouchableOpacity>
      </View>

      {/* Categorias */}
      <Text style={styles.sectionTitle}>Categorias</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => router.navigate("/(tabs)/BuscaPorMedicamentos")}
        >
          <Fontisto name="pills" size={32} color="black" />
          <Text style={styles.categoryText}>Medicamentos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => router.navigate("/(tabs)/BuscaPorMedicamentos")}
        >
          <MaterialCommunityIcons
            name="face-woman-shimmer"
            size={32}
            color="black"
          />
          <Text style={styles.categoryText}>Higiene e Beleza</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => router.navigate("/(tabs)/BuscaPorMedicamentos")}
        >
          <FontAwesome5 name="tooth" size={32} color="black" />
          <Text style={styles.categoryText}>Saúde Bucal</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Produtos populares */}
      <Text style={styles.sectionTitle}>Produtos populares</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productsContainer}
      >
        <TouchableOpacity
          style={styles.productCard}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "1",
                nome: "Paracetamol 750mg",
                descricao: "Alívio de dores e febre.",
                preco: "12.9",
                imagem:
                  "https://images.unsplash.com/photo-1631980839248-1a84a60c66ac",
                quantidade: "10 comprimidos",
                dosagem: "750mg",
                marca: "Genérico",
              },
            })
          }
        >
          <View style={styles.productImagePlaceholder}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1631980839248-1a84a60c66ac",
              }}
              style={styles.imagem}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.productName}>Paracetamol 750mg</Text>
          <Text style={styles.productPrice}>R$ 12,90</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.productCard}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "2",
                nome: "Protetor Solar FPS 70",
                descricao: "Proteção UVA/UVB toque seco, 120g.",
                preco: "89.9",
                imagem:
                  "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                quantidade: "1 unidade",
                dosagem: "FPS 70",
                marca: "La Roche-Posay",
              },
            })
          }
        >
          <View style={styles.productImagePlaceholder}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={styles.imagem}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.productName}>Protetor Solar FPS 70</Text>
          <Text style={styles.productPrice}>R$ 89,90</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.productCard}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "3",
                nome: "Vitamina D",
                descricao: "Vitamina D3 em cápsulas",
                preco: "59.9",
                imagem:
                  "https://images.unsplash.com/photo-1662673142976-97d3d03934eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fFZpdGFtaW5hJTIwM0R8ZW58MHx8MHx8fDA%3D",
                quantidade: "60 cápsulas",
                dosagem: "7",
                marca: "Addera D3",
              },
            })
          }
        >
          <View style={styles.productImagePlaceholder}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1662673142976-97d3d03934eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fFZpdGFtaW5hJTIwM0R8ZW58MHx8MHx8fDA%3D",
              }}
              style={styles.imagem}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.productName}>Vitamina D</Text>
          <Text style={styles.productPrice}>R$ 59,90</Text>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  imagem: { width: "100%", height: "100%", borderRadius: 8 },
  containerCarrossel: {
    marginTop: 32,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  actionCard: {
    width: 160,
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  actionIcon: {
    backgroundColor: "#E6ECFE",
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  actionText: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  categoriesContainer: {
    marginBottom: 22,
  },
  categoryItem: {
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  categoryText: {
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
  },
  productsContainer: {
    marginBottom: 20,
  },
  productCard: {
    width: 150,
    marginRight: 16,
  },
  productImagePlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2A59FE",
  },
});
