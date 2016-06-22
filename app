#!/bin/bash

registry=docker.sharpen-it.se:5000
user=sharpertraining
repo=ng2-test
version=latest

for i in $*;
do
    params="$params $i"
done

params=$(echo "$params" | sed 's/^ *//g' | sed 's/ *$//g')

case $params in
    build)
        docker build -t $registry/$user/$repo:$version -f Dockerfile.dev .
        ;;
    push)
        docker push $registry/$user/$repo:$version
        ;;
    *)
        echo "Starting Frontend App Image in [$PWD] using arguments [$params]"
        docker run -it --rm -p 3000:3000 --net host -v $PWD:/app:rw $registry/$user/$repo:$version $params

esac
