import { Text, View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <View style={styles.screen}>

        <View style={styles.post}>
          <Text style={styles.author}>Lucas Barra</Text>
          <Text style={styles.content}>
            Este é o meu primeiro post.
            Na rede social que eu estou desenvolvendo.
          </Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
      top: StatusBar.currentHeight,
      padding: 20,
  },
  post: {
    backgroundColor: 'purple',
    borderColor: 'black',
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
  },

  author: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },

  content: {
      fontSize: 16,
      color: 'white',
  }
});