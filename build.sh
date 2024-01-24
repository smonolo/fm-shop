#!/bin/bash

branches=("staging" "main")

for i in ${branches[@]}; do
  echo "Checking if branch should be deployed"

  if [[ $i == $VERCEL_GIT_COMMIT_REF ]]; then
    echo "Branch $i should be deployed. Proceeding with build step..."
    exit 1
  fi
done

echo "Branch $VERCEL_GIT_COMMIT_REF should not be deployed. Skipping build step and exiting..."
exit 0