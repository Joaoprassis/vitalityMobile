import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Run() {
    const [distance, setDistance] = useState(0.25);
    const [passos, setPassos] = useState(0);
    const [tempo, setTempo] = useState(0); // em segundos
    const [batimentos, setBatimentos] = useState(0);
    const [kcal, setKcal] = useState(0);
    const [ritmo, setRitmo] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const increaseDistance = () => {
        setDistance((prev) => parseFloat((prev + 0.25).toFixed(2)));
    };

    const decreaseDistance = () => {
        setDistance((prev) => (prev > 0.25 ? parseFloat((prev - 0.25).toFixed(2)) : 0.25));
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTempo(prevTempo => prevTempo + 1);
                // Atualize aqui os valores de passos, batimentos, km, kcal e ritmo
                setPassos(prevPassos => prevPassos + 1); // Simulação
                setKm(distance);
                setKcal(prevKcal => prevKcal + 0.05); // Simulação
                setBatimentos(prevBatimentos => prevBatimentos + 0.2); // Simulação
                if (km > 0) {
                    setRitmo((tempo / 60) / km); // em minutos por km
                }
            }, 1000); // Atualiza a cada segundo
        } else if (!isRunning && tempo !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isRunning, tempo, km]);

    const startExercise = () => {
        setIsRunning(true);
    };

    const stopExercise = () => {
        setIsRunning(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercícios e Atividade Física</Text>
            <Text style={styles.subtitle}>Cronometre seu tempo praticando e veja seu desempenho total.</Text>
            <View style={styles.imagePlaceholder}>
                <Image
                    source={require('../../assets/WhatsApp Image 2024-08-08 at 07.24.03.jpeg')}
                    style={styles.image}
                />
            </View>
            <Text style={styles.label}>Seu objetivo</Text>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.button} onPress={decreaseDistance}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.distanceText}>{distance} km</Text>
                <TouchableOpacity style={styles.button} onPress={increaseDistance}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Exercício</Text>
            <TouchableOpacity style={styles.startButton} onPress={startExercise}>
                <Text style={styles.startButtonText}>Iniciar</Text>
            </TouchableOpacity>
            <View style={styles.stats}>
                <Text style={styles.statText}>Passos: {passos}</Text>
                <Text style={styles.statText}>Tempo: {tempo} s</Text>
                <Text style={styles.statText}>Batimentos: {batimentos.toFixed(2)} bpm</Text>
                <Text style={styles.statText}>Distância: {km} km</Text>
                <Text style={styles.statText}>Calorias: {kcal.toFixed(2)} kcal</Text>
                <Text style={styles.statText}>Ritmo: {ritmo.toFixed(2)} min/km</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // ... seus outros estilos

    stats: {
        marginTop: 20,
        alignItems: 'center',
    },
    statText: {
        fontSize: 18,
        marginVertical: 5,
    },
    startButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginTop: 0,
        width: 120,
        height: 64,
    },
    startButtonText: {
        fontSize: 35,
        color: '#fff',
    },
    image: {
        width: 400,
        height: 310,
    },
});