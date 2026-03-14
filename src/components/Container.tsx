import React, { Component } from 'react'
import {   KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

interface ContainerProps {
    children: React.ReactNode;
    // ReactNode artinya "Apapun yang bisa dirender"
}

const Container = ({children}: ContainerProps) => {
    return(
        <SafeAreaView style={styles.safe}>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.flex}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.innerContainer}>
                    {children}
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safe: {flex: 1, backgroundColor: '#fff'},
    flex: {flex: 1},
    innerContainer: {flex: 1, padding: 20}
});

export default Container;
