import Special from "../Special/Special";


const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf</h2>
            <section >
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;