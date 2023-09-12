import React from 'react';
import {View, FlatList} from 'react-native';

const ListComponent=()=>{
    //sample list of data
    const data = [
        {id: '1', text:'Item 1'},
        {id: '2', text:'Item 1'},
        {id: '3', text:'Item 1'}

    ];
    //Render each item in the list
    const renderItem =({item}) =>{
        return <Text style={StyleSheet.item}>item.text</Text>
    };

    return(
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item)=>item.id}
            
            
            />
        </View>
    )
}
