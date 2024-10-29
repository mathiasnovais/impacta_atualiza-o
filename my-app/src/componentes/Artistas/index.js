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
            description: "Rodriguinho começou sua carreira em 1994 como vocalista do grupo Os Travessos, um dos maiores nomes do pagode. Ele se destaca pelos hits 'Sorria' e 'Fatalmente'. O cantor segue com sua carreira solo desde 2002, explorando tanto o pagode quanto o samba. Rodriguinho começou a trabalhar com a Impacta em 2010.",
            image: require('../Artistas/Rodriguinho/rodriguinho.jpg'), // Caminho corrigido

        },
        bdt: {
            name: "Bonde do Tigrão",
            description: "O Bonde do Tigrão iniciou sua trajetória no funk carioca em 1999. O grupo é conhecido por levar o funk às massas com músicas de sucesso como 'Cerol na Mão' e 'Tchutchuca', representando o subgênero do funk melody. Atualmente, o trio é formado por Leandrinho, Góia e Maurício. Eles começaram a trabalhar com a empresa em 2002, mantendo uma parceria de sucesso.",
            image: require('../Artistas/BDT/bonde do tigrão.jpg'),
        },
        revelacao: {
            name: "Grupo Revelação",
            description: "Formado em 1991, o Grupo Revelação é uma das maiores bandas de samba e pagode do Brasil. Com clássicos como 'Deixa Acontecer' e 'Tá Escrito'. Em 2018, com a chegada de Jhonatan Alexandre, o Mamute, o grupo entrou em uma nova fase, iniciando uma nova jornada em busca do melhor som e repertório para seus fãs. Já havia trabalhado com a empresa anteriormente, mas assinou contrato oficialmente novamente em 2019.",
            image: require('../Artistas/Revelação/revelação.png'),
        },
        legado: {
            name: "Legado",
            description: "O projeto Legado, criado no final de 2018, reúne três gerações de talento musical: Gaab, seu pai Rodriguinho e seu tio Mr. Dan. Juntos, eles interpretam os grandes sucessos de suas carreiras, oferecendo ao público uma verdadeira celebração da trajetória musical da família. Essa parceria não só destaca a rica herança sonora que une os três, como também homenageia os hits que marcaram diferentes épocas e conquistaram muitos fãs.",
            image: require('../Artistas/Legado/legado.jpg'),
        },
        malu: {
            name: "MaLu",
            description: "MaLu, conhecida como a Princesinha do Pagode, é uma das novas apostas do gênero e chegou ao mercado com o projeto Pagode da MaLu. Durante a pandemia, ela viralizou nas redes sociais com suas versões, cantando e tocando cavaquinho. MaLu começou a trabalhar com a empresa em 2023, prometendo um futuro brilhante no cenário musical.",
            image: require('../Artistas/Malu/Malu.png'),
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
                            source={require('../Artistas/Rodriguinho/rodriguinho.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('../Artistas/Rodriguinho/logo rodriguinho preto.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Bonde do Tigrão */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('bdt')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('../Artistas/BDT/bonde do tigrão.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('../Artistas/BDT/logo bdt.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.alinhar}>
                    {/* Grupo Revelação */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('revelacao')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('../Artistas/Revelação/revelação.png')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('../Artistas/Revelação/logo revelação.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Legado */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('legado')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('../Artistas/Legado/legado.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('../Artistas/Legado/logo legado preto.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Malu */}
                <TouchableOpacity style={styles.artista} onPress={() => openModal('malu')}>
                    <Image
                        style={styles.imgArtista}
                        source={require('../Artistas/Malu/Malu.png')}
                    />
                    <View style={styles.nomeContainer}>
                        <Image
                            style={styles.imgNome}
                            source={require('../Artistas/Malu/logo malu.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Main;
