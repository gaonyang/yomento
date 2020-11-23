import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import {themeColor} from '../../theme';

const largeScrollData = [
    {
        id: '01',
        title: 'first item',
        source: require('../../assets/trooper.jpg'),

    },
    {
        id: '02',
        title: 'second item',
        source: require('../../assets/Diversity.png'),

    },
    {
        id: '03',
        title: 'third item',
        source: require('../../assets/cheer.jpg'),

    },
];
const LargeHorizontalScroll = () => {
    return (
        <View>
            <Text style={styles.sectionTitle}>Large horizontal scroll</Text>
            <FlatList
                contentContainerStyle={{paddingVertical: 8, paddingRight: 8}}
                data={largeScrollData}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={(item) =>
                    <ListItem source={item.item.source}
                              width={276}
                              height={200}/>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        color: themeColor.primaryColor.text,
        marginTop: 8,
        fontSize: 21,
    },
});

export default LargeHorizontalScroll;
