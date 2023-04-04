import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Clock = ({ timezone }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clock = date.toLocaleTimeString('pl-PL', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timezone,
  });

  const calendar = date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: timezone,
  });

  return (
    <View style={styles.container}>
        <View style={styles.border}>
            <Text style={styles.date}>{calendar}</Text>
            <Text style={styles.time}>{clock}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333'
    },
    time: {
      fontSize: 70,
      fontWeight: 'bold',
      textAlign: 'center',
      textShadowColor: '#ddd',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
      color: '#fff'
    },
    date: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textTransform: 'uppercase',
    },
    border: {
      backgroundColor: '#333',
      padding: 50,
      borderRadius: 20,
      shadowColor: '#fff',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 5
    }
  });
  

export default Clock;
