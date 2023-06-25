echo "Waiting for 5 seconds"
sleep 5
curl localhost:3000
echo "Waiting 2 seconds to kill node"
sleep 2
killall node