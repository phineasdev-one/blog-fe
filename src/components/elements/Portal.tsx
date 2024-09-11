'use client';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { assertNotNull } from '@/utils/assertion';

type Props = {
    id?: string;
    children?: ReactNode;
};

/** Portal component */
export const Portal: React.FC<Props> = ({ id, children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Correct use of typeof
        if (typeof window !== 'undefined') {
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
