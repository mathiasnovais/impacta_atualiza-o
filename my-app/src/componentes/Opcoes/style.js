import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        width:'100%',
        height:'100%',
        bottom:'0',
        backgroundColor:'rgba(18, 18, 18, 1)',
        alignItems:'center',
        marginTop:0,
        paddingTop:150,
    },
    cabecalho:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:40,
    },
    titulo:{
        width: 280,
        height: 90,
    },

    conteinerOpcoes:{
        width:'100%',
        heigh:'auto',
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    },
    botao:{
        backgroundColor:"rgba(0, 89, 158, 1)",
        width:"298px",
        heigh:10,
        borderRadius: 10,
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
        marginTop: 20,
        borderColor:'rgba(0, 53, 94, 0.8)',
        justifyContent:'center',
    },
    textoBotao:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    }
});

export default styles