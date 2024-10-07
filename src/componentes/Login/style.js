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
    conteiner2:{
        width:'100%',
        height:'100%',
        bottom:'0',
        backgroundColor:'rgba(18, 18, 18, 1)',
        alignItems:'center',
        marginTop:0,
    },
    
    cabecalho:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:40,
    },
    titulo:{
        width: 280,
        height: 90,
    },

    form:{
        width:'100%',
        height:'auto', 
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    },
    label:{
        color:'white',
        fontSize:18,
    },
    inputGrande:{
        borderRadius: 10,
        width:'298px',  
        height: 50,
        backgroundColor: 'rgba(222, 222, 222, 1)',
        marginBottom:0,
        paddingLeft:10,
        borderColor:'rgba(125, 125, 125, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    botao:{
        backgroundColor:"rgba(0, 89, 158, 1)",
        width:"298px",
        height: 50, 
        borderRadius: 10,
        alignItems:'center',
        paddingTop:12,
        paddingBottom:12,
        marginTop: 20,
        justifyContent:'center',
        borderColor:'rgba(0, 53, 94, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    textoBotao:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    erroMenssage:{
        fontSize: 12,
        color:'red',
        fontWeight:'bold'
    }

});

export default styles;