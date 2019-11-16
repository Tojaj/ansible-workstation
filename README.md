# Ansible playbook for my machine

This playbook assumes:
* Fedora linux distribution
* x86_64 architecture

# Prerequisites

    $ sudo dnf install ansible git


# How to use this playbook

## Check mode (Dry run)

You can use:

    $ ./run.sh

or directly:

    $ ansible-playbook workstation.yaml --become --ask-become-pass -vv --check

**Note:** The dry run may fail for example on packages that are not
found because the installatio nof repo files was also just a dry run.

## Real run

    $ ansible-playbook workstation.yaml --become --ask-become-pass -vv


# Config options of this playbook

You can see and set the variables in:

    roles/common/defaults/main.yaml


# Extra variables you can pass on command line

Extra variables that you can pass to the playbook via ``-e`` or
``--extra-vars`` option:

* ``complete`` - Will install also packages for virtualization
& machine learning


## The role bundles these libraries:

* mountopts
  * URL: https://github.com/Uberspace/ansible-mountopts
  * License: MIT

