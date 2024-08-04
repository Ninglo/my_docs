import whisper
import datetime


def generate_srt(transcription, output_file):
    with open(output_file, "w") as f:
        for i, segment in enumerate(transcription["segments"]):
            start = str(datetime.timedelta(seconds=segment["start"]))
            end = str(datetime.timedelta(seconds=segment["end"]))
            text = segment["text"]
            f.write(f"{i + 1}\n{start} --> {end}\n{text}\n\n")


def main(audio_file, output_file):
    model = whisper.load_model("base")
    transcription = model.transcribe(audio_file, language="zh")
    generate_srt(transcription, output_file)


if __name__ == "__main__":
    name = "output_2"
    audio_file = "/Users/jiujianian/Movies/8_3.MP3"
    output_file = "/Users/jiujianian/Documents/my_docs/" + name + ".srt"
    main(audio_file, output_file)
