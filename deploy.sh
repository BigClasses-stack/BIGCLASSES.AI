set -e  # Exit on any error
cd /home/ubuntu/BIGCLASSES.AI/stage


git config pull.rebase false
git pull origin QA

docker compose down
docker compose up -d --build