import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./types";

interface INameProps {
  name: string;
  onRemove: () => void;
}
export function Participant({ name, onRemove }: INameProps) {

  return (
    <View style={styles.continer}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove} >
        <Text style={styles.buttonText}>
          -
        </Text>

      </TouchableOpacity>
    </View>
  );
}