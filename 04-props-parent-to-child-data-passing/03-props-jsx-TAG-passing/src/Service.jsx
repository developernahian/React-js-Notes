
const Service = ({children, header, ...props}) => {
    console.log(props);
    
    return (
        <div>
            <div>{children}</div>
            <div>{header}</div>
        </div>
    );
};

export default Service;

//UI oupput:::::
// Children h2
// Children h3
// Children p
// This is passed via a custom prop