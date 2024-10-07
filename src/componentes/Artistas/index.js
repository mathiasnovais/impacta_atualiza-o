import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from './style';

const Main = ({ navigation }) => {
    return (
        <View style={styles.conteiner}>
            <View style={styles.cabecalho}>
                <Image
                    style={styles.titulo}
                    source={require('../Title/imagem-apoio.png')}
                />
            </View>
            <View style={styles.conteinerArtistas}>
                <View style={styles.alinhar}>
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>                        
                        <Image
                            style={styles.imgArtista}
                            source={require('./rodriguinho.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('./logo rodriguinho preto.png')}
                            />
                        </View>                       
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('./bonde do tigrão.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('./logo bdt.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.alinhar}>
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('./revelação.png')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('./logo revelação.png')}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('./legado.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('./logo legado preto.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                    <Image
                        style={styles.imgArtista}
                        source={require('./Malu.png')}
                    />
                    <View style={styles.nomeContainer}>
                        <Image
                            style={styles.imgNome}
                            source={require('./logo malu.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Main;
