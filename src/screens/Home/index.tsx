
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native';
//import { ScrollView } from 'react-native';
import { styles } from '../Home/types';
import { Participant } from '../../components/Participant';


export function Home() {
  const participantes = [
    'Maria', 'Joao', 'Ana', 'Patricia', 'Carolina', 'Sadra', 'Mario', 'Karina', 'Edivirge', 'Arimateia', 'Felipe'
  ] || undefined;

  const handleParticipantAdd = () => {
    if (participantes.includes('Ana'))
      return Alert.alert("Participante já existe", "Este participante ja esta cadastrado.")
  }

  const handleParticipantRemove = (name: string) => {
    return Alert.alert('Remover Participante', `Deseja remover um participante ${name}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante deletado!')
      }
    ]);

  }
  return (
    <View style={styles.continuer}>

      <Text style={styles.eventName}>
        React Native</Text>

      <Text style={styles.eventDate}>
        Manaus 7 de Abril de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Digite um testo...'
          placeholderTextColor={'#6b6b6b'}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      < FlatList
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione pessoas a sua lista de participante.
          </Text>
        )}
      />


      {/*Outra forma de lista usado scrollView*/}
      {/* < ScrollView showsVerticalScrollIndicator={false}>
        {
          participantes.map(participant => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove('Joao de barro')}
            />
          ))
        }
      </ScrollView> */}

    </View>
  );
}