# Streamvictus

mooi man

## hls transcoden

Plomp een mp4 bestand met dit commando en dan werkt het huts huts

```console
ffmpeg -i filename.mp4 -codec: copy -start_number 0 -hls_time 10 -hls_list_size 0 -f hls filename.m3u8
```
