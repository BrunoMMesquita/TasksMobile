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
export const Task = styled.TouchableOpacity`
  flex-direction: row;
`

export const TaskCheck = styled.View`
  padding-top: 30px;
`

export const TaskData = styled.View`
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 16px;
`

export const TitleTask = styled.Text`
  font-size: 20px;
  color: #13131a;
`

export const DescriptionTask = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`