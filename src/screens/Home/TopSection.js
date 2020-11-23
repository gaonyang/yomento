import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GoalStatus from '../../components/GoalStatus/GoalStatus';
import {themeColor} from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopSection = () => {
    return (
        <>
            <Icon name="bell" size={28}
                  color={themeColor.notifyIcon}
                  style={styles.notifyIcon}/>
            <View style={styles.infoContainer}>
                <View style={styles.goalStatus}>
                    <GoalStatus numberOfGoals={3}
                                title={'Weekly Goal'}/>
                    <GoalStatus numberOfGoals={1}
                                title={'Completed Activities'}/>
                </View>
                <Text style={styles.infoText}>
                    Complete 2 sessions to reach your goal!
                </Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    notifyIcon: {
        transform: [{rotate: '20deg'}, {translateY: 70}],
        marginHorizontal: 30,
    },
    infoContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    goalStatus: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoText: {
        fontSize: 14,
        color: themeColor.primaryColor.text,
    },
});

export default TopSection;
