"use client";
import React from 'react';
import { Pressable, Text } from 'react-native';

type DecrementComponentProps = {
  count: number;
  onDecrement: () => void;
};

export default function DecrementComponent({ count, onDecrement }: DecrementComponentProps) {
  return (
    <Pressable
      onPress={onDecrement}
      style={{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>Decrement</Text>
    </Pressable>
  );
}