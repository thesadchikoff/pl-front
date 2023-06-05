import React, {useRef} from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Modal from '../../components/Modal/Modal'
import {useState} from 'react'
import MessageBox from '../../components/MessageBox/MessageBox'
import Textarea from '../../components/Textarea/Textarea'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import PostItem from '../../components/PostItem/PostItem'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCategory, fetchPoems} from '../../redux/slices/poems'

const Home = () => {
    const {ref, isShow, setIsShow} = useOnClickOutside(false)
    const {poems, category} = useSelector(state => state.poems)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPoems())
        dispatch(fetchCategory())
    }, [])
    const getStatus = status => {
        console.log(status)
        if (status == 'loaded') {
            return (
                <div className='flex flex-col gap-8'>
                    {poems.items.map(poem => {
                        return <PostItem poem={poem} key={poem.id}/>
                    })}
                </div>
            )
            if (status == 'loading') {
                return (
                    <div className='flex flex-col gap-8 items-center justify-center'>
                        <h1>Загрузка публикаций...</h1>
                    </div>
                )
            }
            if (status == 'error') {
                return (
                    <div className='flex flex-col gap-8 items-center justify-center'>
                        <h1>Произошла серверная ошибка. Повторите запрос позже...</h1>
                    </div>
                )
            }
            else {
                return (
                    <div className='flex flex-col gap-8 items-center justify-center'>
                        <h1>Неизвестная ошибка</h1>
                    </div>
                )
            }
        }
    }
    return (
        <div>
            {isShow && (
                <Modal
                    title={'Стать автором'}
                    isShow={isShow}
                    text={'Отправить на проверку'}
                    fof={ref}>
                    <MessageBox
                        text={
                            'Для того, чтобы получить возможность создавать свои публикации - заполните простую заявку.'
                        }
                    />
                    <Input label={'Укажите псевдоним'} id={2}/>
                    <Textarea
                        label={'Расскажите нам, почему Вы хотите стать автором?'}
                        id={3}
                    />
                </Modal>
            )}

            {poems && getStatus(poems.status)}
        </div>
    )
}

export default Home
