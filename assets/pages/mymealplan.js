import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState } from 'react';

export function MyMealPlan() {

    const navigation = useNavigation();

    return (

        <><View style={styles.page}>
        </View>

            <View style={styles.pagefooter}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyMealPlan')}>
                        <Image source={require('../plano-gray.png')} style={styles.menubutton} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('RegistroRefeicoes')}>
                        <Image source={require('../diario-gray.png')} style={styles.menubutton} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                        <Image source={require('../menu.png')} style={styles.menubutton} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../cook-gray.png')} style={styles.menubutton} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../meta-gray.png')} style={styles.menubutton} />
                    </TouchableOpacity>
                </View>
            </View></>

    );

}

const styles = StyleSheet.create({
    page: {
        flexGrow: 1,
        backgroundColor: "#222221",
        alignItems: 'center'
    },
    pagefooter: {
        height: 100,
        width: '100%',
        backgroundColor: '#7B7B8E',
        alignItems: 'center'
    },
    buttonContainer: {
        padding: 15,
        flexDirection: "row"
    },
    menubutton: {
        height: 35,
        width: 35,
        marginHorizontal: 20
    }
});