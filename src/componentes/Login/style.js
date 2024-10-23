import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: '100%',
        bottom: '0',
        alignItems: 'center',
        marginTop: 0,
        paddingTop: 150,
    },
    conteiner2: {
        width: '100%',
        height: '100%',
        bottom: '0',
        alignItems: 'center',
        marginTop: 0,
    },
    darkBackground: {
        backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o modo escuro
    },
    lightBackground: {
        backgroundColor: 'rgba(233, 233, 233, 1)', // Fundo claro para o modo claro
    },
    cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },
    titulo: {
        width: 280, // Largura fixa da imagem
        height: undefined, // Permite que a altura seja ajustada com base no aspecto
        aspectRatio: 280 / 90, // Define a proporção da imagem (largura/altura)
        resizeMode: 'contain', // Ajusta a imagem para se adaptar ao espaço sem cortar
    },
    
    form: {
        width: '100%',
        height: 'auto',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    label: {
        fontSize: 18,
    },
    darkText: {
        color: 'white', // Cor do texto no modo escuro
    },
    lightText: {
        color: 'black', // Cor do texto no modo claro
    },
    inputGrande: {
        borderRadius: 10,
        width: '298px',
        height: 50,
        backgroundColor: 'rgba(222, 222, 222, 1)',
        marginBottom: 0,
        paddingLeft: 10,
        borderColor: 'rgba(125, 125, 125, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    botao: {
        backgroundColor: "rgba(0, 89, 158, 1)",
        width: "298px",
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 20,
        justifyContent: 'center',
        borderColor: 'rgba(0, 53, 94, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    textoBotao: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    erroMenssage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
    },
    themeToggle: {
        position: 'absolute',
        top: 40, // Ajuste a posição se necessário
        right: 20, // Mantém no canto superior direito
        width: 60, // Largura do container de alternância
        height: 25, // Altura do container de alternância reduzida
        borderRadius: 15,
        justifyContent: 'center',
        padding: 5,
    },
    toggleContainer: {
        flex: 1,
        backgroundColor: 'rgba(128, 128, 128, 0.3)', // Preto no modo claro
        borderRadius: 15,
        justifyContent: 'center',
        padding: 5,
    },
    toggleBall: {
        width: 20, // Largura da bola
        height: 20, // Altura da bola
        borderRadius: 10, // Bola redonda
        backgroundColor: '#fff', // Cor da bola
    },
});

export default styles;
