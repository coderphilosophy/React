import React from "react";
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

//control will allow the parent element to access the variables and state values of the editor. this {control} will help to pass the control from this component to whoever calls this component.
//<Controller> serves as a bridge between react hook from library and custom input components
export default function RTE({name, control, label, defaultValue}) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <Controller 
                name={name || "content"}
                control={control}
                render={({field: {onChange}}) => (
                    <Editor 
                    initialValue={defaultValue}
                    init={{
                        initialValue:defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image",
                            "advlist",
                            "autolink",
                            "lists",
                            "link",
                            "image",
                            "charmap",
                            "preview",
                            "anchor",
                            "searchreplace",
                            "visualblocks",
                            "code",
                            "fullscreen",
                            "insertdatetime",
                            "media",
                            "table",
                            "code",
                            "help",
                            "wordcount",
                            "anchor",    
                        ],
                        toolbar: 
                            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}"
                    }}
                    onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
    // The first onChange is a callback from TinyMCE, triggered when the content in the editor changes.
    // The second onChange is a function provided by React Hook Form's Controller, responsible for updating the form state with the changed content.
    
    // So, when the content of the TinyMCE editor changes, the first onChange (from TinyMCE) triggers, and it calls the second onChange (from React Hook Form's Controller). This second onChange is responsible for updating the form state with the new content of the editor.
}