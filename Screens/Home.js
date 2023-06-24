import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const auth =  async () => {
        try {
            await AsyncStorage.setItem("EMAIL" , email);
            await AsyncStorage.setItem("PASSWORD" , password);
            navigation.navigate('Contact');
        }catch(e) {
            console.log(e);
        }
    } 

    return (
        <View style={{ height: '100%', backgroundColor: 'grey', justifyContent: 'center' }}>

            <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>Login Here</Text>
            <TextInput placeholder='Name here' placeholderTextColor={'grey'} style={{
                height: 50, width: 300, borderWidth: .2,
                alignSelf: 'center', marginTop: 10, paddingLeft: 15, borderRadius: 10
            }} value={email} onChangeText={txt => setEmail(txt)}/>

            <TextInput placeholder='password here' placeholderTextColor={'grey'} style={{
                height: 50, width: 300,
                borderWidth: .2, alignSelf: 'center', marginTop: 20, paddingLeft: 15, borderRadius: 10
            }} value={password} onChangeText={txt => setPassword(txt)}/>

            <TouchableOpacity
                style={{
                    width: 200, height: 40, borderRadius: 20, backgroundColor: '#000', marginTop: 40, marginLeft: 70,
                    justifyContent: 'center', alignItems: 'center',
                }}
                onPress={()=> auth()}
            >
                <Text>login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})