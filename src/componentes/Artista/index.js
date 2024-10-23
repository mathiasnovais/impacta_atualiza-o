import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal, Pressable } from "react-native";
import styles from './style';

const Main = () => {
    const [visibleModal, setVisibleModal] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null);

    const openModal = (artist) => {
        setSelectedArtist(artist);  // Define o artista selecionado
        setVisibleModal(true);      // Abre o modal
    };

    const closeModal = () => {
        setVisibleModal(false);     // Fecha o modal
        setSelectedArtist(null);    // Reseta o artista selecionado
    };

    const artistData = {
        rodriguinho: {
            name: "Rodriguinho",
            description: "Rodriguinho começou sua carreira em 1994 como vocalista do grupo Os Travessos, um dos maiores nomes do pagode. Ele se destaca pelos hits 'Sorria' e 'Fatalmente'. O cantor segue com sua carreira solo desde 2002, explorando tanto o pagode quanto o samba.",
            image: require('src/componentes/Artista/Rodriguinho/rodriguinho.jpg'),
        },
        bdt: {
            name: "Bonde do Tigrão",
            description: "O Bonde do Tigrão iniciou sua trajetória no funk carioca em 1999. O grupo é conhecido por levar o funk às massas com músicas de sucesso como 'Cerol na Mão' e 'Tchutchuca', representando o subgênero do funk melody.",
            image: require('src/componentes/Artista/BDT/bonde do tigrão.jpg'),
        },
        revelacao: {
            name: "Grupo Revelação",
            description: "Formado em 1991, o Grupo Revelação é uma das maiores bandas de samba e pagode do Brasil. Com clássicos como 'Deixa Acontecer' e 'Tá Escrito', o grupo mantém um legado sólido no cenário musical até hoje.",
            image: require('src/componentes/Artista/Revelação/revelação.png'),
        },
        legado: {
            name: "Legado",
            description: "O grupo Legado traz uma nova proposta de pagode, misturando o estilo tradicional com influências modernas. Formado em 2017, o grupo já conquistou o público com sucessos como 'Um Sinal'.",
            image: require('src/componentes/Artista/Legado/legado.jpg'),
        },
        malu: {
            name: "MaLu",
            description: "MaLu é uma jovem cantora brasileira que ganhou destaque em 2020 com sua voz marcante e estilo único. Seu som mescla pop com elementos da MPB.",
            image: require('src/componentes/Artista/Malu/Malu.png'),
        },
    };

    return (
        <View style={styles.conteiner}>
            <View style={styles.cabecalho}>
                <Image
                    style={styles.titulo}
                    source={require('../Title/imagem-apoio.png')}
                />
            </View>

            {/* Modal para exibir as informações do artista */}
            <Modal
                transparent={true}
                visible={visibleModal}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {selectedArtist && (
                            <>
                                <Image style={styles.modalImage} source={artistData[selectedArtist].image} />
                                <Text style={styles.modalTitle}>{artistData[selectedArtist].name}</Text>
                                <Text style={styles.modalDescription}>{artistData[selectedArtist].description}</Text>
                                <Pressable style={styles.closeButton} onPress={closeModal}>
                                    <Text style={styles.closeButtonText}>Fechar</Text>
                                </Pressable>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

            <View style={styles.conteinerArtistas}>
                <View style={styles.alinhar}>
                    {/* Rodriguinho */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('rodriguinho')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/Rodriguinho/rodriguinho.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/Rodriguinho/logo rodriguinho preto.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Bonde do Tigrão */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('bdt')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/BDT/bonde do tigrão.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/BDT/logo bdt.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.alinhar}>
                    {/* Grupo Revelação */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('revelacao')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/Revelação/revelação.png')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/Revelação/logo revelação.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Legado */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('legado')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/Legado/legado.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/Legado/logo legado preto.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Malu */}
                <TouchableOpacity style={styles.artista} onPress={() => openModal('malu')}>
                    <Image
                        style={styles.imgArtista}
                        source={require('src/componentes/Artista/Malu/Malu.png')}
                    />
                    <View style={styles.nomeContainer}>
                        <Image
                            style={styles.imgNome}
                            source={require('src/componentes/Artista/Malu/logo malu.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Main;
