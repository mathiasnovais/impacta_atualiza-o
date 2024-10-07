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
        paddingTop:0,
    },
    titulo:{
        width: 280,
        height: 90,
        marginBottom:5,
    },
    alinhar:{
        flexDirection: 'row', 
    },
    form:{
        width:'100%',
        heigh:'auto',
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    },
    label:{
        color:'white',
        fontSize:18,
    },
    label2:{
        color:'white',
        fontSize:18,
        marginLeft:125
    },
    inputGrande:{
        borderRadius: 10,
        widht:'100%',
        height: 50,
        backgroundColor: 'white',
        marginBottom:10,
        paddingLeft:10,
        borderColor:'black',
        borderRightWidth: 4,
        borderBottomWidth: 4,

    },
    inputPequeno:{
        borderRadius: 10,
        widht:'40%',
        height: 50,
        backgroundColor: 'white',
        marginBottom:10,
        paddingLeft:10,
        paddingRight:95,
        borderColor:'black',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    inputPequeno1:{
        borderRadius: 10,
        widht:'40%',
        height: 50,
        backgroundColor: 'white',
        marginBottom:10,
        paddingLeft:10,
        paddingRight:70,
        borderColor:'black',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    inputPequeno2:{
        borderRadius: 10,
        widht:'20%',
        height: 50,
        backgroundColor: 'white',
        marginBottom:10,
        paddingLeft:10,
        marginLeft: 10,   
        paddingRight:100,
        borderColor:'black',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    botao:{
        backgroundColor:"rgba(0, 89, 158, 1)",
        width:"298px",
        heigh:10,
        borderRadius: 10,
        alignItems:'center',
        paddingTop:12,
        paddingBottom:12,
        marginTop: 20,
        borderColor:'rgba(0, 53, 94, 0.8)',
        justifyContent:'center',
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
    },
    caixaSuc:{
        marginTop: 10,
        alignItems:"center",
        justifyContent:"center",
    },
    sucessoMenssage:{
        fontSize: 14,
        color:'lightgreen',
        fontWeight:'bold'
        
    },
    afastar:{
        marginLeft:70
    }


});

export default styles