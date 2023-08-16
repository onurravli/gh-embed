import axios from "axios";
import { useState, useEffect } from "react";

const fetchData = async (username) => {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return res.data;
};

const GitHub = (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let mounted = true;
        // eslint-disable-next-line react/prop-types
        fetchData(props.username).then((res) => {
            if (mounted) {
                setData(res);
            }
        });
        return () => (mounted = false);
    });
    return (
        <div className="card">
            <img src={data?.avatar_url} alt={data?.name} />
            <h1>{data?.name}</h1>
            <p>{data?.bio}</p>
        </div>
    );
};
export default GitHub;
