import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Substituicoes({ mealType, proteinOptions, carbsOptions, defaultProtein, defaultCarb }) {
    const navigation = useNavigation();

    const [protein, setProtein] = useState(defaultProtein); // Initial state from props
    const [carb, setCarb] = useState(defaultCarb); // Initial state from props
    const [showProteinOptions, setShowProteinOptions] = useState(false);
    const [showCarbOptions, setShowCarbOptions] = useState(false);

    // Load saved data from AsyncStorage when component mounts
    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const savedProtein = await AsyncStorage.getItem(`${mealType}_protein`);
                const savedCarb = await AsyncStorage.getItem(`${mealType}_carb`);
                if (savedProtein) setProtein(savedProtein); // Set saved protein
                if (savedCarb) setCarb(savedCarb); // Set saved carb
            } catch (error) {
                console.log('Error retrieving data', error);
            }
        };

        _retrieveData(); // Call the function to load saved data
    }, [mealType]); // Reload data when mealType changes

    // Save data to AsyncStorage when protein or carb changes
    useEffect(() => {
        const _storeData = async () => {
            try {
                await AsyncStorage.setItem(`${mealType}_protein`, protein); // Save protein
                await AsyncStorage.setItem(`${mealType}_carb`, carb); // Save carb
            } catch (error) {
                console.log('Error storing data', error);
            }
        };

        _storeData(); // Store the data when it changes
    }, [protein, carb, mealType]); // Trigger when protein or carb changes

    const handleProteinOptionClick = (option) => {
        setProtein(option);
        setShowProteinOptions(false); // Close dropdown after selection
    };

    const handleCarbOptionClick = (option) => {
        setCarb(option);
        setShowCarbOptions(false); // Close dropdown after selection
    };

    const getFilteredOptions = (options, selectedOption) => {
        return options.filter(option => option !== selectedOption); // Filter out the selected option
    };

    return (
        <View style={styles.page}>
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
