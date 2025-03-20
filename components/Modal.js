import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomModal = ({ visible, title, message, onConfirm, onCancel }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel} // Se ejecuta cuando el usuario cierra el modal.
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Título */}
          <Text style={styles.title}>{title}</Text>

          {/* Mensaje */}
          <Text style={styles.message}>{message}</Text>

          {/* Botones */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 10, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 10,
    marginRight: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontWeight: 'bold',
    color: '#333',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#b02e85',
    padding: 10,
    marginLeft: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CustomModal;
