import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {themeColor} from '../../theme';

const GoalStatus = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberOfGoals}>{props.numberOfGoals}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical:8,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberOfGoals:{
        fontSize: 54,
        color:themeColor.primaryColor.text,
        fontWeight:'bold'
    },
    title:{
        textAlign:'center',
        color:themeColor.primaryColor.text,
        width: 72,
        fontSize:14
    }
});

export default GoalStatus;
