import requests


class ResumeData:
    def get_resume():
        req = requests.get(
            "http://dev.webjox.ru/api.php?key=aasdkjgfiutnlmnbxhydgsfwersdf&model=cv"
        )
        resume = list()
        for i in req.json():
            resume.append(
                {
                    "id": i["id"],
                "resume": i["cv_name"],
                   "url": i["url"],
                  "city": i["city"],
                  "date": i["date"]
                })
        return resume

    def get_uniq_resume():
        req = requests.get(
            "http://dev.webjox.ru/api.php?key=aasdkjgfiutnlmnbxhydgsfwersdf&model=cv"
        )
        recumeces = dict()
        for i in req.json():
            if i["city"] in recumeces:
                recumeces[i["city"]] = recumeces[i["city"]]+1
            else:
                recumeces[i["city"]] = 1
        return recumeces
