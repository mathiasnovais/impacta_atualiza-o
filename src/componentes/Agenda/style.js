import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o calendário
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
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

    calendar: {
        backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o calendário
        borderRadius: 10, // Borda arredondada
        borderWidth: 1,
        borderColor: 'rgba(0, 89, 158, 1)', // Cor da borda em azul
        padding: 20,
        width: '90%',
    },
    calendarHeader: {
        backgroundColor: 'rgba(0, 89, 158, 1)', // Cabeçalho azul
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    headerText: {
        color: '#fff', // Texto branco no cabeçalho
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    eventItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    eventTitle: {
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'rgba(18, 18, 18, 1)',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
});

export default styles;