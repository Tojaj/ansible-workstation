#!/bin/bash

cd "$( dirname "${BASH_SOURCE[0]}" )"

ansible-playbook workstation.yaml --become --ask-become-pass --check -vv
