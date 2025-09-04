import { Text, View, Image, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function App(){
  return(
    <SafeAreaView>
      <View style={styles.screen}>

        <View style={styles.post}>
        <View style={styles.user, {flexDirection: 'row'}}>
        <Image style={styles.photo}
        source={require('/assets/photo1.png')}
        />
          <Text style={styles.author}>Lucas Barra</Text>
          </View>
          <Text style={styles.content}>
            Este é o meu primeiro post.
            Vou aprender sobre View, Texte e StyleSheet.
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
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 4, height: 2 },
    elevation: 4, 
  },

  author: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
    marginLeft: 7,
  },

  content: {
      marginTop: 10,
      fontSize: 17,
      color: 'white',
  },
  user: {

  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});