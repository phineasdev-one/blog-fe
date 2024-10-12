'use client';

import { FC, useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import sass from 'react-syntax-highlighter/dist/esm/languages/prism/sass';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { CopyIcon, PasteIcon } from '@/assets/icons';
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('sass', sass);

type Props = {
  children: string;
};

const Code: FC<Props> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code copy-button">
      <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className="icon copy-icon">
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter
        language={'javascript'}
        style={tomorrow}
        showInlineLineNumbers>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
