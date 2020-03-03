import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
import Palette from './components/Palette'

const hasDuplicatedText = (todos, text) => {
  return todos.some(todo => todo.text === text)
}

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    colors: [
      { name: 'black', hex: '#343a40', selected: true },
      { name: 'red', hex: '#f03e3e', selected: false },
      { name: 'green', hex: '#12b886', selected: false },
      { name: 'blue', hex: '#228ae6', selected: false },
    ],
    todos: [
      { id: 0, text: 'Hello react!', checked: true },
      { id: 1, text: 'https://fureweb-com.github.io', checked: false },
      { id: 2, text: '리액트 처음 해본 날!', checked: false }
    ]
  }

  clearInput = () => {
    this.setState({ input: '' })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input: text, todos } = this.state;
    if (!text) return

    // 동일한 text가 존재하는지 확인 후 초기화
    if (hasDuplicatedText(todos, text)) return this.clearInput()

    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleColorChange = (name) => {
    // 모두 false로 만든 뒤 조건에 맞는 색상만 selected로 추가
    const colors = this.state.colors.map(color => Object.assign(color, { selected: false }, color.name === name ? { selected: true } : {}))
    this.setState({ colors })
  }

  render() {
    const { input, todos, colors } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleColorChange
    } = this;

    return (
      <TodoListTemplate palette={<Palette colors={colors} onColorChange={handleColorChange}/>} form={
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }>
        <TodoItemList todos={todos} colors={colors} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    )
  }
}

export default App
