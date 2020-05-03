import { Range, TextEditor } from 'vscode';

export const getSelectedText = (editor?: TextEditor) => {
  const selection = editor?.selection;
  if (!selection) {
    return null;
  }

  return editor?.document.getText(new Range(selection.start, selection.end));
};
