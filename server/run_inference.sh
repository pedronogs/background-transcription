#!/bin/bash
while getopts v:m:a:s: flag
do
    case "${flag}" in
        v) virtualenv_path=${OPTARG};; # Python virtual environment path, OBRIGATORY
        m) model_path=${OPTARG};; # Model path, OBRIGATORY
        a) audio_path=${OPTARG};; # Audio path, OBRIGATORY
        s) scorer_path=${OPTARG};; # Scorer path, OPTIONAL
    esac
done

if [ -z "$scorer_path" ] # Checks if scorer is set
    then
        source "$virtualenv_path"
        deepspeech --model "$model_path" --audio "$audio_path"
    else
        source "$virtualenv_path"
        deepspeech --model "$model_path"  --scorer "$scorer_path" --audio "$audio_path"
fi