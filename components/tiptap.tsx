"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./toolbar";

const Tiptap: React.FC<{
  description: string;
  onChange: (text: string) => void;
}> = ({ description, onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input transition-all",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="flex flex-col justify-stretch min-h-[250px]">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
