import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  continuer: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 24
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 56,
    marginRight: 12,
    backgroundColor: '#1F1E25',
    color: '#ffffff',
    borderRadius: 5,
    fontSize: 16,
    padding: 16
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
  }
});