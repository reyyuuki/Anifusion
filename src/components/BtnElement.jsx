import '../css/BtnElement.css';

const BtnElement = () => {
    return (
        <div className='BtnContainer'>
            <div className='btns'>Newest</div>
            <div className='btns'>Trending</div>
            <div className='btns'>Popular</div>
            <div className='btns'>Top Rated</div>
        </div>
    );
}
export default BtnElement;