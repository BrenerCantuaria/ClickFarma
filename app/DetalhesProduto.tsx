import { useLocalSearchParams } from "expo-router";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export default function DetalhesProduto(Props: Produto) {
  const { id, nome, descricao, preco, imagem, quantidade, dosagem, marca } =
    useLocalSearchParams<{
      id: string;
      nome: string;
      descricao: string;
      preco: string;
      imagem: string;
      quantidade: string;
      dosagem: string;
      marca: string;
    }>();

  function adicionarCarrinho() {
    Alert.alert("Produto adicionado ao carrinho");
  }

  // Produto
  const produto = {
    id: 1,
    nome: "Paracetamol 750mg",
    categoria: "Analgésico/Antitérmico",
    descricao: "Alívio de dores e febre. Cartela com 10 comprimidos.",
    preco: 12.9,
    marca: "Genérico",
    imagem:
      "https://images.unsplash.com/photo-1631980839248-1a84a60c66ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dosagem: "750mg",
    quantidade: "10 comprimidos",
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={{ uri: imagem }}
          style={styles.productImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{nome}</Text>
        <Text style={styles.brand}>{marca}</Text>
        <Text style={styles.price}>R$ {Number(preco).toFixed(2)}</Text>

        <Text style={styles.detail}>Dosagem: {dosagem}</Text>
        <Text style={styles.detail}>Quantidade: {quantidade}</Text>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>{descricao}</Text>
        </View>
        <Button title="Adicionar ao carrinho" onPress={adicionarCarrinho} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: 260,
  },
  detailsContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  brand: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2a59fe",
    marginVertical: 15,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
    color: "#444",
  },
  descriptionContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
  },
});
