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

// Tipo correto para os detalhes de um medicamento
interface MedicamentoDetalhes {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  quantidade?: string;
  dosagem?: string;
  marca?: string;
}

// Tipo para o objeto de medicamentos por categoria
type MedicamentosPorCategoria = {
  [categoria: string]: MedicamentoDetalhes[];
};

export default function MedicamentosPorCategoria() {
  const categorias = [
    { nome: "Dor e Febre" },
    { nome: "Vitaminas" },
    { nome: "Higiene e Beleza" },
    { nome: "Saúde Bucal" },
  ];

  const medicamentos: MedicamentosPorCategoria = {
    "Dor e Febre": [
      {
        id: 1,
        nome: "Dipirona Sódica",
        descricao: "Analgésico e antitérmico. 500mg, 10 comprimidos.",
        preco: 8.9,
        imagem:
          "https://images.unsplash.com/photo-1630094539416-5e17c6191be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHBpbGxzfGVufDB8fDB8fHww",
        marca: "Genérico",
        dosagem: "70mg",
        quantidade: "12  unidades restantes",
      },
      {
        id: 2,
        nome: "Ibuprofeno 400mg",
        descricao: "Anti-inflamatório. Cartela com 10 comprimidos.",
        preco: 14.5,
        imagem:
          "https://images.unsplash.com/photo-1575997038999-5be1cffe6c5d?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        marca: "Genérico",
        dosagem: "70mg",
        quantidade: "12  unidades restantes",
      },
    ],
    Vitaminas: [
      {
        id: 3,
        nome: "Vitamina C",
        descricao: "Comprimidos efervescentes, 1g. Caixa com 10 un.",
        preco: 9.9,
        imagem:
          "https://images.unsplash.com/photo-1622013268565-71602f9c2cfe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHZpdGFtaW5zfGVufDB8fDB8fHww",
        marca: "Genérico",
        dosagem: "70mg",
        quantidade: "12  unidades restantes",
      },
      {
        id: 4,
        nome: "Multivitamínico Centrum",
        descricao: "60 comprimidos revestidos.",
        preco: 45.0,
        imagem:
          "https://images.unsplash.com/photo-1627467959081-97831c0d645f?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        marca: "Genérico",
        dosagem: "70mg",
        quantidade: "12  unidades restantes",
      },
    ],
    "Higiene e Beleza": [
      {
        id: 5,
        nome: "Sabonete Líquido Neutro",
        descricao: "Dermatologicamente testado, 250ml.",
        preco: 15.5,
        imagem:
          "https://images.unsplash.com/photo-1627495395570-d2c94e3319f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        marca: "Genérico",
        dosagem: "70mg",
        quantidade: "12  unidades restantes",
      },
    ],
    "Saúde Bucal": [
      {
        id: 6,
        nome: "Creme Dental Colgate Total 12",
        descricao: "Proteção completa, 90g.",
        preco: 6.99,
        imagem:
          "https://images.unsplash.com/photo-1706520636650-024a369fbcdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNyZW1lJTIwZGVudGFsfGVufDB8fDB8fHww",
        marca: "Genérico",
        dosagem: "70mg",
        quantidade: "12  unidades restantes",
      },
      {
        id: 7,
        nome: "Enxaguante Bucal Listerine",
        descricao: "Controle de bactérias, 500ml.",
        preco: 19.9,
        imagem:
          "https://images.unsplash.com/photo-1695073621652-600b8699ceea?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        marca: "Genérico",
        dosagem: "70mg",
        quantidade: "12  unidades restantes",
      },
    ],
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {categorias.map((categoria) => (
        <View key={categoria.nome} style={styles.section}>
          <Text style={styles.sectionTitle}>{categoria.nome}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {medicamentos[categoria.nome]?.map((medicamento) => (
              <TouchableOpacity
                key={medicamento.id}
                style={styles.card}
                onPress={() =>
                  router.push({
                    pathname: "/DetalhesProduto",
                    params: {
                      id: medicamento.id.toString(),
                      nome: medicamento.nome,
                      descricao: medicamento.descricao,
                      preco: medicamento.preco.toString(),
                      imagem: medicamento.imagem,
                      quantidade: medicamento.quantidade,
                      dosagem: medicamento.dosagem,
                      marca: medicamento.marca,
                    },
                  })
                }
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: medicamento.imagem }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.cardTitle}>{medicamento.nome}</Text>
                <Text style={styles.cardDescription}>
                  {medicamento.descricao}
                </Text>
                <Text style={styles.cardPrice}>
                  R$ {medicamento.preco.toFixed(2)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 32,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  card: {
    width: 160,
    marginRight: 16,
  },
  imageContainer: {
    width: 160,
    height: 160,
    borderRadius: 8,
    backgroundColor: "#f0f0f0",
    marginBottom: 8,
    overflow: "hidden",
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2A59FE",
  },
});
