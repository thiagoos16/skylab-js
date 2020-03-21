import React, { Component }  from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from "../services/api";

export default class Main extends Component {
    static navigationOptions = {
        title: 'JSHunt'
    };

    state = {
        docs: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const { docs } = response.data;

        this.setState({ docs });
    }

    renderItem = ({ item }) => (
        <View>
            <Text> {item.title} </Text>
            <Text> {item.description} </Text>
            <TouchableOpacity onPress={() => {}}>
                <Text> Acessar </Text>
            </TouchableOpacity>
        </View>
    )
    
    render() {
        return (
            <View> 
                {/* <Text> Página Main </Text>
                { this.state.docs.map(product => (
                    <Text key={product._id}> {product.title} </Text>    
                ))} */}

                <FlatList
                    data={this.state.docs}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}