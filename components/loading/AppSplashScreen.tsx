import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const AppSplashScreen = ({ onFinished, onAsyncLoad }: any) => {
    const translateX = useRef(new Animated.Value(-300)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const handleAsyncLoadAndAnimation = async () => {

            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ]).start();

            if (onAsyncLoad) {
                await onAsyncLoad();
            }

            if (onFinished) {
                onFinished();
            }
        }

        handleAsyncLoadAndAnimation();
    }, [translateX, opacity, onAsyncLoad, onFinished]);

    const animatedStyle = {
        transform: [{ translateX }],
        opacity,
    };

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('@assets/Images/emcd-logo.png')}
                style={[animatedStyle]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 50,
        backgroundColor: '#232637',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AppSplashScreen;
