import { useEffect } from "react";
const Categorized = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="categorized-content">
                <h1>Categorized page. Here the user will be able to see selected category</h1>
            </div>
        </div>
    );
}

export default Categorized;