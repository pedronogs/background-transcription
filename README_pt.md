# DeepSpeech - Background Transcription (pt-BR, Brazilian Portuguese)

Read it in [English](./README.md).

Script em python que utiliza um *audio model* pré-treinado pelo grupo (treinado pela DeepSpeech com audiobooks públicos, dataset do [CommonVoice](https://commonvoice.mozilla.org/pt) e comandos gravados por nós) para realizar VAD (Voice Activity Detection) em *background* e executar os comandos falados, e consequentemente transcritos, em um ambiente linux (testado apenas no Ubuntu).

## Descrição
Esse script utiliza um *audio model* criado pela implementação de *machine learning* do TensorFlow pela [DeepSpeech](https://deepspeech.readthedocs.io/en/v0.8.2/). Além disso, o script foi desenvolvido para rodar em *background* e gravar todo o áudio em tempo real. Quando o [VAD](https://github.com/mozilla/DeepSpeech-examples/tree/r0.8/mic_vad_streaming) detecta alguma forma de fala, ele grava tudo até o ponto em que há apenas silêncio ou ruídos. Esse pedaço de áudio é transcrito utilizando a CLI do DeepSpeech e o *audio model* treinado. O resultado da transcrição é sanitizado e buscado em um dicionário (com a confiabilidade calculada pelo [fuzzywuzzy](https://github.com/seatgeek/fuzzywuzzy)) e se passar de uma confiança mínima, o comando é executado em um subprocesso and a saída do comando é mostrado em uma simples GUI, feita com [eel](https://github.com/samuelhwilliams/Eel).

## Instalação

Antes de instalar os módulos do python, não se esqueça de instalar os pré-requisitos da dor de cabeça chamada **pyaudio**:

```
sudo apt-get install -y portaudio19-dev libjack-jackd2-dev
```

Seguindo, instale os módulos do python (sugiro fortemente que faça isso em um ambiente virtual, com python não se brinca):

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

## Uso

Depois disso instalado, você deve conseguir fazer gravações em tempo real de sua voz e executar os comandos ou até mesmo passar um arquivo pré-gravado em .wav (adicione a opção -f com o arquivo .wav):

```
# Command for real time translation (remove & to run on terminal)
python comandos.py -m models/deepspeech_512.pbmm &
```

## Comandos disponíveis (pt-BR, Brazilian Portuguese)

#### Comandos do sistema

| Transcrição            	| Comando                                       	| Descrição                                  	|
|------------------------	|-----------------------------------------------	|--------------------------------------------	|
| abrir "programa"       	| "programa"                                    	| Abre o programa definido                   	|
| atualizar sistema      	| sudo apt-get update                           	| Atualiza os pacotes do sistema             	|
| caminho                	| pwd                                           	| Mostra o caminho absoluto atual            	|
| criar aquivo "arquivo" 	| touch "arquivo"                               	| Cria novo arquivo                          	|
| criar pasta "pasta"    	| mkdir "pasta"                                 	| Cria nova pasta                            	|
| disco                  	| df -h                                         	| Mostra informações do disco                	|
| fechar                 	| exit                                          	| Finaliza execução do programa              	|
| limpar                 	| clean                                         	| Limpa todo o texto da UI                   	|
| listar                 	| ls                                            	| Lista todos os arquivos do caminho atual   	|
| localizar "arquivo"    	| locate -i "arquivo"                           	| Localiza um arquivo                        	|
| processos              	| ps aux                                        	| Lista todos os processos em execução       	|
| mostrar historico      	| history                                       	| Mostra todo o histórico de comandos        	|
| tempo                  	| uptime                                        	| Lista o tempo que o computador está ligado 	|
| transcrever "frase"    	| deepspeech --model models/deepspeech_512.pbmm 	| Transcreve uma frase                       	|
| versao "programa"      	| "programa" --version                          	| Lista a versão do programa desejado        	|

#### Programas disponíveis

| Programa 	| Comando       	|
|----------	|---------------	|
| chrome   	| google-chrome 	|
| code     	| code .        	|
| discord  	| discord       	|
| firefox  	| firefox       	|
| gedit    	| gedit         	|
| gimp     	| gimp          	|
| spotify  	| spotify       	|

#### Integração com git (palavra de ativação "**repositorio**")

| Transcrição         	| Comando                  	|
|---------------------	|--------------------------	|
| adicionar arquivos  	| git add .                	|
| commitar "mensagem" 	| git commit -m "mensagem" 	|
| empurrar            	| git push origin main     	|
| estado              	| git status               	|
| puxar               	| git pull origin main     	|

## Colaboradores

Turma de Projetos Transversais em Redes de Comunicação 2 da UNB no semestre de 2020/1.