import * as vscode from 'vscode';
import { parse } from 'css';
import { window } from 'vscode';
import { getSelectedText } from './utils';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    'css-to-js.convertToJS',
    () => {
      const { activeTextEditor: editor } = window;

      const selection = getSelectedText(editor);
      if (!selection) {
        vscode.window.showInformationMessage('Nothing was selected');
        return;
      }

      console.log('selection', selection);

      try {
        var obj = parse(selection);
        console.log({ obj });
      } catch (e) {
        console.log({ e });
      }

      /*
		1. Get selection
		2. Parse selection
		3. Compile
		4. Replace
	  */
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
