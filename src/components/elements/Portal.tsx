'use client'
import { assertNotNull } from '@/utils/assertion';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

type Props = {
    id?: string;
    children?: ReactNode;
};

/** Portal component */
export const Portal: React.FC<Props> = ({ id, children }) => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        if (typeof window !== undefined) {
            setIsClient(true);
        }
    }, [isClient]);
    if (!isClient || !id) {
        return null;
    }
    const container = document.getElementById(id);
    assertNotNull(container, `[Portal] Not found target: [id:${id}]`);
    return ReactDOM.createPortal(children, container);
};