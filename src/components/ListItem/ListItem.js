import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ListItem = (props) => {
    return (
        <View>
            <Image source={props.source}
                   style={{
                       width: props.width,
                       height: props.height,
                       borderTopRightRadius: 8,
                       borderBottomRightRadius: 8,
                       borderBottomLeftRadius: 8,
                       marginRight: 10,
                   }}
                   resizeMode={'cover'}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ListItem;
