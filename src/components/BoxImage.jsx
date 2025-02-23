function BoxImage({ box }) {
    if (box === null) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="gray">
                <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />
            </svg> // Иконка загрузки
        );
    }
    if (box) {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="green">
                <path d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4z" />
            </svg> // Галочка
        );
    }
    return null; // Ничего не отображаем, если box === false
}

export default BoxImage;