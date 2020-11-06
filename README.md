# DeepSpeech - Background Transcription (pt-BR, Brazilian Portuguese)
Python script that uses a pre-trained audio model (trained with DeepSpeech) for background VAD (Voice Activity Detection), transcription and transcribed command execution on Linux.

## Description
This script utilizes a trained audio model by [DeepSpeech's](https://deepspeech.readthedocs.io/en/v0.8.2/) Tensorflow machine learning implementation. Besides that, the script is supposed to run as a background process and record all real-time audio. When the [VAD](https://github.com/mozilla/DeepSpeech-examples/tree/r0.8/mic_vad_streaming) detects some sort of speech, it records everything until there is silence. This portion of audio is transcribed using DeepSpeech's CLI and the pre-trained audio model. The transcribed result is sanitized and searched in a dictionary (with confiability calculated by [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy)) and if it matches something, this command is executed in a **subprocess** shell and the STDOUT output is shown in a simple GUI, made with [eel](https://github.com/samuelhwilliams/Eel).

## Installation

In development

## Usage

In development

## Collaborators

Turma de Projetos Transversais em Redes de Comunicação 2 da UNB no semestre de 2020/1.