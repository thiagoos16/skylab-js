import React, { Component }  from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}> {item.title} </Text>
            <Text style={styles.productDescription}> {item.description} </Text>
            <TouchableOpacity style={styles.productButton} onPress={() => {}}>
                <Text style={styles.productButtonText}> Acessar </Text>
            </TouchableOpacity>
        </View>
    )
    
    render() {
        return (
            <View style={styles.container}> 
                {/* <Text> Página Main </Text>
                { this.state.docs.map(product => (
                    <Text key={product._id}> {product.title} </Text>    
                ))} */}

                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item.id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //para ocupar a tela toda
        backgroundColor: "#fafafa"
    },
    
    list: {
        padding: 20,
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color:"#999",
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    }, 

    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
});