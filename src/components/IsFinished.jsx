import { useEffect, useState } from "react";
import { a } from "../services/axiosinstance";
import BoxImage from "./BoxImage"; 

function IsFinished({ postId }) {
    const [box, setBox] = useState(null); // null - ожидание загрузки
    const [error, setError] = useState(""); // Ошибки загрузки/обновления

 
    useEffect(() => {
        async function fetchData() {
            setError(""); 
            try {
                const res = await a.get(`items/detail/${postId}`);
                if (res.data?.is_finished === undefined) {
                    throw new Error("Поле is_finished отсутствует в ответе сервера");
                }
                setBox(res.data.is_finished);
            } catch (err) {
                setError("Ошибка при загрузке данных");
                console.error("Ошибка при загрузке:", err);
            }
        }
        fetchData();
    }, [postId]);

    // Обновление статуса
    async function handleClick() {
     

        const newState = !box;

        try {
            await a.put(`items/post/update/${postId}/`, { is_finished: newState });
            setBox(newState); // Обновляем состояние
        } catch (err) {
            setError("Ошибка при обновлении статуса");
            console.error("Ошибка при обновлении:", err);
        } 
    }

    return (
        <div>
            {error && <p className="error-text">{error}</p>} 

            <button className="box" onClick={handleClick} type="button" >
                <BoxImage box={box} />
            </button>
        </div>
    );
}

export default IsFinished;

