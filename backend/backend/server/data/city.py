import requests


class CityData:
    def get_city():
        req = requests.get(
            "http://dev.webjox.ru/api.php?key=aasdkjgfiutnlmnbxhydgsfwersdf&model=city"
        )

        cities = list()
        for i in req.json():
            cities.append(
                {
                       "id": i["id"],
               "parrent_id": i["parrent_id"],
                     "name": i["name"],
                    "hh_id": i["hh_id"],
                })
        return cities
