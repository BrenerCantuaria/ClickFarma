import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { obterCarrinho, removerDoCarrinho } from "../../utils/carrinho";

export default function Carrinho() {
  const [produtos, setProdutos] = useState(() => obterCarrinho());

  useFocusEffect(
    useCallback(() => {
      console.log("Tela em foco");
      setProdutos(obterCarrinho());
      return () => {
        console.log("Tela perdeu o foco");
      };
    }, [])
  );

  const handleRemover = (id: string) => {
    removerDoCarrinho(id);
    setProdutos([...obterCarrinho()]);
    Alert.alert("Removido", "Produto removido do carrinho.");
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {produtos.length == 0 ? (
        <View>
          <Text>Seu carrinho está vazio</Text>
        </View>
      ) : (
        produtos.map((produto) => (
          <View key={produto.id} style={styles.item}>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/DetalhesProduto",
                  params: {
                    id: produto.id.toString(),
                    nome: produto.nome,
                    preco: produto.preco.toString(),
                    imagem: produto.imagem,
                    quantidade: produto.quantidade,
                    dosagem: produto.dosagem,
                    marca: produto.marca,
                  },
                })
              }
            >
              <Image source={{ uri: produto.imagem }} style={styles.image} />
            </TouchableOpacity>

            <View style={styles.info}>
              <Text style={styles.name}>{produto.nome}</Text>
              <Text style={styles.details}>R$ {produto.preco.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => handleRemover(produto.id)}>
                <Text style={styles.remove}>Remover</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.details}>
                Quantidade: {produto.quantidade}
              </Text>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
    alignItems: "center"
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#555",
  },
  remove: {
    marginTop: 8,
    fontSize: 14,
    color: "red",
  },
});
