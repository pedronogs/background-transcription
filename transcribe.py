import subprocess
import keyboard

def transcribe():
    deepspeech_inference = 'source /home/pedronogs/Desktop/deepspeech/bin/activate;'\
                           'deepspeech --model /home/pedronogs/Desktop/testefinal/deepspeech_200.pbmm --audio /home/pedronogs/Desktop/cama.wav'

    subprocess.Popen(deepspeech_inference, shell=True, executable='/bin/bash')

def run_transcribed_command(command):
    process = subprocess.Popen(command)

def add_keybindings():
    keyboard.add_hotkey('ctrl+shift', transcribe)
    keyboard.wait()

if __name__ == "__main__":
    print("Pressione 'ctrl + shift' para iniciar a gravação. Aperte novamente para pausar e realizar a transcrição.")
    add_keybindings()
