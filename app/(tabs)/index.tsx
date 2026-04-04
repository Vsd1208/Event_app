import { View, Text, Button, FlatList } from 'react-native';

export default function Index() {
  const events = [
    { id: '1', name: 'Hackathon' },
    { id: '2', name: 'Tech Talk' },
    { id: '3', name: 'Workshop' }
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>
        Event List 🚀
      </Text>

      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ margin: 10 }}>
            {item.name}
          </Text>
        )}
      />

      <Button title="Add Event" onPress={() => {}} />
    </View>
  );
}