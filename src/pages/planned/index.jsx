import React, { useState } from 'react'
import { SPlanned } from './style'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Header from '../../components/headerTodo'
import { Sbutton_addSchedule } from "./style"
const Planned = () => {

    const [todos, setTodos] = useState([])
    const [day, setDay] = useState("")
    const [currentDate, setCurrentDate] = useState("")

    const getToDosValue = (todoValues, date) => {

        const findDate = todoValues.filter(todo => todo.date === date)
        findDate.sort((a, b) => a.time.localeCompare(b.time))
        setTodos(findDate)

        const day = new Date(date).getDay()
        setDay(day)
        setCurrentDate(date)


    }

    const handleDelete = (id) => {

        const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
        const deleteItem = todos.filter(todo => todo.id !== id)
        localStorage.setItem('todos', JSON.stringify(deleteItem))
        const findDate = todos.filter(todo => todo.date === currentDate)
        findDate.sort((a, b) => a.time.localeCompare(b.time))
        setTodos(findDate.filter((todoItem) => todoItem.id !== id))




    }
    const handleClick_addSchedule = () => {
        const schedule = document.querySelector('.wrapSchedule');
        schedule.classList.remove('show')
        const formAdd_todo = document.querySelector('.formAdd_todo')
        formAdd_todo.classList.add('show')
    }

    return (
        <SPlanned className='wrapSchedule'>

            <div className='container '>
                <Header className="header" getToDosValue={getToDosValue} day={day} />
                <div className='content-container'>
                    {todos.length === 0 ?
                        <div className='notification'>
                            You don't have any plans for this day....
                        </div>
                        : todos.map((todo) => {
                            return (
                                <div key={todo.id}>
                                    <div className='content-item'>
                                        <div className="time">
                                            <p>  <AiOutlineClockCircle /> {todo.time} </p>
                                            <button className="done" onClick={() => {
                                                {
                                                    handleDelete(todo.id)

                                                }

                                            }


                                            }>Delete</button>
                                        </div>
                                        <div className="content">
                                            {todo.todo}
                                        </div>

                                    </div>
                                    <div className='circle'></div>
                                </div>
                            )
                        })}





                </div>
                <Sbutton_addSchedule onClick={handleClick_addSchedule}>Thêm nhiệm vụ</Sbutton_addSchedule>
            </div>
        </SPlanned>
    )
}

export default Planned