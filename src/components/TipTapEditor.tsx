'use client'

// import './styles.scss'

import React from 'react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { EditorContent, useEditor } from '@tiptap/react'
import Bold from '@tiptap/extension-bold'

export default function TipTapEditor() {
    const editor = useEditor({
        extensions: [Document, Paragraph, Text, Bold],
        content: `
        <p>This isn’t bold.</p>
        <p><strong>This is bold.</strong></p>
        <p><b>And this.</b></p>
        <p style="font-weight: bold">This as well.</p>
        <p style="font-weight: bolder">Oh, and this!</p>
        <p style="font-weight: 500">Cool, isn’t it!?</p>
        <p style="font-weight: 999">Up to font weight 999!!!</p>
      `,
    })

    if (!editor) {
        return null
    }

    return (
        <>
            <div className="flex gap-2">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`bg-slate-800 p-2 rounded ${editor.isActive('bold') ? 'is-active' : ''}`}
                >
                    Toggle bold
                </button>
                <button
                    onClick={() => editor.chain().focus().setBold().run()}
                    disabled={editor.isActive('bold')}
                >
                    Set bold
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetBold().run()}
                    disabled={!editor.isActive('bold')}
                >
                    Unset bold
                </button>
            </div>
            <EditorContent editor={editor} />
        </>
    )
}
