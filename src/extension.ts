import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
  /* commands */
  let cmd = vscode.commands.registerCommand('vscode-context.capitalize', () => {
    customContext('vscode-context.capitalize');
  });
  let cmd2 = vscode.commands.registerCommand('vscode-context.toRed', () => {
    customContext('vscode-context.toRed');
  });
  let cmd3 = vscode.commands.registerCommand('vscode-context.toGreen', () => {
    customContext('vscode-context.toGreen');
  });
  let cmd4 = vscode.commands.registerCommand('vscode-context.toBlue', () => {
    customContext('vscode-context.toBlue');
  });

  context.subscriptions.push(cmd);
  context.subscriptions.push(cmd2);
  context.subscriptions.push(cmd3);
  context.subscriptions.push(cmd4);
}

const customContext = (key: string) => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;
    let text = document.getText(selection);
    if (text) {
      switch (key) {
//        case 'vscode-context.capitalize':
//          const upText = text.charAt(0).toUpperCase() + text.slice(1);
//          editor.edit((edit) => {
//            edit.replace(selection, upText);
//          });
//          break;

        case 'vscode-context.toRed':
          // const upText2 = text.toUpperCase();
          const upText2 = "{\\textcolor{red}{\\boldsymbol{" + text + "}}}"; 
          editor.edit((edit) => {
            edit.replace(selection, upText2);
          });
          break;

        case 'vscode-context.toGreen':
          // let lowerCase = text.toLowerCase();
          let lowerCase = "{\\textcolor{green}{\\boldsymbol{" + text + "}}}"; 
          editor.edit((edit) => {
            edit.replace(selection, lowerCase);
          });
          break;

        case 'vscode-context.toBlue':
          // let lowerText = text.toLowerCase();
          let lowerText = "{\\textcolor{blue}{\\boldsymbol{" + text + "}}}"; 
          editor.edit((edit) => {
            edit.replace(selection, lowerText);
          });
          break;
      }
    }
  }
};

export function deactivate() {}
// 先頭意外を小文字
// 小文字に
