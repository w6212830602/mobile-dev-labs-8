"use client";
import React from 'react';
import { Pressable, Text } from 'react-native';



type IncrementComponentProps = {
  count: number;
  onIncrement: () => void;
};
export default function IncrementComponent({ count, onIncrement }: IncrementComponentProps) {
  return (
    <Pressable
      onPress={onIncrement}
      style={{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      }}
    >
      <Text style={{ color: 'white', fontSize: 16 }}>Increment</Text>
    </Pressable>
  );
}