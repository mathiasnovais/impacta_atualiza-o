import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conteiner: {
        flex: 1, // Usa todo o espaço disponível
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignItems: 'center',
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        paddingTop: 0, // Removido paddingTop para evitar empurrar o conteúdo para baixo
        paddingBottom: 40, // Adicionado paddingBottom para ajustar o espaço no fundo
    },
    conteiner2: {
        flex: 1, // Usa todo o espaço disponível
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignItems: 'center',
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
    },

    cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20, // Ajuste conforme necessário
        paddingBottom: 40, // Ajuste o espaço abaixo do cabeçalho
    },

    titulo: {
        width: 280,
        height: 90,
        alignSelf: 'center',
    },

    conteinerArtistas: {
        flex: 1, // Permite que o contêiner dos artistas expanda para ocupar o espaço restante
        alignItems: 'center',
        justifyContent: 'center',
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
    }
});

export default styles;
