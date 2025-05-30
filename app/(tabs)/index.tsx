import Carrossel from "@/components/ui/Carrossel";
import {
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  MaterialIcons,
} from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function TelaPrincipal() {
  // Dados dos produtos populares
  const produtosFarmacia = [
    {
      id: 1,
      nome: "Paracetamol 750mg",
      categoria: "Analgésico/Antitérmico",
      descricao: "Alívio de dores e febre. Cartela com 10 comprimidos.",
      preco: 12.9,
      marca: "Genérico",
      imagem:
        "https://images.unsplash.com/photo-1631980839248-1a84a60c66ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      estoque: 50,
      avaliacao: 4.7,
      necessitaReceita: false,
      destaque: true,
      dosagem: "750mg",
      quantidade: "10 comprimidos",
    },
    {
      id: 2,
      nome: "Protetor Solar FPS 70",
      categoria: "Dermocosmético",
      descricao:
        "Proteção UVA/UVB, toque seco, resistente à água. Bisnaga 120g.",
      preco: 89.9,
      marca: "La Roche-Posay",
      imagem: "https://exemplo.com/protetor-solar.jpg",
      estoque: 30,
      avaliacao: 4.9,
      necessitaReceita: false,
      destaque: true,
      tipoPele: "Todos os tipos",
      volume: "120g",
    },
    {
      id: 3,
      nome: "Vitamina D",
      categoria: "Suplemento",
      descricao:
        "Suplemento de vitamina D3 em cápsulas moles. Frasco com 60 cápsulas.",
      preco: 59.9,
      marca: "Addera D3",
      imagem: "https://exemplo.com/vitamina-d.jpg",
      estoque: 45,
      avaliacao: 4.8,
      necessitaReceita: false,
      destaque: false,
      dosagem: "7",
      quantidade: "60 cápsulas",
    },
    {
      id: 4,
      nome: "Shampoo Anticaspa",
      categoria: "Cuidados Capilares",
      descricao:
        "Controle da caspa e coceira. Fórmula com cetoconazol. Frasco 200ml.",
      preco: 42.5,
      marca: "Neutrogena",
      imagem: "https://exemplo.com/shampoo-anticaspa.jpg",
      estoque: 25,
      avaliacao: 4.6,
      necessitaReceita: false,
      destaque: true,
      volume: "200ml",
      principioAtivo: "Cetoconazol 2%",
    },
    {
      id: 5,
      nome: "Fralda Pampers Confort",
      categoria: "Infantil",
      descricao: "Fraldas descartáveis tamanho G (56 unidades).",
      preco: 79.9,
      marca: "Pampers",
      imagem: "https://exemplo.com/fraldas.jpg",
      estoque: 60,
      avaliacao: 4.5,
      necessitaReceita: false,
      destaque: false,
      tamanho: "G",
      quantidade: "56 unidades",
    },
  ];

  // Categorias
  const categories = [
    {
      titulo: "Medicamentos",
      icon: <Fontisto name="pills" size={32} color="black" />,
    },
    {
      titulo: "Vitaminas",
      icon: (
        <FontAwesome6
          name="prescription-bottle-medical"
          size={32}
          color="black"
        />
      ),
    },
    {
      titulo: "Higiene e Beleza",
      icon: (
        <MaterialCommunityIcons
          name="face-woman-shimmer"
          size={32}
          color="black"
        />
      ),
    },
    {
      titulo: "Saúde bucal",
      icon: <FontAwesome5 name="tooth" size={32} color="black" />,
    },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
          <Text style={styles.actionText}>
            Ligue para conversar com um farmatêutico
          </Text>
        </TouchableOpacity>
      </View>

      {/* Categorias */}
      <Text style={styles.sectionTitle}>Categorias</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category.icon}</Text>
            <Text style={styles.categoryText}>{category.titulo}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Produtos populares */}
      <Text style={styles.sectionTitle}>Produtos populares</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productsContainer}
      >
        {produtosFarmacia.map((product, index) => (
          <TouchableOpacity
            key={index}
            style={styles.productCard}
            onPress={() =>
              router.push({
                pathname: "/DetalhesProduto",
                params: {
                  id: product.id.toString(),
                  nome: product.nome,
                  descricao: product.descricao,
                  preco: product.preco.toString(),
                  imagem: product.imagem,
                  quantidade: product.quantidade?.toString(),
                  dosagem: product.dosagem,
                  marca: product.marca,
                },
              })
            }
          >
            <View style={styles.productImagePlaceholder}>
              <Image
                source={{ uri: product.imagem }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.productName}>{product.nome}</Text>
            <Text style={styles.productPrice}>R$ {product.preco}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Ofertas */}
      <Text style={styles.sectionTitle}>Ofertas</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.productsContainer}
      >
        {produtosFarmacia.map((product, index) => (
          <TouchableOpacity key={index} style={styles.productCard}>
            <View style={styles.productImagePlaceholder}>
              <Image
                source={{ uri: product.imagem }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.productName}>{product.nome}</Text>
            <Text style={styles.productPrice}>R$ {product.preco}</Text>
          </TouchableOpacity>
        ))}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  actionsContainer: {
    flexDirection: "row",
    // gap: 12,
    justifyContent: "space-between",

    marginBottom: 24,
  },
  actionCard: {
    width: 160,
    backgroundColor: "#F8F8F8",
    shadowColor: "10px 5px 5px black",
    borderRadius: 12,
    padding: 16,
    // marginRight: 12,
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
  productImageText: {
    color: "#888",
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
  containerCarrossel: {
    marginTop: 32,
    marginBottom: 8,
  },
});
