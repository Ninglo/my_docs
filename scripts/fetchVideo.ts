// download_ts_files.ts

const curt = 'ray2'
const outputDir = "./segments" + '_' + curt;
const fileListPath = "./filelist.txt" + '_' + curt;
const urlMap = {
    ray1: 'https://cfvod.kaltura.com/scf/hls/p/3162383/sp/316238300/serveFlavor/entryId/1_fasmud9m/v/1/ev/5/flavorId/1_om8nowjw/name/a.mp4/seg-${index}-v1-a1.ts?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZnZvZC5rYWx0dXJhLmNvbS9zY2YvaGxzL3AvMzE2MjM4My9zcC8zMTYyMzgzMDAvc2VydmVGbGF2b3IvZW50cnlJZC8xX2Zhc211ZDltL3YvMS9ldi81L2ZsYXZvcklkLzFfb204bm93ancvbmFtZS9hLm1wNC8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyNzI2NjEwfX19XX0_&Signature=T0SIpknfE4a4-Qg9xecer6F3uzZh3jomNKinDlysWdtN7YZpUa2UTiQRS5TW2e91ZbpdoQcc2FWQIbawWXxin0Rha0FooKeWhwLhusF7TYbeNahRUuhy4gelhcgtvNHrLfH8iVBGRJqUEcmUVsueOHGAMozB37grecHsBFq0u4s4POFHEjcDwhDMmd8vEk207CoEzgqSR2~JsoF~kj4TOxsbqNYShwi01fA1vQytSkiMvhML1ysTTY72XeW3vRJZImOZVyP2saMhTjkDYbPAzrSYvFmAaGdO9PT7WJ2mhdYXGVKzo9MsM8fIK74HypGpwq3N6utSPCXuoVUdGjVSrQ__&Key-Pair-Id=APKAJT6QIWSKVYK3V34A',
    ray2: 'https://cfvod.kaltura.com/scf/hls/p/3162383/sp/316238300/serveFlavor/entryId/1_rotfo31i/v/1/ev/5/flavorId/1_9x7cvtax/name/a.mp4/seg-${index}-v1-a1.ts?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jZnZvZC5rYWx0dXJhLmNvbS9zY2YvaGxzL3AvMzE2MjM4My9zcC8zMTYyMzgzMDAvc2VydmVGbGF2b3IvZW50cnlJZC8xX3JvdGZvMzFpL3YvMS9ldi81L2ZsYXZvcklkLzFfOXg3Y3Z0YXgvbmFtZS9hLm1wNC8qIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzIyNzU0NjE5fX19XX0_&Signature=LcwwTRnxQ9Fbrcj~15-agSk8QYRL0UWVmLDb5ZQIz7cIkUPrzDV4-6um-U5T6NglHa~OpqF6GAF0yKs2orIBwZ5H0PzLv5-S3obsXRTlX1PbY60FznKJ6STLrxqSIltSN~uudBPctSm2h~qKobmH07CSrCex8KRI2dL1s3cKoKEP4RM6-jIRTcrnvtdzBNmAy60tlEdGH4YtFcc4WzRPJ-SShQ4nTuVHUVswt0MVQXtpKLOGMUl6Dvg-mvFCmZFbRf6Pt6wF7voMLieEtLKCm0bKKeBhnfmTCmeWHT7SvSXQeVffksdFwDibyaxZafJvc4ue-YbeET-m~he-zf1FEA__&Key-Pair-Id=APKAJT6QIWSKVYK3V34A',
}
const optionMap = {
    ray1: {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": "\"Chromium\";v=\"127\", \"Not)A;Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "sec-gpc": "1",
            "Referer": "https://onenewbite.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    },
    ray2: {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "sec-ch-ua": "\"Chromium\";v=\"127\", \"Not)A;Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "sec-gpc": "1",
            "Referer": "https://onenewbite.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    },
} as const

function makeUrl(index: number) {
    const _url = urlMap[curt];
    return _url.replace('${index}', index.toString());
}


function _fetch(url: string) {
    return fetch(url, optionMap[curt]);
}

async function downloadFile(url: string, path: string, index: number): Promise<boolean> {
    try {
        const response = await _fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.arrayBuffer();
        await Deno.writeFile(path, new Uint8Array(data));
        console.log(`Downloaded segment ${index}`);
        return true;
    } catch (error) {
        console.error(`Failed to download ${url}:`, error);
        return false;
    }
}

async function main() {
    await Deno.mkdir(outputDir, { recursive: true });
    let index = 0;
    const fileList: string[] = [];

    while (true) {
        index++;
        const url = makeUrl(index);
        const filePath = `${outputDir}/segment${index}.ts`;
        const success = await downloadFile(url, filePath, index);
        if (!success) break;
        fileList.push(`file '${filePath}'`);
    }

    await Deno.writeTextFile(fileListPath, fileList.join("\n"));
    console.log("Download complete. File list written to", fileListPath);
}

main();
