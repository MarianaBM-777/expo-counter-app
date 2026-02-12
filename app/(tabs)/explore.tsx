import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import sena from '@/assets/images/senabg.png';
import foto from '@/assets/images/fotoperfil.png';
import { Background } from '@react-navigation/elements';

export default function ProfileScreen() {
  return (
    <ImageBackground
      source={sena}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    
    >
      <View style={styles.overlay}>

      <Text style={styles.title}>
        APRENDIZ
      </Text>

      <Image source={foto} style={styles.image}/>

      <Text style={styles.name}>
        Mariana Benavides Muñoz
      </Text>

      <Text style={styles.program}>
        ADSO - Análisis y desarrollo de Software
      </Text>

      <text style={styles.message}>
        "🚀El éxito es la suma de pequeños esfuerzos repetidos día tras día"
      </text>
        
    </View>

    </ImageBackground> 
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    opacity: 0.20,
  },
  overlay: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    
  },
  image: {
    width: 180,
    height: 180,
    borderRadius:100,
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  program: {
    fontSize: 15,
    marginTop: 7,
  },
  message: {
    fontSize: 15,
    marginTop: 3,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});