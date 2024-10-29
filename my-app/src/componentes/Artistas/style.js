import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
    },

    conteiner2: {
        flex: 1,
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },
    
    titulo: {
        width: 280,
        height: 90,
        alignSelf: 'center',
    },

    conteinerArtistas: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20,
    },

    alinhar: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
    },

    artista: {
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        width: 134,
        height: 157,
        borderRadius: 10,
        position: 'relative',
    },

    imgArtista: {
        width: 134,
        height: 120,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderWidth: 1,
        borderColor: 'rgba(0, 89, 158, 1)',
        borderBottomWidth: 0,
    },

    nomeContainer: {
        width: 134,
        height: 41,
        backgroundColor: 'rgba(0, 89, 158, 1)',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
    },

    imgNome: {
        width: 100,
        height: 37,
        alignSelf: 'center',
        resizeMode: 'contain'
    },

    // Estilos do Modal
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fundo semi-transparente
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 1)', // Fundo do modal branco
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5, // Sombra no Android
        alignItems: 'center',
    },

    modalImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        // Adicionando borda à imagem do modal
        borderWidth: 3, // Tamanho da borda
        borderColor: 'rgba(0, 89, 158, 1)', // Cor da borda
    },

    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#121212',
        marginBottom: 10,
    },

    modalDescription: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },

    closeButton: {
        width: 100,
        padding: 10,
        backgroundColor: 'rgba(0, 89, 158, 1)',
        borderRadius: 10,
        alignItems: 'center',
    },

    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default styles;
