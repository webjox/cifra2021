from fastapi import FastAPI, Response

app = FastAPI()
from server.data.get_stat import Statistic
#from server.job_analyzer.analyzer import Analyzer

@app.get("/statistics")
async def root(response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return Statistic.get_statistic()

@app.get("/analize")
async def root(response: Response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return Analyzer.alanyze()
