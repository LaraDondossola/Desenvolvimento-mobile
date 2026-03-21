import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculadora() {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState('0');

  // Função para toque nos botões
  const lidarComToque = (valor) => {
    if (valor === 'C') {
      setExpressao('');
      setResultado('0');
    } else if (valor === '=') {
      try {
        // Eval calcula a string matemática ("2+2")
        const res = eval(expressao);
        setResultado(String(res));
      } catch (e) {
        setResultado('Erro');
      }
    } else {
      setExpressao(expressao + valor);
    }
  };

  // Botões
  const botoes = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <View style={styles.container}>
      {/* Tela da Calculadora */}
      <View style={styles.tela}>
        <Text style={styles.textoExpressao}>{expressao}</Text>
        <Text style={styles.textoResultado}>{resultado}</Text>
      </View>

      {/* Teclado */}
      <View style={styles.teclado}>
        {botoes.map((linha, indexLinha) => (
          <View key={indexLinha} style={styles.linha}>
            {linha.map((botao) => {
              // Deixa os botões de operação mais escuros
              const isOperador = ['/', '*', '-', '+', '=', 'C'].includes(botao);
              
              return (
                <TouchableOpacity
                  key={botao}
                  style={[styles.botao, isOperador && styles.botaoOperador]}
                  onPress={() => lidarComToque(botao)}
                >
                  <Text style={styles.textoBotao}>{botao}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tela: {
    flex: 2,
    backgroundColor: '#FFB6C1', 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    borderBottomWidth: 2,
    borderColor: '#FF69B4',
  },
  textoExpressao: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  textoResultado: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#C71585',
  },
  teclado: {
    flex: 5,
    backgroundColor: '#FFF0F5', 
    padding: 10,
  },
  linha: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    backgroundColor: '#FF69B4', 
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 20,
    elevation: 3, 
  },
  botaoOperador: {
    backgroundColor: '#C71585', 
  },
  textoBotao: {
    fontSize: 28,
    color: '#FFF',
    fontWeight: 'bold',
  },
});