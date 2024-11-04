import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Substituicoes({ mealType, proteinOptions, carbsOptions, defaultProtein, defaultCarb }) {
    const navigation = useNavigation();

    const [protein, setProtein] = useState(defaultProtein); //protein ta recebendo Ovos
    const [carb, setCarb] = useState(defaultCarb); //carb ta recebendo Pao
    const [showProteinOptions, setShowProteinOptions] = useState(false); //showProteinOptions inicia como false
    const [showCarbOptions, setShowCarbOptions] = useState(false); //showCarbOptions inicia como false

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('carb');
            if (value !== null) {
                // We have data!!
                console.log('Retrieved carb is ', carb);
            }
        } catch (error) {
            // Error retrieving data
            console.log('Error retrieving carb ', carb);
        }
    };

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('carb', carb);
        } catch (error) {
            // Error saving data
            console.log('Error storing carb ', carb);
        }
    };

    const handleProteinOptionClick = (option) => {
        setProtein(option);
        setShowProteinOptions(false);
    };

    const handleCarbOptionClick = (option) => {
        setCarb(option);  // Ensure this is updating the carb state
        setShowCarbOptions(false);
    };

    const getFilteredOptions = (options, selectedOption) => {
        return options.filter(option => option !== selectedOption);
    };

    return (
        <View style={styles.page}>
            <View style={styles.header}></View>
            <View style={styles.area}>
                <View style={styles.mealTypeView}>
                    <Text style={styles.options}>{mealType}</Text>
                </View>
                <ScrollView>
                    {/* Protein Dropdown */}
                    <View style={styles.scrollview}>
                        <TouchableOpacity onPress={() => setShowProteinOptions(!showProteinOptions)}>
                            <View>
                                <Image source={require('../editar.png')} style={styles.edit} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.options}>{protein}</Text>
                    </View>
                    {showProteinOptions && (
                        <View>
                            {getFilteredOptions(proteinOptions, protein).map((option) => (
                                <TouchableOpacity key={option} onPress={() => handleProteinOptionClick(option)}>
                                    <Text style={styles.dropdownOption}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}

                    {/* Carbs Dropdown */}
                    <View style={styles.scrollview}>
                        <TouchableOpacity onPress={() => setShowCarbOptions(!showCarbOptions)}>
                            <View>
                                <Image source={require('../editar.png')} style={styles.edit} />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.options}>{carb}</Text>
                    </View>
                    {showCarbOptions && (
                        <View>
                            {getFilteredOptions(carbsOptions, carb).map((option) => (
                                <TouchableOpacity key={option} onPress={() => handleCarbOptionClick(option)}>
                                    <Text style={styles.dropdownOption}>{option}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#222221",
        alignItems: 'center'
    },
    header: {
        height: 100,
        width: "100%",
        backgroundColor: "#7B7B8E"
    },
    mealTypeView: {
        alignSelf: 'center',
        marginTop: 15
    },
    area: {
        height: 560,
        width: 360,
        marginTop: 30,
        backgroundColor: 'rgba(178, 178, 207, 0.3)',
        borderRadius: 30
    },
    options: {
        fontSize: 22,
        color: "white"
    },
    edit: {
        height: 30,
        width: 30
    },
    scrollview: {
        flexDirection: 'row',
        gap: 20,
        marginLeft: 20,
        marginTop: 20
    },
    dropdownOption: {
        fontSize: 18,
        color: 'white',
        padding: 10,
        marginLeft: 60
    },
});
