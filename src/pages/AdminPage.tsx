import React, {useEffect, useState} from 'react';
import {Container} from "../components/Container";
import {Button} from "../components/ui/Button";
import {PlusSvg} from "../components/ui/svgIcons/PlusSvg";
import {InputText} from "../components/ui/inputText";
import {CheckBox} from "../components/ui/CheckBox";
import {UserMapping} from "../common/user/user-mapping";

export const AdminPage = () => {
  const [openPopup, setOpenPopup] = useState<any>(false)
  const [editWorker, setEditWorker] = useState<any>(false)
  const [workers, setWorkers] = useState<any>([])
  const [test, setTest] = useState<any>()
  const [worker, setWorker] = useState({
    id: '',
    name: '',
    surname: '',
    phone: '',
    login: '',
    password: '',
    jobTitle: {
      'Менеджер': false,
      'Фрезеровка': false,
      'Пайка': false,
      'Сборка': false,
      'Чистка': false,
      'Комплектовка': false,
      'Склад': false
    },
    neonLength: 0,
    active: false
  })

  useEffect(() => {
    const storedWorkers = localStorage.getItem('workers');
    if (storedWorkers) {
      setWorkers(JSON.parse(storedWorkers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workers', JSON.stringify(workers))
  }, [workers])

  const addWorker = () => {
    setOpenPopup(false)
    setEditWorker(false)

    setWorkers((prevState: any) => [...prevState, worker])

    setWorker({
      id: '',
      name: '',
      surname: '',
      phone: '',
      login: '',
      password: '',
      jobTitle: {
        'Менеджер': false,
        'Фрезеровка': false,
        'Пайка': false,
        'Сборка': false,
        'Чистка': false,
        'Комплектовка': false,
        'Склад': false
      },
      neonLength: 0,
      active: false,
    })
  }

  const edit = () => {
    const ty = [...workers]

    const currentWorker = workers.find((idWorker: any) => idWorker.id === test)

    console.log(currentWorker)

    currentWorker.id = worker.id

    setWorkers(ty)

    setOpenPopup(false)
  }

  const editUser = (id: number) => {
    setOpenPopup(true)

    setEditWorker(true)

    const currentWorker = workers.find((idWorker: any) => idWorker.id === id)

    setTest(id)

    setWorker({...worker,
      id: currentWorker.id,
      name: currentWorker.name,
      surname: currentWorker.surname,
      phone: currentWorker.phone,
      login: currentWorker.login,
      password: currentWorker.password,
      neonLength: currentWorker.neonLength,
      jobTitle: {
        'Менеджер': false,
        'Фрезеровка': false,
        'Пайка': false,
        'Сборка': false,
        'Чистка': false,
        'Комплектовка': false,
        'Склад': false
      },
      active: true,
    })
  }

  return (
    <div className={'adminPage'}>
      <Container>
        <div className={'adminPage__wrapper'}>
          <div className={'addWorker'}>
            <Button onClick={() => setOpenPopup(true)} text={'Добавить сотрудника'} after={false} before={true} svg={<PlusSvg/>}/>
            <div className={'workerList'}>
              {workers.map((worker: any) =>
                <div className={'workerList__wrapper'} key={worker.id}>
                  <div className={'workerList__item'}>
                    <div>Имя</div>
                    <div>{worker.name}</div>
                  </div>
                  <div className={'workerList__item'}>
                    <div>Id</div>
                    <div>{worker.id}</div>
                  </div>
                  <div className={'workerList__item'}>
                    <div>Фамилия</div>
                    <div>{worker.surname}</div>
                  </div>
                  <div className={'workerList__item'}>
                    <div>Телефон</div>
                    <div>{worker.phone}</div>
                  </div>
                  <div className={'workerList__item'}>
                    <div>Должность</div>
                    <div>{Object.entries(worker.jobTitle).map(([name, value]) => value ? <span key={name}>{name}</span> : null)}</div>
                  </div>
                  <div className={'workerList__item'}>
                    <div>Длина неона</div>
                    <div>{worker.neonLength}</div>
                  </div>
                  <div className={'workerList__button'}>
                    <Button onClick={() => editUser(worker.id)} text={'Редактировать'} after={false} before={false} svg={null}/>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <div className={`adminPopup ${openPopup ? 'open' : ''}`}>
        <div>
          {Object.entries(worker).map(([key, context]) => {
            if (key === 'jobTitle' || key === 'active') {
              return;
            }

            return (
              <div key={key} className={'adminPopup__box'}>
                <div className={'adminPopup__input'}>
                  <InputText
                    type={key === 'id' || key ===  'phone' || key ===  'neonLength'  ? 'number' : 'text'}
                    value={context}
                    onChange={({target: {value}}: any) => setWorker({...worker, [key]: value})}
                    placeholder={UserMapping[key]}
                    isLabel={true}
                    isVisible={false}/>
                </div>
              </div>
            )
          })}

          {Object.entries(worker.jobTitle).map(([key, value]) =>
            <div key={key} className={'adminPopup__box'}>
              <CheckBox
                checked={value}
                onChange={({target: {checked}}: any) => setWorker({...worker, jobTitle: {...worker.jobTitle, [key]: checked}})}
                placeholder={key}/>
            </div>
          )}
        </div>
        <div className={'adminPopup__button'}>
          <Button
            onClick={editWorker ? edit : addWorker}
            text={editWorker ? 'Изменить' : 'Добавить'} after={false} before={false} svg={null}/>
        </div>
      </div>
    </div>
  );
};