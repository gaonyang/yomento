import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import {themeColor} from '../../theme';

const smallScrollData = [
    {
        id: '01',
        title: 'first item',
        source: require('../../assets/stickyNote.jpg'),

    },
    {
        id: '02',
        title: 'second item',
        source: require('../../assets/meeting.jpg'),

    },
    {
        id: '03',
        title: 'third item',
        source: require('../../assets/office.jpg'),

    },
];

const SmallHorizontalScroll = () => {
    return (
        <View style={styles.smallItemContainer}>
            <Text style={styles.sectionTitle}>Small horizontal scroll</Text>
            <FlatList
                data={smallScrollData}
                horizontal
                contentContainerStyle={{paddingVertical: 8, paddingRight: 8}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={(item) =>
                    <ListItem source={item.item.source}
                              width={200}
                              height={146}/>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    smallItemContainer: {
        marginBottom: 10,
    },
    sectionTitle: {
        color: themeColor.primaryColor.text,
        marginTop: 8,
        fontSize: 21,
    },
});

export default SmallHorizontalScroll;
