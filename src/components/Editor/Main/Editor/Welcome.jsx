const Welcome = () => {
    return (
        <>
            <h3>Witaj! Zacznij edytować artykuły wybierając jedną z opcji</h3>
            <button type="button" className="option">
                Nowy...
            </button>
            <button type="button" className="option">
                Otwórz...
            </button>
            <div className="recent">
                <ul className="recent-list">
                    <li>
                        <button type="button" className="option">
                            Artykuł 1
                        </button>
                    </li>
                    <li>
                        <button type="button" className="option">
                            Artykuł 2
                        </button>
                    </li>
                    <li>
                        <button type="button" className="option">
                            Artykuł 3
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Welcome;
