import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    padding: 20px;
`

export const Content = styled.View`
    height: 70%;
    padding: 30px;
`

export const Submit = styled.TouchableOpacity`
    background: #00BFFF;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`

export const GoBack = styled(Submit)`
    background: #fff;
    border: 1px;
    border-color: #00BFFF;
`
