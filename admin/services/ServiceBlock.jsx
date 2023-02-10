import styles from "./ServiceBlock.module.scss";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import('react-quill'), { ssr: false })
import 'react-quill/dist/quill.snow.css';
import { app, database } from "../../lib/firbase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import {useEffect, useState} from "react";
import QuillDescriptionBlock from "@/admin/services/DropResume";
import DropResume from "@/admin/services/DropResume";

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];
const ServiceBlock = () => {
    const dbInstance = collection(database, "services");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [downloadUrl, setDownloadUrl] = useState('')
    const [portfolios, setPortfolios] = useState([]);

    const getPortfolios = () => {
        getDocs(dbInstance).then(data => data.docs.map(item => setPortfolios(prev => [...prev, {...item.data(), id: item.id}])));
    }

    useEffect(() => {
        getPortfolios();
    }, []);


    const addTitle = (e) => {
        setTitle(e.target.value);
    }
    const addDesc = value =>{
        setDescription(value)
    }
    const savePortfolio = () =>{

        addDoc(dbInstance, {
            title,
            description,
            downloadUrl
        }).then(() =>{
            setTitle("");
            setDescription("")
            setDownloadUrl("")
        })
    }
    return (
        <div>
            <button>Создать новую портфолио</button>

            <input
                type="text"
                value={title}
                onChange={addTitle}
                placeholder="Введите названия"
            />
            <ReactQuill
                theme="snow"
                value={description}
                formats={formats}
                modules={modules}
                onChange={addDesc} />

            <DropResume
                downloadUrl={downloadUrl}
                setDownloadUrl={setDownloadUrl}
            />

            <button
                onClick={savePortfolio}
            >Сохранить</button>

            <div>
                <h1>Portfolios</h1>
                <ul>
                    {
                        portfolios.map((item, i) => (
                            <li key={i}>
                                <h3>Title: {item.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: item.description}} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>

            </div>


        </div>
    );
};

export default ServiceBlock;
