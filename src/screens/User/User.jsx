import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import $api from "../../http/index.js";
import Fire from "../../UI/Fire";
import fire from "../../assets/icons/fire.svg";

const User = () => {
    const {id} = useParams()
    const [user, setUser] = useState(null)
    useEffect(() => {
        $api.get(`http://localhost:8080/api/user/${id}`).then(res => setUser(res.data))
    }, [])
    return (
        <div>
            {
                user ? <div className={'w-full'}>
                    <div className={'w-full flex flex-col gap-10 bg-white desktop:rounded-xl pb-[20px]'}>
                        <div className={'relative'}>
                            <img className={'w-full h-[150px] object-cover bg-center bg-contain desktop:rounded-t-xl'} src={user.banner} alt=""/>
                            <img className={'w-[72px] h-[72px] object-cover bg-center bg-contain rounded-2xl border-4 border-white absolute top-[100px] left-[20px]'} src={user.avatar} alt=""/>
                        </div>
                        <div className={'px-[20px]'}>
                            <div className={'flex items-center justify-between'}>
                                <div className={'flex items-center gap-3'}>
                                    <h1 className={'font-black text-xl'}>{user.fullname}</h1>
                                    {
                                        user.is_premium && <img src={fire} alt='' />
                                    }
                                </div>
                            </div>
                            <span className={'text-[12px] text-slate-500'}>{user.status}</span>
                        </div>
                        <div className={'px-[20px] flex flex-col gap-4'}>
                            <div className={'flex items-center gap-4'}>
                                <span className={'font-bold text-green-500'}>+ 1 521</span>
                                <span className={'opacity-75'}>124 подписчиков</span>
                            </div>
                            <span className={'opacity-75'}>На проекте с 2 февраля 2023</span>
                        </div>
                        <div className={'px-[20px] flex items-center gap-5 font-medium'}>
                            <NavLink to={`/u/${user.id}/posts`}>
                                Публикации
                            </NavLink>
                            <NavLink to={`/u/${user.id}/comments`}>
                                Комментарии
                            </NavLink>
                        </div>
                    </div>
                </div> : <div>
                    <h1>Пользователь не найден</h1>
                </div>
            }
        </div>
    );
};

export default User;