import React, { useEffect, useState } from 'react';
import './styles.css';
import {Content} from "./modules";

interface IModel {
    model: {
        data: {
            AttackChain: {
                Title: string;
            }
        }
    }
}

export default function Login() {
    const [ models, setModels] = useState<IModel[]>([]);

    return (
        <div className="wrapper flex justify-center"><Content />
        </div>
   );
}
