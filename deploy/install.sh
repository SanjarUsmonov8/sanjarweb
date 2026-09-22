#!/bin/sh
set -eu

install -o root -g root -m 0644 /tmp/sanjar-main.service /etc/systemd/system/sanjar-main.service
install -o root -g root -m 0644 /tmp/visual-you.service /etc/systemd/system/visual-you.service
install -o root -g root -m 0644 /tmp/nginx.conf /etc/nginx/sites-available/sanjarweb
ln -sfn /etc/nginx/sites-available/sanjarweb /etc/nginx/sites-enabled/sanjarweb

had_default=0
if [ -L /etc/nginx/sites-enabled/default ]; then
  had_default=1
  unlink /etc/nginx/sites-enabled/default
fi

if ! nginx -t; then
  unlink /etc/nginx/sites-enabled/sanjarweb
  if [ "$had_default" -eq 1 ]; then
    ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/default
  fi
  exit 1
fi

systemctl daemon-reload
systemctl enable --now sanjar-main.service visual-you.service
systemctl restart nginx

rm -f /tmp/sanjar-main.service /tmp/visual-you.service /tmp/nginx.conf /tmp/install.sh
