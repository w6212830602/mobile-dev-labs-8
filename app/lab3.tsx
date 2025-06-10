"use client"
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Increment from '../components/increment'
import Decrement from '../components/decrement'

export default function Lab3() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <><>
      </><View style={{ padding: 20 }}>
              <Text style={styles.container}>Count: {count}</Text>
              <Increment count={count} onIncrement={handleIncrement} />
              <Decrement count={count} onDecrement={handleDecrement} />
          </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});

