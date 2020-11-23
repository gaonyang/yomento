import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {themeColor} from '../../theme';
import TopSection from './TopSection';
import SmallHorizontalScroll from './SmallHorizontalScroll';
import LargeHorizontalScroll from './LargeHorizontalScroll';

const Home = () => {
    return (
        <LinearGradient colors={[themeColor.primaryColor.dark, themeColor.primaryColor.main]}
                        style={{flex: 1}}>
            <FlatList
                keyExtractor={(item) => 'key'}
                data={[1]}
                contentContainerStyle={{paddingTop: 40}}
                renderItem={() => (
                    <View style={styles.container}>
                        <TopSection/>
                        <SmallHorizontalScroll/>
                        <LargeHorizontalScroll/>
                    </View>
                )}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    smallItemContainer: {
        marginBottom: 10,
    },
    sectionTitle: {
        color: themeColor.primaryColor.text,
        marginTop: 8,
        fontSize: 21,
    },
});

export default Home;
