import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Keyboard } from 'react-native';

import api from '../../services/api';

import { Container, Form, Input, SubmitButton, Res, UserName } from './styles';

export default class Main extends Component {
    state = {
        newUser: '',
        users: [],
    };

    handleSubmit = async () => {
        const { users, newUser } = this.state;

        const response = await api.get(`/users/${newUser}`);

        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
        };

        this.setState({
            users: [...users, data],
            newUser: '',
        });

        Keyboard.dismiss();
    };

    render() {
        const { users, newUser } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adicionar Usuário"
                        value={newUser}
                        onChangeText={text => this.setState({ newUser: text })}
                        returnKeyType="send"
                        onSubmitEditing={this.handleSubmit}
                    />
                    <SubmitButton onPress={this.handleSubmit}>
                        <Icon name="add" size={20} color="#fff" />
                    </SubmitButton>
                </Form>
                <Res>
                    {users.map(user => (
                        <UserName key={user.login}>{user.name}</UserName>
                    ))}
                </Res>
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Usuários',
};