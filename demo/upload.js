function runCommand(cmd, args) {
    return new Promise((resolve, reject) => {
        try {
            const process = require('child_process').spawn(cmd, args, {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });
            process.on("close", code => resolve(code));
        } catch (error) {
            reject(error);
        }
    })
}

async function upload() {
    try {
        console.log("Uploading to GitHub Pages...");

        await runCommand("git", ["checkout", "gh-pages"]);
        await runCommand("git", ["add", "build"]);
        await runCommand("git", ["commit", "-m", "Auto publish"]);
        await runCommand("git", ["push"]);
        await runCommand("git", ["checkout", "master"]);

        console.log("Upload complete.");
    } catch (error) {
        console.error(error.stack);
    }
}

upload();
