
## install pipenv from python3
* pip install --user pipenv

## Steps to start the server
* cd Webjox-hackathon
* pipenv install -d
* pipenv shell
* cd backend
* uvicorn run_server:app --reload

## Database 
* Create a table in the database, create tables that are located in the migrations folder(ctrl+c ctrl+v)
* Copy the query and paste it into the mysql command line
* Fill in the file settings.json

