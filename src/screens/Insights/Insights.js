import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import {themeColor} from '../../theme';

const Insights = () => {
    return (
        <LinearGradient colors={[themeColor.primaryColor.dark,themeColor.primaryColor.main]}
                        style={styles.container}>
            <Text style={styles.title}>Insights Screen</Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:50,
        color:themeColor.primaryColor.text
    }
});

export default Insights;
