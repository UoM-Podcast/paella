#!/bin/sh
# Build and deploy paella tarball

repopath=$1

rm -rf paella
mv build paella
tar -czf paella.tar.gz paella

mkdir -p $repopath
mv paella.tar.gz $repopath
