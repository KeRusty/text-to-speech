import React from 'react';
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import 'braft-editor/dist/index.css'

export default function RichTextInput(props) {

    const [value, setValue] = React.useState(props.initialValue);

    const [editorState, setEditorState] = React.useState(BraftEditor.createEditorState(value));

    const handleEditorChange = (editorState) => {

        const value = editorState.toHTML();

        setEditorState(editorState)
        setValue(value)

        if (props.onChange) props.onChange(value);
    }

    const insertWeakBreak = () => {
        setEditorState(ContentUtils.insertText(editorState, '[weak break]'))
    };

    const insertMediumBreak = () => {
        setEditorState(ContentUtils.insertText(editorState, '[medium break]'))
    };

    const insertStrongBreak = () => {
        setEditorState(ContentUtils.insertText(editorState, '[strong break]'))
    };

    const insertReducedEmphasis = () => {
        setEditorState(ContentUtils.insertText(editorState, '[reduced emphasis]'))
    };

    const insertModerateEmphasis = () => {
        setEditorState(ContentUtils.insertText(editorState, '[moderate emphasis]'))
    };

    const insertStrongEmphasis = () => {
        setEditorState(ContentUtils.insertText(editorState, '[strong emphasis]'))
    };


    const controls = [
        'undo', 'redo', 'separator',
        'bold', 'italic', 'underline', 'emoji', 'separator',
        'separator', 'fullscreen'
    ];

    const extendControls = [
        'separator',
        {
            key: 'weak',
            type: 'button',
            title: 'Insert Weak Break Tag',
            className: 'my-button',
            html: null,
            text: 'Weak Break',
            onClick: insertWeakBreak,
        },
        'separator',
        {
            key: 'medium',
            type: 'button',
            title: 'Insert Medium Break Tag',
            className: 'my-button',
            html: null,
            text: 'Medium Break',
            onClick: insertMediumBreak,
        },
        'separator',
        {
            key: 'strong',
            type: 'button',
            title: 'Insert Strong Break Tag',
            className: 'my-button',
            html: null,
            text: 'Strong Break',
            onClick: insertStrongBreak,
        }
    ]


    return (
        <BraftEditor
            language='en'
            value={editorState}
            controls={controls}
            onChange={handleEditorChange}
            extendControls={extendControls}
        />
    );
}