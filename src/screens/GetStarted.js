import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function GetStarted() {
    
  const navigation = useNavigation();
  const homepagenvg = () => {
    navigation.navigate('bottomTab');
  };
  return (
    <SafeAreaView>
      <View >
        <ImageBackground
          source={require('../assets/getstartedimg.jpg')}
          style={styles.img}
        />
        <LinearGradient 
        colors={['transparent','#000000A1']}
        start={{x:0,y:0}}
        end={{x:0,y:1}}
        style={styles.gradient}
        >
          </LinearGradient>
          

        
        <Text style={styles.firsttxt}>
          You want {'\n'} Authentic, here{'\n'}you go!</Text>

           
        <Text style={styles.secondtxt}>Find it here, buy it now!</Text>
        

        <TouchableOpacity style={styles.btn} onPress={homepagenvg}>
          <Text
            style={{
              color: 'white',
              marginTop: 10,
              textAlign: 'center',
              fontSize: 23,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        

        
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
  },
  firsttxt: {
    position: 'absolute',
    color: '#FFFFFF',
    height: 123,
    width: 315,
    fontSize: 34,
    marginTop: 552,
    fontWeight: 'bold',
    marginLeft: 40,
    textAlign:'center'
  },
  secondtxt: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    height: 22,
    marginTop: 680,
    alignSelf:'center',
    right:150
    // textAlign:'center'
  },
  btn: {
    borderWidth: 1,
    position: 'absolute',
    height: 55,
    width: 279,
    backgroundColor: '#F83758',
    borderColor: '#F83758',
    marginTop: 750,
    marginLeft: 55,
    borderRadius: 5,
  },
  gradient:{
    position:'absolute',
    height:362,
    justifyContent:'flex-end',
    bottom:0,
    left:0,
    right:0,
    
  }
});
