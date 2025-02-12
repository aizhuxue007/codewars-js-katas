#!/bin/bash


git add .
 if [ $? -ne 0 ]; then
    echo "Failed to stage changes"
    exit 1
 fi

git commit -m "add $1"
if [ $? -ne 0 ]; then
  echo "Failed to commit changes"
  exit 1
fi

git push
if [ $? -ne 0 ]; then
   echo "Failed to push changes"
   exit 1
fi

echo "Changes pushed successfully!"
