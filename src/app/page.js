"use client";

import { useEffect, useState } from "react";
import Ebook from "./components/Ebook";
export default function Home() {
    const [ebooks, setebooks] = useState([]);
    useEffect(() => {
        (() => {
            fetch("/api/ebooks")
                .then(res => res.json())
                .then(data => {
                    setebooks(data.data);
                    console.log(data.data);
                });
        })();
    }, []);

    return (
        <div className="">
            <h1>Homepage</h1>
            {ebooks.length && ebooks.map(ebook => <Ebook key={ebook._id} data={ebook} />)}
        </div>
    );
}
