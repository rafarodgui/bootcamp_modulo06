import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
    border-bottom-width: 1px;
    border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#666',
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border: 1px solid #eee;
    padding: 0 15px;
    border-radius: 4px;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border-radius: 4px;
    padding: 0 12px;
    margin-left: 10px;
`;

export const Res = styled.View`
    justify-content: center;
    align-items: center;
`;

export const UserName = styled.Text`
    font-size: 20px;
    color: #7159;
`;
