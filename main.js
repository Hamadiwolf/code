// main.js

async function createOrUpdateFile() {
    const github_token = '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';
    const repository_owner = 'Hamadiwolf';
    const repository_name = 'code';
    const github_folder_path = 'CodeB';
    const file_path = 'texte.txt';
    const inputText = document.getElementById('inputText').value;
    
    // Vérifiez si le fichier existe
    const responseCheck = await fetch(`https://api.github.com/repos/${repository_owner}/${repository_name}/contents/${github_folder_path}/${file_path}`);
    const
