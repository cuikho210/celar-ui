#!/usr/bin/bash

cd "$(dirname "$0")"

export $(cat ".env" | xargs)
alias cm=$PWD/commit.sh
alias publish=$PWD/publish.sh

cd -
