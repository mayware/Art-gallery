import { useEffect } from "react";
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="content">
            <div className="contect-content"></div>
        </div>
    );
}

export default Contact;