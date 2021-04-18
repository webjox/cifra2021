import requests
from itertools import groupby

class VacancyData:
    def get_vacancy():
        req = requests.get(
            "http://dev.webjox.ru/api.php?key=aasdkjgfiutnlmnbxhydgsfwersdf&model=vacancy"
        )
        vacancies = list()
        for i in req.json():
            vacancies.append(
                {
                    "id": i["id"],
               "vacancy": i["vac_name"],
                   "url": i["url"],
                   "city": i["city"],
          "organization": i["org"],
                  "date": i["date"],
                })
        return vacancies

    def get_uniq_vacancy():
        req = requests.get(
            "http://dev.webjox.ru/api.php?key=aasdkjgfiutnlmnbxhydgsfwersdf&model=vacancy"
        )
        vacancies = dict()
        for i in req.json():
            if i["city"] in vacancies:
                vacancies[i["city"]] = vacancies[i["city"]]+1
            else:
                vacancies[i["city"]] = 1
        return vacancies
