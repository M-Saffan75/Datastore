import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Contact = () => {

    const [isConnected, setIsConnected] = useState(false);


    useEffect(() => {
        wifi();
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);

            return () => {
                unsubscribe();
            }
        }, [])

    })

    const wifi = async () => {

        if (isConnected == true) {
            const email = await AsyncStorage.getItem("EMAIL");
            const password = await AsyncStorage.getItem("PASSWORD");
            console.log(email + " " + password);
        } else if (isConnected !== true) {
            ToastAndroid.show('ᴅᴇᴠɪᴄᴇ ɴᴇᴛᴡᴏʀᴋ ᴇʀʀᴏʀ !',
                ToastAndroid.SHORT);
        }

    }

    // useEffect(()=> {
    //     getData()
    // },[])

    // const getData = async () => {
    //     const paragraph = await AsyncStorage.getItem("PARAGRAPH");
    //     console.log(paragraph);
    // }
    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor:'grey'}}>
            <Text style={{ color: '#000' }}>Contact</Text>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})