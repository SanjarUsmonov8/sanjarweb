#!/bin/sh
set -eu

install -o root -g root -m 0440 /tmp/sanjarweb-sudoers /etc/sudoers.d/sanjarweb-deploy
visudo -cf /etc/sudoers.d/sanjarweb-deploy

temporary_keys="$(mktemp /root/.ssh/authorized_keys.XXXXXX)"
awk 'NR == FNR { blocked[$0] = 1; next } !($0 in blocked)' \
  /tmp/visualyou_server.pub /root/.ssh/authorized_keys > "$temporary_keys"
chown root:root "$temporary_keys"
chmod 0600 "$temporary_keys"
mv "$temporary_keys" /root/.ssh/authorized_keys

rm -f /tmp/sanjarweb-sudoers /tmp/visualyou_server.pub /tmp/finalize-access.sh
