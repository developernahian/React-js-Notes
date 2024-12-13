import portfoliooo from '../../assets/images/profile.png' //portfoliooo is js variable create by me here

const Header = () => {

    return (
        // BOOKMARK:
        <header className='max-w-7xl mx-auto flex justify-between items-center p-4 border-b-2 '>
            <h1 className='text-4xl font-bold' >Knowledge Cafe</h1>
            <img src={portfoliooo} alt="img" />
        </header>
    );
};

export default Header;