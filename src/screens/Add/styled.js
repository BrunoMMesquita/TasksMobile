import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: 20px;
`
export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: 20px;
  background: #fff;
`

const inputDefault = styled.TextInput`
    border-bottom-width: 1px;
    font-size: 30px;
    padding: 10px 0px;
   
`
export const Input = styled(inputDefault)`
    font-weight: bold;
`
export const TextArea = styled(inputDefault)`
    height: 80px;
    font-size: 16px;
    padding-top: -20px;
`

export const InputDate = styled(inputDefault)`
    width: 60%;
    font-size: 16px;
`

export const InputHour = styled(InputDate)`
    width: 30%;
`

export const Label = styled.Text`
    color: #00BFFF;
`

export const Card = styled.View`
    padding-top: 20px;
`

export const CardDate = styled(Card)`
    padding-top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const IconCalendar = styled.TouchableOpacity`
    left: 58%;
    position: absolute;
    width: 30px;
`

export const IconTime = styled(IconCalendar)`
    left: 98%;
`