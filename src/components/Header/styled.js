import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background: #00BFFF;
    height: 80px;
    padding-left: 30px;
`

export const Text = styled.Text`
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`
export const Touch = styled.TouchableOpacity`
    width: 15%;
`
export const TouchDelete = styled(Touch)`
    right: 0;
    position: absolute;
`
