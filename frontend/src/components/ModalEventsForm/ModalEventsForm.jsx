import React, { useEffect, useState } from 'react';
import  ReactDom from 'react-dom';
import styles from './ModalEventsForm.module.css';
import { Button, Container } from 'reactstrap';
import { BASE_URL } from '../../utils/config';
import axios from 'axios';

const ModalEventsForm = ({ admin }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([])
    const [input, setInput] = useState({
        name: "",
        location: "",
        time: "",
        date: "",
        category: "",
        image: ""
    })


    useEffect(() => {
        const getAxios = async () => {
            const res = await axios.get(`${BASE_URL}/events`)
            if (res) {
                setData(res.data.data)
            }
        }
        getAxios();
    }, [])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.name || !input.location || !input.time || !input.date) {
            alert("Faltan valores requeridos para crear un evento")
        } else {
            await axios.post(`${BASE_URL}/events/new`, input);
            setInput({
                name: "",
                location: "",
                time: "",
                date: "",
                category: "",
                image: ""
            })
            alert("Evento creado exitosamente")
            closeModal();
        }
    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleDeleteEvent = async (id) => {
        await axios.delete(`${BASE_URL}/events/delete/${id}`)
        alert("Evento eliminado con exito")
    }

    if (!admin) {
        return;
    }

    return (
        <Container>
            <button className={styles.btn} onClick={openModal}>Crear Eventos</button>

            {isOpen && ReactDom.createPortal(
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h2>Crea un Evento</h2>
                        <form className={styles.eventForm} onSubmit={(e) => handleSubmit(e)}>
                            <section>
                                <input placeholder="Nombre del Evento:" value={input.name} name='name' onChange={(e) => handleChange(e)} />
                            </section>
                            <section>
                                <input placeholder="Lugar del Evento:" value={input.location} name='location' onChange={(e) => handleChange(e)} />
                            </section>
                            <section>
                                <input placeholder="Hora del Evento:"value={input.time} name='time' onChange={(e) => handleChange(e)} />
                            </section>
                            <section>
                                <input placeholder="Fecha del Evento:"value={input.date} name='date' onChange={(e) => handleChange(e)} />
                            </section>
                            <section>
                                <input placeholder="Categoria del Evento:" value={input.category} name='category' onChange={(e) => handleChange(e)} />
                            </section>
                            <section>
                                <input placeholder="Imagen o Flyer del Evento:" value={input.image} name='image' onChange={(e) => handleChange(e)} />
                            </section>
                            <section className={styles.btnsContainer}>
                                <Button type='submit'>Crear Evento</Button>
                                <Button onClick={closeModal}>Cerrar Modal</Button>
                            </section>
                        </form>
                        <h3 style={{ textAlign:"center"}}>Eventos</h3>
                      {data.length > 0 ? (
                data.map((e) => (
                    <section className={styles.events} key={e._id}>
                        <p>{e.name}</p>
                        <p>{e.date}</p>
                        <button className={styles.btnDelete} onClick={() => handleDeleteEvent(e._id)}>Delete</button>
                    </section>
                ))
            ) : (
                <p>No hay eventos</p>
            )}
                    </div>
                </div>, document.getElementById("portal") )}
        </Container>
    );
};

export default ModalEventsForm;
