import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Modal, TouchableOpacity, Image, BackHandler } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './style'; // Certifique-se de que o caminho do arquivo de estilo esteja correto.
import { useFocusEffect } from '@react-navigation/native';

const events = {
    '2024-10-28': [{ 
        contratante: 'Gabriel', 
        artista: 'Revelação',
        cache: 2500, 
        estado: 'Rio de Janeiro', 
        cidade: 'Rio de Janeiro', 
        hora: '20:00' 
    }],
    '2024-11-10': [{ 
        contratante: 'Raphael', 
        artista: 'Bonde do Tigrão',
        cache: 2000, 
        estado: 'São Paulo', 
        cidade: 'São Paulo', 
        hora: '21:00' 
    }],
    '2024-11-14': [{ 
        contratante: 'Juliana', 
        artista: 'Malu',
        cache: 2200, 
        estado: 'Minas Gerais', 
        cidade: 'Belo Horizonte', 
        hora: '19:30' 
    }],
    '2024-11-18': [{ 
        contratante: 'João Pedro', 
        artista: 'Rodriguinho',
        cache: 2150, 
        estado: 'Rio Grande do Sul', 
        cidade: 'Porto Alegre', 
        hora: '14:30' 
    }],
    '2024-11-22': [{ 
        contratante: 'Mathias', 
        artista: 'Legado',
        cache: 2400, 
        estado: 'Bahia', 
        cidade: 'Salvador', 
        hora: '12:00' 
    }],
};

const CustomCalendar = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [eventDetails, setEventDetails] = useState(null);
    const [modalProximosVisible, setModalProximosVisible] = useState(false);
    const [modalNoShowVisible, setModalNoShowVisible] = useState(false); // Novo modal

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                if (modalVisible || modalProximosVisible || modalNoShowVisible) {
                    setModalVisible(false);
                    setModalProximosVisible(false);
                    setModalNoShowVisible(false);
                    return true; // Previne que o usuário saia da tela quando um modal está aberto
                }
                return false;
            };

            const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => backHandler.remove();
        }, [modalVisible, modalProximosVisible, modalNoShowVisible])
    );

    const onDayPress = (day) => {
        const dateString = day.dateString;
        setSelectedDate(dateString);
        
        if (events[dateString]) {
            setEventDetails(events[dateString]);
            setModalVisible(true);
        } else {
            setModalNoShowVisible(true); // Mostra o modal personalizado quando não há shows
        }
    };

    const showsProximos = () => {
        const today = new Date();
        const proximosShows = Object.keys(events).filter(date => {
            const eventDate = new Date(date);
            return eventDate >= today;
        }).sort((a, b) => new Date(a) - new Date(b));

        return proximosShows.slice(0, 3).map(date => ({
            date,
            events: events[date],
        }));
    };

    const renderEventItem = ({ item }) => (
        <View style={styles.eventItem}>
            <Text>Contratante: {item.contratante}</Text>
            <Text>Artista: {item.artista}</Text>
            <Text>Cache: R$ {item.cache}</Text>
            <Text>Estado: {item.estado}</Text>
            <Text>Cidade: {item.cidade}</Text>
            <Text>Hora: {item.hora}</Text>
        </View>
    );

    const renderProximosShows = ({ item }) => (
        <View style={styles.eventItem}>
            <Text>Data: {item.date}</Text>
            {item.events.map((evento, index) => (
                <View key={index}>
                    <Text>Contratante: {evento.contratante}</Text>
                    <Text>Artista: {evento.artista}</Text>
                    <Text>Cache: R$ {evento.cache}</Text>
                    <Text>Estado: {evento.estado}</Text>
                    <Text>Cidade: {evento.cidade}</Text>
                    <Text>Hora: {evento.hora}</Text>
                </View>
            ))}
        </View>
    );

    const handleNavigate = () => {
        navigation.navigate('Forms'); 
    };

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
                            acc[date] = { marked: true, dotColor: 'rgba(0, 89, 158, 1)' };
                            return acc;
                        }, {}),
                        [selectedDate]: { selected: true, selectedColor: '#00adf5' },
                    }}
                    theme={{
                        todayTextColor: '#00adf5',
                        dayTextColor: 'rgba(18, 18, 18, 1)',
                        textDisabledColor: '#d9e1e8',
                        monthTextColor: 'rgba(0, 89, 158, 1)',
                        weekDayTextColor: 'rgba(10, 10, 10, 1)',
                        arrowColor: '#00adf5',
                    }}
                />
            </View>

            <View style={styles.botaoContainer}>
                <TouchableOpacity 
                    style={styles.customButton} 
                    onPress={() => setModalProximosVisible(true)}
                >
                    <Text style={styles.customButtonText}>Shows Próximos</Text>
                </TouchableOpacity>
            </View>

            {/* Modal para detalhes do evento */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={[styles.modalTitle, { color: '#fff' }]}>
                            {eventDetails ? `Eventos em ${selectedDate}` : `Nenhum evento em ${selectedDate}`}
                        </Text>
                        {eventDetails && (
                            <FlatList
                                data={eventDetails}
                                renderItem={renderEventItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        )}
                        
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                            <TouchableOpacity 
                                style={[styles.customButton, { flex: 1, marginRight: 10 }]} 
                                onPress={handleNavigate}
                            >
                                <Text style={styles.customButtonText}>
                                    {eventDetails ? 'Editar' : 'Cadastrar'}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[styles.customButton, { flex: 1, backgroundColor: 'rgba(0, 89, 158, 1)', marginLeft: 10 }]} 
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.customButtonText}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal para shows próximos */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalProximosVisible}
                onRequestClose={() => setModalProximosVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={[styles.modalTitle, { color: '#fff' }]}>Shows Próximos</Text>
                        <FlatList
                            data={showsProximos()}
                            renderItem={renderProximosShows}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <TouchableOpacity 
                            style={[styles.customButton, { marginTop: 20, backgroundColor: 'rgba(0, 89, 158, 1)' }]} 
                            onPress={() => setModalProximosVisible(false)}
                        >
                            <Text style={styles.customButtonText}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Novo Modal: Nenhum Show Encontrado */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalNoShowVisible}
                onRequestClose={() => setModalNoShowVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={[styles.modalTitle, { color: '#fff' }]}>Nenhum Show Encontrado</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity 
                                style={[styles.customButton, { flex: 1, marginLeft: 10, backgroundColor: 'rgba(0, 89, 158, 1)' }]} 
                                onPress={handleNavigate}
                            >
                                <Text style={styles.customButtonText}>Cadastrar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={[styles.customButton, { flex: 1, marginRight: 10, backgroundColor: 'rgba(0, 89, 158, 1)'  }]} 
                                onPress={() => setModalNoShowVisible(false)}
                            >
                                <Text style={styles.customButtonText}>Sair</Text>
                            </TouchableOpacity>

                            
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CustomCalendar;
