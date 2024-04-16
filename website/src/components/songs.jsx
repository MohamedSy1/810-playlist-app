const Songs = ({ song }) => {
    return (

        <ul>
            {
                song.map((val) => {
                    return <li className="border-2 text-center md:p-10 bg-white text-black mb-7">{val.name}</li>
                })
            }
        </ul>
    );
}

export default Songs;