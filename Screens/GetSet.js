import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const GetSet = () => {

    const [paragraph , setParagraph] = useState();

    const sethere = async () => {
        try {
            await AsyncStorage.setItem("KEYSTRING" , 'paragraph ' + paragraph);
        } catch (e) {   
            console.log(e);
        }
    }

    const gethere = async () => {
        try {
            const jsonValue = JSON.stringify(paragraph)
            const value = await AsyncStorage.getItem("KEYSTRING" , jsonValue);
            if (value != null) {
                alert(value);
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
            <TouchableOpacity
                style={{ width: 200, height: 40, borderRadius: 20, backgroundColor: '#000', marginTop: 40, justifyContent: 'center', alignItems: 'center', }}
                onPress={() => sethere()}>
                <Text>Save String</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ width: 200, height: 40, borderRadius: 20, backgroundColor: '#000', marginTop: 40, justifyContent: 'center', alignItems: 'center', }}
                onPress={() => gethere()}>
                <Text>Read String</Text>
            </TouchableOpacity>

            <Text style={{color:'#000'}} onChange={setParagraph} > Lorem Ipsum Dollar</Text>
        </View>
    )
}

export default GetSet

const styles = StyleSheet.create({})