import React, { useState } from 'react';
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
    return (
        <div className="wrapper flex justify-center"><Content />
        </div>
   );
}
