import '../styles/scrollupbutton.css';

const Scrollupbutton = () => {

    function scrollToTheTop() {
        window.scrollTo(0, 0);
    }
    return (
        <div className="scroll-up-button">
            <button className="scroll-up-btn" onClick={scrollToTheTop}>
                <i class="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    );
}

export default Scrollupbutton;