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

export default function MedicamentosPorCategoria() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Categoria: Dor e Febre */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dor e Febre</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "1",
                nome: "Dipirona Sódica",
                descricao: "Analgésico e antitérmico. 500mg, 10 comprimidos",
                preco: "8.90",
                imagem:
                  "https://images.unsplash.com/photo-1630094539416-5e17c6191be5?w=500",
                quantidade: "10",
                dosagem: "500mg",
                marca: "Genérico",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1630094539416-5e17c6191be5?w=500",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Dipirona Sódica</Text>
          <Text style={styles.cardDescription}>
            Analgésico e antitérmico. 500mg, 10 comprimidos
          </Text>
          <Text style={styles.cardPrice}>R$ 8,90</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "2",
                nome: "Ibuprofeno 400mg",
                descricao: "Anti-inflamatório. Cartela com 10 comprimidos",
                preco: "14.50",
                imagem:
                  "https://images.unsplash.com/photo-1575997038999-5be1cffe6c5d?q=80",
                quantidade: "10",
                dosagem: "400mg",
                marca: "Genérico",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1575997038999-5be1cffe6c5d?q=80",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Ibuprofeno 400mg</Text>
          <Text style={styles.cardDescription}>
            Anti-inflamatório. Cartela com 10 comprimidos
          </Text>
          <Text style={styles.cardPrice}>R$ 14,50</Text>
        </TouchableOpacity>
      </View>

      {/* Categoria: Vitaminas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vitaminas</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "3",
                nome: "Vitamina C",
                descricao: "Comprimidos, 1g. Caixa com 10 un.",
                preco: "9.90",
                imagem:
                  "https://images.unsplash.com/photo-1622013268565-71602f9c2cfe?w=500",
                quantidade: "10",
                dosagem: "1g",
                marca: "Genérico",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1622013268565-71602f9c2cfe?w=500",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Vitamina C</Text>
          <Text style={styles.cardDescription}>
            Comprimidos,5g. Caixa com 10 un.
          </Text>
          <Text style={styles.cardPrice}>R$ 9,90</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "4",
                nome: "Collagen Science",
                descricao: "Comprimidos efervescentes, 5g. Caixa com 25 un.",
                preco: "9.90",
                imagem:
                  "https://images.unsplash.com/photo-1729701823813-0b956f0d1bee?q=80",
                quantidade: "25",
                dosagem: "1g",
                marca: "Genérico",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1729701823813-0b956f0d1bee?q=80",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Collagen Science</Text>
          <Text style={styles.cardDescription}>
            Comprimidos efervescentes, 1g. Caixa com 25 un.
          </Text>
          <Text style={styles.cardPrice}>R$ 9,90</Text>
        </TouchableOpacity>
      </View>

      {/* Categoria: Higiene e Beleza */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Higiene e Beleza</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "5",
                nome: "Sabonete Líquido Neutro",
                descricao: "Dermatologicamente testado, 250ml",
                preco: "15.50",
                imagem:
                  "https://images.unsplash.com/photo-1627495395570-d2c94e3319f5?q=80",
                quantidade: "1",
                dosagem: "250ml",
                marca: "Genérico",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1627495395570-d2c94e3319f5?q=80",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Sabonete Líquido Neutro</Text>
          <Text style={styles.cardDescription}>
            Dermatologicamente testado, 250ml
          </Text>
          <Text style={styles.cardPrice}>R$ 15,50</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "6",
                nome: "Sabonete Neutro",
                descricao: "Dermatologicamente testado",
                preco: "5.50",
                imagem:
                  "https://images.unsplash.com/photo-1729019376645-89667394a790?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                quantidade: "1",
                dosagem: "100g",
                marca: "Genérico",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1729019376645-89667394a790?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Sabonete Neutro</Text>
          <Text style={styles.cardDescription}>Dermatologicamente testado</Text>
          <Text style={styles.cardPrice}>R$ 5,50</Text>
        </TouchableOpacity>
      </View>

      {/* Categoria: Saúde Bucal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saúde Bucal</Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "7",
                nome: "Creme Dental Colgate Total 12",
                descricao: "Proteção completa, 90g",
                preco: "6.99",
                imagem:
                  "https://images.unsplash.com/photo-1706520636650-024a369fbcdf?w=500",
                quantidade: "1",
                dosagem: "90g",
                marca: "Colgate",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1706520636650-024a369fbcdf?w=500",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Creme Dental Colgate Total 12</Text>
          <Text style={styles.cardDescription}>Proteção completa, 90g</Text>
          <Text style={styles.cardPrice}>R$ 6,99</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/DetalhesProduto",
              params: {
                id: "8",
                nome: "Escova de dente elétrica",
                descricao: "Máxima eficiência",
                preco: "250",
                imagem:
                  "https://images.unsplash.com/photo-1612181819081-950d35f4d826?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                quantidade: "1",
                // dosagem: "500ml",
                marca: "Oral B",
              },
            })
          }
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1612181819081-950d35f4d826?q=80&w=1943&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Escova de dente elétrica</Text>
          <Text style={styles.cardDescription}>Máxima eficiência</Text>
          <Text style={styles.cardPrice}>R$ 250</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    padding: 16,
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
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    color: "#2A59FE",
    fontWeight: "bold",
  },
});
