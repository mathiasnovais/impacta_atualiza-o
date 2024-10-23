import { StyleSheet } from 'react-native'; // Importa o módulo para criar estilos

const styles = StyleSheet.create({
    // Estilos gerais do container principal
    conteiner: {
        width: '100%',  // Define a largura como 100% do espaço disponível
        height: '100%', // Define a altura como 100% do espaço disponível
        bottom: '0', // Posiciona o container na parte inferior
        alignItems: 'center', // Alinha o conteúdo ao centro horizontalmente
        marginTop: 0, // Define a margem superior como 0
        paddingTop: 150, // Adiciona um padding superior de 150 pixels
    },
    conteiner2: {
        width: '100%', // Mesma configuração do container anterior
        height: '100%', // Define altura de 100%
        bottom: '0', // Posiciona o container na parte inferior
        alignItems: 'center', // Alinha o conteúdo ao centro horizontalmente
        marginTop: 0, // Define a margem superior como 0
    },
    // Estilos para fundo escuro e claro, usados para alternar tema
    darkBackground: {
        backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o modo escuro
    },
    lightBackground: {
        backgroundColor: 'rgba(233, 233, 233, 1)', // Fundo claro para o modo claro
    },
    // Estilos para o cabeçalho
    cabecalho: {
        alignItems: 'center', // Alinha os itens ao centro horizontalmente
        justifyContent: 'center', // Centraliza verticalmente
        paddingBottom: 40, // Adiciona padding inferior de 40 pixels
    },
    titulo: {
        width: 280, // Largura fixa da imagem
        height: undefined, // Permite que a altura seja ajustada com base no aspecto
        aspectRatio: 280 / 90, // Define a proporção da imagem (largura/altura)
        resizeMode: 'contain', // Ajusta a imagem para se adaptar ao espaço sem cortar
    },
    
    // Estilos para o formulário principal
    form: {
        width: '100%', // Largura do formulário como 100%
        height: 'auto', // Altura automática de acordo com o conteúdo
        padding: 10, // Adiciona padding de 10 pixels
        paddingLeft: 20, // Padding esquerdo de 20 pixels
        paddingRight: 20, // Padding direito de 20 pixels
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
    },
    // Estilos para textos no formulário
    label: {
        fontSize: 18, // Tamanho da fonte do label
    },
    // Estilos para o texto no modo escuro e claro
    darkText: {
        color: 'white', // Cor do texto no modo escuro
    },
    lightText: {
        color: 'black', // Cor do texto no modo claro
    },
    // Estilos para inputs grandes
    inputGrande: {
        borderRadius: 10, // Arredondamento das bordas
        width: '298px', // Largura fixa de 298 pixels
        height: 50, // Altura de 50 pixels
        backgroundColor: 'rgba(222, 222, 222, 1)', // Cor de fundo do input
        marginBottom: 0, // Margem inferior de 0 pixels
        paddingLeft: 10, // Padding à esquerda de 10 pixels
        borderColor: 'rgba(125, 125, 125, 0.8)', // Cor da borda
        borderRightWidth: 4, // Largura da borda direita
        borderBottomWidth: 4, // Largura da borda inferior
    },
    // Estilos para o botão principal
    botao: {
        backgroundColor: "rgba(0, 89, 158, 1)", // Cor de fundo do botão
        width: "298px", // Largura fixa do botão
        height: 50, // Altura do botão
        borderRadius: 10, // Borda arredondada
        alignItems: 'center', // Alinha o texto ao centro horizontalmente
        paddingTop: 12, // Padding superior de 12 pixels
        paddingBottom: 12, // Padding inferior de 12 pixels
        marginTop: 20, // Margem superior de 20 pixels
        justifyContent: 'center', // Centraliza o conteúdo do botão
        borderColor: 'rgba(0, 53, 94, 0.8)', // Cor da borda
        borderRightWidth: 4, // Largura da borda direita
        borderBottomWidth: 4, // Largura da borda inferior
    },
    // Estilos para o texto dentro do botão
    textoBotao: {
        color: 'white', // Cor do texto do botão
        fontSize: 18, // Tamanho da fonte do texto
        fontWeight: 'bold', // Texto em negrito
    },
    // Estilos para mensagens de erro
    erroMenssage: {
        fontSize: 12, // Tamanho da fonte das mensagens de erro
        color: 'red', // Cor do texto de erro
        fontWeight: 'bold', // Texto em negrito
    },
    // Estilos para o componente de alternância de tema (light/dark mode)
    themeToggle: {
        position: 'absolute', // Posiciona o toggle de forma absoluta na tela
        top: 40, // Distância do topo
        right: 20, // Distância da direita
        width: 60, // Largura do container de alternância
        height: 55, // Altura do container de alternância
        borderRadius: 15, // Borda arredondada
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        padding: 5, // Padding interno
    },
    // Estilos para o container da alternância de tema
    toggleContainer: {
        flex: 1, // Ocupar o máximo de espaço disponível
        backgroundColor: 'rgba(128, 128, 128, 0.3)', // Cor do fundo do container no modo claro
        borderRadius: 15, // Arredonda as bordas
        justifyContent: 'center', // Centraliza verticalmente o conteúdo
        padding: 5, // Padding interno
    },
    // Estilos para a "bolinha" dentro do toggle
    toggleBall: {
        width: 20, // Largura da bolinha
        height: 20, // Altura da bolinha
        borderRadius: 10, // Arredondamento completo (bolinha)
        backgroundColor: '#fff', // Cor da bolinha
    },
});

export default styles;
