import React, { useState, useRef, useMemo, useCallback } from 'react';
import JoditEditor from 'jodit-react';
 import './CustomEditor.css';

function CustomEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Start typing...',
      buttons: [
        'bold',
        'italic',
        'underline',
        '|',
        'ul',
        'ol',
        '|',
        'font',
        'fontsize',
        'brush',
        '|',
        'image',
        'link',
        '|',
        'align',
        'undo',
        'redo'
      ],
      height: 400,
      uploader: {
        insertImageAsBase64URI: true
      }
      
    }),
    []
  );

  const handleBlur = useCallback((newContent) => {
    setContent(newContent);
  }, []);

  const handleChange = useCallback((newContent) => {
     setContent(newContent);
  }, []);

  return (
    <div className='custom-jodit'>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={handleBlur}
        onChange={handleChange}
        className=''
      />
    </div>
  );
}

export default CustomEditor;
