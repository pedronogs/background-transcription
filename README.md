# DeepSpeech - Background Transcription (pt-BR, Brazilian Portuguese)

Leia em [Português](./README_pt.md).

Python script that uses a self pre-trained audio model (trained with DeepSpeech) for background VAD (Voice Activity Detection), transcription and transcribed command execution on Linux.

## Description
This script utilizes a self trained audio model by [DeepSpeech's](https://deepspeech.readthedocs.io/en/v0.8.2/) Tensorflow machine learning implementation. Besides that, the script is supposed to run as a background process and record all real-time audio. When the [VAD](https://github.com/mozilla/DeepSpeech-examples/tree/r0.8/mic_vad_streaming) detects some sort of speech, it records everything until there is silence. This portion of audio is transcribed using DeepSpeech's CLI and the pre-trained audio model. The transcribed result is sanitized and searched in a dictionary (with confiability calculated by [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy)) and if it matches something, this command is executed in a **subprocess** shell and the STDOUT output is shown in a simple GUI, made with [eel](https://github.com/samuelhwilliams/Eel).

## Installation

Before installing python modules, don't forget the prerequisites for the monster called **pyaudio**:

```
sudo apt-get install -y portaudio19-dev libjack-jackd2-dev
```

Proceeding, install python modules (highly recommend to do this in virtual environment, don't mess with python):

```
# Install python3.7 and virtualenv
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt-get install -y python3.7 python3.7-dev virtualenv

# Initialize virtualenv in a folder called deepspeech_app
virtualenv -p python3.7 deepspeech_app

# Activate virtualenv
cd deepspeech_app
source bin/activate

# Install python modules
python -m pip install --no-cache-dir -r requirements.txt
```

## Usage

After installing everything, you should be able to either record real-time voice and translate that into commands or use an audio file as the recording (add -f option and the filename .wav):

```
# Command for real time translation, remove & to run on terminal
python comandos.py -m models/deepspeech_512.pbmm &
```

## Available commands (pt-BR, Brazilian Portuguese only)

| Transcrição            	| Comando                                       	| Descrição                                  	|
|------------------------	|-----------------------------------------------	|--------------------------------------------	|
| abrir "programa"       	| "programa"                                    	| Opens program                   	|
| caminho                	| pwd                                           	| Show actual absolute path            	|
| criar aquivo "arquivo" 	| touch "arquivo"                               	| Creates new file                          	|
| criar pasta "pasta"    	| mkdir "pasta"                                 	| Creates new folder                            	|
| disco                  	| df -h                                         	| Show disk information                	|
| fechar                 	| exit                                          	| Finishes program execution              	|
| limpar                 	| -                                         	| Clean all UI text                	|
| listar                 	| ls                                            	| List all files on current directory   	|
| localizar "arquivo"    	| locate -i "arquivo"                           	| Locates a file in the system                        	|
| processos              	| ps aux                                        	| List all processes in execution      	|
| tempo                  	| uptime                                        	| Show for how much time the system is up 	|
| transcrever "frase"    	| - 	| Transcribes a phrase                       	|

#### Available programs

| Program 	| Command       	|
|----------	|---------------	|
| chrome   	| google-chrome 	|
| code     	| code .        	|
| discord  	| discord       	|
| firefox  	| firefox       	|
| gedit    	| gedit         	|
| gimp     	| gimp          	|
| spotify  	| spotify       	|

#### GIT integration (activation word is "**repositorio**")

| Transcrição         	| Comando                  	|
|---------------------	|--------------------------	|
| adicionar arquivos  	| git add .                	|
| commitar "mensagem" 	| git commit -m "mensagem" 	|
| empurrar            	| git push origin main     	|
| estado              	| git status               	|
| puxar               	| git pull origin main     	|

## Collaborators

Turma de Projetos Transversais em Redes de Comunicação 2 da UNB no semestre de 2020/1.