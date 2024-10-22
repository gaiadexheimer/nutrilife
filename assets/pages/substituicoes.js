import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Substituicoes({ title, proteinOptions, carbsOptions, defaultProtein, defaultCarb }) {
    const navigation = useNavigation();

    const [protein, setProtein] = useState(defaultProtein);
    const [carb, setCarb] = useState(defaultCarb);
    const [showProteinOptions, setShowProteinOptions] = useState(false);
    const [showCarbOptions, setShowCarbOptions] = useState(false);

    useEffect(() => {
        // Load saved preferences from AsyncStorage when the component mounts
        const loadPreferences = async () => {
            const savedProtein = await AsyncStorage.getItem('defaultProtein');
            const savedCarb = await AsyncStorage.getItem('defaultCarb');

            // Set protein and carb from saved values or default values
            if (savedProtein) setProtein(savedProtein);
            if (savedCarb) setCarb(savedCarb);
        };

        loadPreferences();
    }, []);

    useEffect(() => {
        // Save protein preference to AsyncStorage when it changes
        const saveProtein = async () => {
            await AsyncStorage.setItem('defaultProtein', protein);
        };
        saveProtein();
    }, [protein]);

    useEffect(() => {
        // Save carb preference to AsyncStorage when it changes
        const saveCarb = async () => {
            await AsyncStorage.setItem('defaultCarb', carb);
        };
        saveCarb();
    }, [carb]);

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
                <View style={styles.titleView}>
                    <Text style={styles.options}>{title}</Text>
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
    titleView: {
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
