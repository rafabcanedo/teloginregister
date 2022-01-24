import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// import Inputs an Submit
import Inputs from '../Inputs';
import Submit from '../Submit';


const Login = props => {
    return (
     <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
            <Image 
            source={require('../../assets/images/login.png')}
            resideMode="center"
            style={styles.image} />
            <Text style={styles.textTitle}>Seja Bem Vindo</Text>
            <Text style={styles.textBody}>Já está cadastrado?</Text>
            <View style={styles.viewNaosei} />
            <Inputs name="Email" icon="user" />
            <Inputs name="Senha" icon="lock" pass={true} />
            <View style={styles.viewForget}>
                <Text style={styles.textForget}>Esqueceu sua senha?</Text>
            </View>
            <Submit title="Entrar" color="#8ed2c9" />
            <View style={styles.createAccount}>
                <Text style={styles.textBody}>Não é cadastrado?</Text>
                <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => props.navigation.navigate('SignUp')}
                > Cadastrar</Text>
            </View>
        </View>
     </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer:{
        backgroundColor: 'white',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 250, // tamanho
        height: 250, // + abaixa a logo
        marginVertical: 10,
    },
    textTitle:{
        fontFamily: 'Roboto', // test font
        fontSize: 40,
        marginVertical: 10,
    },
    textBody:{
        fontFamily: 'Roboto', // test font
        fontSize: 16,
    },
    viewNaosei:{
        marginTop: 20,
    },
    viewForget:{
        width: '90%',
    },
    textForget:{
        fontFamily: 'Roboto',
        fontSize: 16,
        alignSelf: 'flex-end',
    },
    createAccount:{
        flexDirection: 'row',
        marginVertical: 5,
    },
});

export default Login;