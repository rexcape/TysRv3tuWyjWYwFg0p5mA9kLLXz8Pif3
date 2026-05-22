#!/bin/sh
set -eu

hdwnplrzm=$(mktemp)
jcvtbqkxw=$(mktemp)
trap 'rm -f "$hdwnplrzm" "$jcvtbqkxw"' EXIT

if ! curl -sf "$VWAJBEAEQFGH" -o "$hdwnplrzm"; then
  echo "FATAL: Server response is not OK" >&2
  exit 1
fi

echo "${XRMEPYLFLBEF}" | base64 -d >> "$hdwnplrzm"

curl -s -H "Authorization: Bearer ${PJCZEIDONZEC}" "${RFGGVJDCPTGO}" -o "$jcvtbqkxw"

mxrbwlndp=$(sha256sum < "$hdwnplrzm")
tkqvbnwjz=$(sha256sum < "$jcvtbqkxw")

if [ "$mxrbwlndp" != "$tkqvbnwjz" ]; then
  if ! curl -sf -X PUT \
    -H "Authorization: Bearer ${PJCZEIDONZEC}" \
    -H "Content-Type: text/plain" \
    --data-binary "@$hdwnplrzm" \
    "${RFGGVJDCPTGO}" -o /dev/null; then
    echo "FATAL: CF server error" >&2
    exit 1
  fi
  echo "KV value updated"
else
  echo "KV value unchanged"
fi
