// merge_ts_files.ts
const fileListPath = "./filelist.txt";
const outputFilePath = "./output.mp4";

async function mergeFiles() {
    // deno-lint-ignore no-deprecated-deno-api
    const process = Deno.run({
        cmd: ["ffmpeg", "-f", "concat", "-safe", "0", "-i", fileListPath, "-c", "copy", outputFilePath],
        stdout: "piped",
        stderr: "piped",
    });

    const { code } = await process.status();
    const rawOutput = await process.output();
    const rawError = await process.stderrOutput();

    const outputString = new TextDecoder().decode(rawOutput);
    const errorString = new TextDecoder().decode(rawError);

    console.log(outputString);
    console.error(errorString);

    if (code === 0) {
        console.log("Merge complete. Output file:", outputFilePath);
    } else {
        console.error("Merge failed with code", code);
    }
}

mergeFiles();