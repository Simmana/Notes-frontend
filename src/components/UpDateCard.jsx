import { useNavigate, useParams } from "react-router-dom";
import { a } from "../services/axiosinstance";
import { HOME } from "../services/consts";
import { useEffect, useState } from "react";

function UpdateCard() {
    const { id } = useParams();
    const [content, setContent] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(""); // Для вывода ошибки
    const navigate = useNavigate();

    // Загрузка заметки при монтировании
    useEffect(() => {
        async function fetchPost() {
            setError(""); 
            try {
                const res = await a.get(`items/detail/${id}/`);
                if (!res.data || !res.data.name || !res.data.content) {
                    throw new Error("Данные не найдены");
                }
                setContent(res.data.content);
                setName(res.data.name);
            } catch (e) {
                setError("Ошибка при загрузке данных. Попробуйте позже.");
                console.log(e);
            } 
        }
        fetchPost();
    }, [id]);

    // Обновление данных
    async function handleSubmit(e) {
        e.preventDefault();

        if (!name.trim() || !content.trim()) {
            setError("Название и содержимое не могут быть пустыми.");
            return;
        }

        try {
            await a.put(`items/post/update/${id}/`, { content, name });
            navigate(HOME);
        } catch (err) {
            setError("Ошибка при сохранении. Попробуйте позже.");
            console.log(err);
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error-text">{error}</p>} {/* Ошибка */}

            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control" 
                placeholder="Название заметки..." 
            />
            <textarea 
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="form-control" 
                rows="10" 
                placeholder="Напишите вашу заметку..."
            ></textarea>

            <button className="submit-button" type="submit">Сохранить изменения</button>
        </form>
    );
}

export default UpdateCard;
