
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../Home/types';


export function Home() {

  const handleParticipantAdd = () => {
    console.log('Voce clicou aqui!');

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
    </View>
  );
}