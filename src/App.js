import { transform } from '@babel/core';
import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';

const urlToMyGithub = 'https://github.com/maysagoncalves29';
const colorGithub = 'black';
const colorFontGithub = 'rgb';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/89320151?v=4';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('Link Aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToMyGithub);
        }
    }
    return (
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
          <Image
            accessibilityLabel="Maysa em algum lugar"
            style={style.avatar}
            source={{uri: imageProfileGithub}}
          />
          <Text
            accessibilityLabel="Nome: maysa gonçalves"
            style={[style.defaultText, style.name]}>
            Maysa Gonçalves
          </Text>
          <Text
            accessibilityLabel="Nickname: maysa gonçalves"
            style={[style.defaultText, style.nickname]}>
            maysagoncalves29
          </Text>
          <Text
            accessibilityLabel="Descrição: In progress | Analysis and Development Student | Front End Developer | @_maysaa.g"
            style={[style.defaultText, style.description]}>
            In progress | Analysis and Development Student | Front End Developer | @_maysaa.g
          </Text>
          <View style={style.containerBall}> 
                    <View style={ style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={ style.pink} />
                    <View style={ style.pinkGrande} />
                    <View style={ style.pinkGrande} />
                    <View style={style.pinkGrande} />
                    <View style={ style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={ style.pink} />
                    <View style={style.pink} />
                    <View style={ style.pink} />
                    <View style={ style.pink} />
                    <View style={ style.pinkGrande} /> 
                    <View style={ style.pinkGrande} /> 
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={ style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={ style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={ style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={ style.pink} />
                    <View style={style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={ style.pinkGrande} />
                    <View style={ style.pink} />
                    <View style={style.pink} />
                    <View style={ style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={ style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={ style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={ style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={style.pinkGrande} />
                    <View style={style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={style.pinkGrande} />
                    <View style={style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={style.pinkGrande} />
                    <View style={style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pinkGrande} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    <View style={style.pink} />
                    
                
                </View>          
          <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
              <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
          </View>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  };


export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 30,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,

    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',

    },
    nickname: {
        color: colorDarkFontGithub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'white',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 15,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    pink: {
        width: 15,
        height: 15,        
        backgroundColor: '#FFC0CB', 
        opacity: 0.6,       
        borderRadius: 4,
        marginLeft: 3,
        marginBottom: 3,             

    },
    
    pinkGrande: {
        width: 15,
        height: 15,        
        backgroundColor: '#FF1493',        
        borderRadius: 4,
        marginLeft: 3,
        marginBottom: 3,

    },

    containerBall: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,       
        marginTop: 20,
        justifyContent: 'space-evenly',            

    },
});