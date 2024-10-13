import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, FlatList, Modal, Button, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './style'; // Certifique-se de que o caminho do arquivo de estilo esteja correto.

const events = {
    '2024-10-11': [{ 
        contratante: 'Gabriel', 
        cache: 2500, 
        estado: 'Rio de Janeiro', 
        cidade: 'Rio de Janeiro', 
        hora: '20:00' 
    }],
    '2024-10-15': [{ 
        contratante: 'Raphael', 
        cache: 2000, 
        estado: 'São Paulo', 
        cidade: 'São Paulo', 
        hora: '21:00' 
    }],
    '2024-10-20': [{ 
        contratante: 'Juliana', 
        cache: 2200, 
        estado: 'Minas Gerais', 
        cidade: 'Belo Horizonte', 
        hora: '19:30' 
    }],
};

const CustomCalendar = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [eventDetails, setEventDetails] = useState(null);

    const onDayPress = (day) => {
        const dateString = day.dateString;
        setSelectedDate(dateString);
        
        if (events[dateString]) {
            setEventDetails(events[dateString]);
            setModalVisible(true);
        } else {
            Alert.alert('Nenhum evento encontrado', `Nenhum evento está programado para ${dateString}.`);
        }
    };

    const renderEventItem = ({ item }) => (
        <View style={styles.eventItem}>
            <Text>Contratante: {item.contratante}</Text>
            <Text>Cache: R$ {item.cache}</Text>
            <Text>Estado: {item.estado}</Text>
            <Text>Cidade: {item.cidade}</Text>
            <Text>Hora: {item.hora}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image
                    style={styles.titulo}
                    source={require('../Title/imagem-apoio.png')} // Ajuste o caminho conforme necessário
                />
            </View>
            <View style={styles.calendar}>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={{
                        ...Object.keys(events).reduce((acc, date) => {
                            acc[date] = { marked: true, dotColor: 'orange' };
                            return acc;
                        }, {}),
                        [selectedDate]: { selected: true, selectedColor: '#00adf5' },
                    }}
                    theme={{
                        todayTextColor: '#00adf5',
                        dayTextColor: 'rgba(18, 18, 18, 1)', // Cor dos dias (fundo escuro)
                        textDisabledColor: '#d9e1e8',
                        monthTextColor: 'rgba(0, 89, 158, 1)', // Cor dos meses (um pouco mais escuro)
                        weekDayTextColor: 'rgba(10, 10, 10, 1)', // Cor da semana
                        arrowColor: '#00adf5',
                    }}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={[styles.modalTitle, { color: '#fff' }]}>Eventos em {selectedDate}</Text>
                        {eventDetails && (
                            <FlatList
                                data={eventDetails}
                                renderItem={renderEventItem}
                                keyExtractor={(item, index) => index.toString()} // Modificado para usar index como chave
                            />
                        )}
                        <Button title="Fechar" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CustomCalendar;
