import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Modal from '../../../components/UI/Modal/Modal'
import Button from '../../../components/UI/Forms/Button/Button'
import Heading from '../../../components/UI/Headings/Heading'

import * as actions from '../../../store/actions'

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const TodoWrapper = styled.div`
    margin: 1rem 0rem;
    font-size: 1.3rem;
    color: var(--color-white);
    text-align: center;
`


const DeleteTodo = ({ show, close, todo, deleteTodo }) => {
    return (
        <Modal opened={show} close={close}>
            <Heading noMargin size="h1" color="white">
                Deleting todo
            </Heading>
            <Heading bold size="h4" color="white" >
                Are you want to delete this todo?
            </Heading>
            <TodoWrapper>
                {todo.todo}
            </TodoWrapper>
            <ButtonsWrapper>
                <Button
                    contain
                    color="red"
                    type="submit"
                    onClick={() => deleteTodo(todo.id)}
                    // disabled={loading}
                    // loading={loading ? 'Deleting...' : null}
                >
                    Delete
                </Button>
                <Button color="main" contain onClick={close}>
                    Cancel
                </Button>
            </ButtonsWrapper>
        </Modal>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    deleteTodo: actions.deleteTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo)