import { Link } from "react-router-dom"

const Details = ({ hiddenBack=true, hiddenAction=true, backText="Back", actionText="", backTo="/", actionTo="/" }) => {

    return (
        <>
            <div className={`d-flex flex-row px-2 pb-5 ${hiddenBack ? 'justify-content-end' : 'justify-content-between'}`}>
                <Link to={backTo} className="text-decoration-none" hidden={hiddenBack}>{`< ${backText}`}</Link>
                <Link to={actionTo} className="text-decoration-none" hidden={hiddenAction}>{actionText}</Link>
            </div>
        </>
    )
};

export default Details;