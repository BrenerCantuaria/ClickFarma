import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilCliente() {
  const [editando, setEditando] = useState(false);

  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("joao@email.com");
  const [cpf, setCpf] = useState("123.456.789-00");
  const [telefone, setTelefone] = useState("(92) 98888-7777");
  const [endereco, setEndereco] = useState("Rua das Flores, 123 - Manaus/AM");

  const [novoNome, setNovoNome] = useState(nome);
  const [novoEmail, setNovoEmail] = useState(email);
  const [novoCpf, setNovoCpf] = useState(cpf);
  const [novoTelefone, setNovoTelefone] = useState(telefone);
  const [novoEndereco, setNovoEndereco] = useState(endereco);

  function handleEditar() {
    setEditando(true);
  }

  function handleCancelar() {
    setEditando(false);
    setNovoNome(nome);
    setNovoEmail(email);
    setNovoCpf(cpf);
    setNovoTelefone(telefone);
    setNovoEndereco(endereco);
  }

  function handleSalvar() {
    setNome(novoNome);
    setEmail(novoEmail);
    setCpf(novoCpf);
    setTelefone(novoTelefone);
    setEndereco(novoEndereco);
    setEditando(false);
    Alert.alert("Sucesso", "Perfil atualizado com sucesso.");
  }

  function handleSair() {
    router.replace("/(auth)");

    Alert.alert("Logout", "Você saiu da sua conta.");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/person.png")}
          style={styles.avatar}
        />
        <Text style={styles.nome}>{nome}</Text>
      </View>

      <View style={styles.card}>
        {editando ? (
          <>
            <CustomInput
              label="Nome completo"
              value={novoNome}
              onChangeText={setNovoNome}
            />
            <CustomInput
              label="E-mail"
              value={novoEmail}
              onChangeText={setNovoEmail}
              keyboardType="email-address"
            />
            <CustomInput
              label="CPF"
              value={novoCpf}
              onChangeText={setNovoCpf}
              keyboardType="numeric"
            />
            <CustomInput
              label="Telefone"
              value={novoTelefone}
              onChangeText={setNovoTelefone}
              keyboardType="phone-pad"
            />
            <CustomInput
              label="Endereço"
              value={novoEndereco}
              onChangeText={setNovoEndereco}
            />

            <View style={styles.rowButtons}>
              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={handleSalvar}
              >
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={handleCancelar}
              >
                <Text style={styles.buttonTextSecondary}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View>
            <ProfileItem label="E-mail" value={email} />
            <ProfileItem label="CPF" value={cpf} />
            <ProfileItem label="Telefone" value={telefone} />
            <ProfileItem label="Endereço" value={endereco} />

            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={handleEditar}
            >
              <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogout} onPress={handleSair}>
              <Text style={styles.logoutText}>Sair da Conta</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

function ProfileItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function CustomInput({
  label,
  value,
  onChangeText,
  keyboardType = "default",
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: "#F1F3F6",
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "#4CAF50",
    marginBottom: 12,
  },
  nome: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  infoRow: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: "#888",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 16,
  },
  buttonPrimary: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonSecondary: {
    backgroundColor: "#ddd",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonTextSecondary: {
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonLogout: {
    marginTop: 16,
    alignItems: "center",
  },
  logoutText: {
    color: "#D32F2F",
    fontSize: 16,
    fontWeight: "500",
  },
});
