// CafeDaManha.js
import React from 'react';
import { View, Text } from 'react-native';
import { Refeicao } from './refeicao';

export function CafeDaManha() {
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];
  const navigationDestinations = ['SubstituicoesCafeDaManha'];

  return (
    <Refeicao mealTitle="Café da Manhã" options={options} navigationDestinations={navigationDestinations} />
  );

}

export function Almoco() {
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];
  const navigationDestinations = ['SubstituicoesCafeDaManha'];

  return (
    <Refeicao mealTitle="Almoço" options={options} navigationDestinations={navigationDestinations} />
  );

}

export function Lanche() {
  const options = ['Opção 1', 'Opção 2'];
  const navigationDestinations = ['SubstituicoesCafeDaManha'];

  return (
    <Refeicao mealTitle="Lanche" options={options} navigationDestinations={navigationDestinations} />
  );

}

export function Jantar() {
  const options = ['Opção 1', 'Opção 2'];
  const navigationDestinations = ['SubstituicoesCafeDaManha'];

  return (
    <Refeicao mealTitle="Jantar" options={options} navigationDestinations={navigationDestinations} />
  );

}

export function Ceia() {
  const options = ['Opção 1', 'Opção 2'];
  const navigationDestinations = ['SubstituicoesCafeDaManha'];

  return (
    <Refeicao mealTitle="Ceia" options={options} navigationDestinations={navigationDestinations} />
  );

}


