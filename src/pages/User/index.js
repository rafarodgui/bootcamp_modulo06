import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';

import {
    Container,
    Header,
    Name,
    Avatar,
    Bio,
    Stars,
    Starred,
    Info,
    OwnerAvatar,
    Title,
    Author,
} from './styles';

import api from '../../services/api';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: func,
        }).isRequired,
    };

    state = {
        stars: [],
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');

        const response = api.get(`/users/${user.login}/starred`);

        this.setState({
            stars: response.data,
        });
    }

    render() {
        const { navigation } = this.props;
        const { stars } = this.state;

        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                <Stars
                    data={stars}
                    keyExtractor={star => String(star.id)}
                    renderItem={({ item }) => (
                        <Starred>
                            <OwnerAvatar
                                source={{ uri: item.owner.avatar_url }}
                            />
                            <Info>
                                <Title>{item.login}</Title>
                                <Author>{item.owner.login}</Author>
                            </Info>
                        </Starred>
                    )}
                />
            </Container>
        );
    }
}
