import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import vacationDestinations from '../lib/vacationsDestinations';

export default function Lab4() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [cityDetail, setCityDetail] = useState<{ extract: string; thumbnail?: { source: string } } | null>(null);

  const handleDestinationClick = async (city: string) => {
    if (city === selectedCity) {
      setSelectedCity(null);
      setCityDetail(null);
    } else {
      setSelectedCity(city);
      try {
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`);
        const data = await response.json();
        setCityDetail(data);
      } catch (error) {
        console.error('Error fetching city details:', error);
        setCityDetail({ extract: 'Error fetching city details.' });
      }
    }
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12 }}>
        Vacation Destinations
      </Text>

      {vacationDestinations.map((destination) => (
        <View key={destination.id} style={{ marginBottom: 16, borderBottomWidth: 1, paddingBottom: 12 }}>
          <TouchableOpacity onPress={() => handleDestinationClick(destination.location)}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {destination.location} - ${destination.price}
            </Text>
          </TouchableOpacity>

          {selectedCity === destination.location && cityDetail && (
            <View style={{ marginTop: 10 }}>

              <Text>Average Temperature: {destination.average_yearly_temperature}</Text>

              {cityDetail.thumbnail?.source && (
                <Image
                  source={{ uri: cityDetail.thumbnail.source }}
                  style={{ width: 120, height: 120, marginTop: 10 }}
                />
              )}

              {/* Wikipedia*/}
              <Text style={{ marginTop: 10 }}>{cityDetail.extract}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}
