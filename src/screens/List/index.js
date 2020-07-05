import React, { Component } from 'react'
import {
    Container, Task, TitleTask, Delete,
    DescriptionTask, Content, TaskData, TaskCheck
} from './styled'
import Header from '../../components/Header'
import CheckBox from '../../components/CheckBox'
import Constants from 'expo-constants'
import api from '../../services/api'
import { FlatList } from 'react-native'
import Button from '../../components/Button'
import moment from 'moment';
import Loading from '../../components/Loading'

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            loading: true
        }
    }
    async componentDidMount() {
        const response = await api.get('tasks')

        this.setState({ tasks: response.data.tasks, loading: false })
    }

    navigateToAddTask = () => {
        this.props.navigation.navigate('Add');
    }

    navigateToEditTask = (id) => {
        this.props.navigation.navigate('Add', { id });
    }

    navigateToLogin = () => {
        this.props.navigation.navigate('Login')
    }
    render() {
        const { tasks, loading } = this.state
        return (
            <Container style={{ paddingTop: Constants.statusBarHeight }}>
                <Header title="Lista de tarefas" icon="sign-out-alt" onPress={this.navigateToLogin} />
                <Content>
                    {
                        loading ? <Loading />
                            :
                            <>
                                <FlatList
                                    data={tasks}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={task => String(task._id)}
                                    renderItem={({ item: task }) => (
                                        <Task onPress={() => this.navigateToEditTask(task._id)}>
                                            <TaskCheck>
                                                <CheckBox checked={task.completed} disabled color="#8A2BE2" />
                                            </TaskCheck>
                                            <TaskData>
                                                <TitleTask>{task.title}</TitleTask>
                                                <DescriptionTask>{task.description}</DescriptionTask>
                                                <DescriptionTask>{moment(task.date).format('LLLL')}</DescriptionTask>
                                            </TaskData>
                                        </Task>
                                    )}
                                />
                                <Button icon="add" onPress={this.navigateToAddTask} />
                            </>
                    }

                </Content>
            </Container>
        )
    }
}